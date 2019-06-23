const express = require('express');
const app = express();

const prices = require('./lib/prices');
const port = process.env.PORT || 5000;
const { catchErrors } = require('./handlers/catchErrors');
const { handleLogin } = require('./handlers/login');

const config = require('./routes/config');

// sets up body parser, cookie session, csurf, serves static directory
config(express, app);
        
app.get('/get-hiragana', (req, res) => {
    res.json({ hiragana: require('./content/hiragana') });
});

app.get('/user', async (req, res) => {
    // let user = await users.getUserById(req.session.userId);
    res.json({ notDone: true });
});

app.post('/login', catchErrors(handleLogin));

app.post('/price', async (req, res) => {
    const { activity, price, city } = req.body;
    let data = await prices.addActivity(req.body);
    res.json({ success: true });
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

// process.on('unhandledRejection', err => {
//     console.log('unhandledRejection: ', err);
// })
