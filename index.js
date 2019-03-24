const express = require('express');
const app = express();

const users = require('./lib/users')
const prices = require('./lib/prices')
const auth = require('./lib/auth');
const port = process.env.PORT || 5000;

const config = require('./routes/config');

// sets up body parser, cookie session, csurf, serves static directory
config(express, app);

app.get('/get-hiragana', (req, res) => {
    res.json({
        hiragana: require('./content/hiragana')
    })
})

app.get('/user', async (req, res) => {
    // let user = await users.getUserById(req.session.userId);
    res.json({
        notDone: true
    })
})

app.post('/login', async (req, res) => {
    try {
        const user = await users.getUserByEmail(req.body.email);

        if (!user) {
            throw new Error('incorrect email');
        }

        const doesMatch = await auth.compare(req.body.password, user.password);

        if (!doesMatch) {
            throw new Error(`jesus christ ${user.first}, did you forget your password?`);
        }

        req.session.userId = user.id;

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
    let data = await prices.getPrices();
    res.json(data);
});

app.get('/logout', (req, res) => {
    req.session = null;
    res.redirect('/welcome');
});

app.listen(port, () => console.log('listening'));
