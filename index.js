const express = require('express');
const app = express();
const db = require('./config/db')
const bc = require('./config/bc')
const port = process.env.PORT || 5000;

const config = require('./routes/config')

// sets up body parser, cookie session, csurf, serves static directory
config(express, app);


app.post('/login', async (req, res) => {
    try {
        const { rows } = await db.getUserInfoByEmail(req.body.email);

        if (!rows.length) {
            throw new Error('incorrect email');
        }

        const doesMatch = await bc.compare(req.body.password, rows[0].password);

        if (!doesMatch) {
            throw new Error(`jesus christ ${rows[0].first}, did you forget your password?`);
        }

        req.session.userId = rows[0].id;

        res.json({ success: true });

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            error: e.message
        });
    }
});

app.get('/prices', async (req, res) => {
    let { rows } = await db.getPrices();
    res.json(rows);
});

app.get('/logout', (req, res) => {
    req.session = null;
    res.redirect('/welcome');
});

app.listen(port, () => console.log('listening'));
