const db = require('./database/pg');

exports.getUserById = id => db.getUserInfoById(id);

exports.getUserByEmail = email => db.getUserInfoByEmail(email);

exports.register = (first, last, email, password) => db.registerUser(first, last, email, password);
