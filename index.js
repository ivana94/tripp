const express = require('express');
const app = express();
const db = require('./config/db')
const bc = require('./config/bc')
const port = process.env.PORT || 5000;

const config = require('./routes/config')

// sets up body parser, cookie session, csurf, serves static directory 
config(express, app)


app.post('/login', async (req, res) => {
    const { rows } = await db.getPasswordAndIdByEmail(req.body.email);
    const doesMatch = await bc.compare(req.body.password, rows[0].password)
    if (doesMatch) {
        res.json({ success: true })
    }

})

app.get('/prices', async (req, res) => {
    let { rows } = await db.getPrices()
    res.json(rows)
})



app.listen(port, () => console.log('listeningg'));
