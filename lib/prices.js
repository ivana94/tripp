const db = require('./database/pg');

exports.getPrices = () => db.getPrices();
