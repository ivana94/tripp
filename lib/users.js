const db = require('./database/pg');

exports.getUserById = id => db.getUserById(id);

exports.getUserByEmail = email => db.getUserByEmail(email);

exports.register = (first, last, email, password) => db.registerUser(first, last, email, password);
