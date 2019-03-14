const express = require('express');
const app = express();
const bp = require('body-parser');
const db = require('./config/db')
const port = process.env.PORT || 5000;

app.use(bp.json());
app.use(express.static('./client/public'));

app.get('/prices', async (req, res) => {
    let { rows } = await db.getPrices()
    res.json(rows)
})

app.listen(port, () => console.log('listeningg'));
