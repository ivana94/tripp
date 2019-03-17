const {username, password} = require('./secrets.json');
const spicedPg = require('spiced-pg');
const db = spicedPg(`postgres:${username}:${password}@localhost:5432/jp`);

exports.getPrices = () => {
    let q = `
        SELECT price, expense, expenses.city AS city, activity, activities.city AS city
        FROM prices
        LEFT JOIN expenses
        ON prices.expense_id = expenses.id
        LEFT JOIN activities
        ON prices.activity_id = activities.id
    `
    return db.query(q)
}

exports.registerUser = (first, last, email, password) => {
    return db.query(
        `INSERT INTO users (first, last, email, password)
        VALUES ($1, $2, $3, $4)
        RETURNING id`,
        [first, last, email, password]
    );
};

exports.getPasswordAndIdByEmail = email => {
    return db.query(
        `SELECT password, id FROM users
        WHERE email = $1`,
        [ email ]
    );
};


exports.uploadProfileImage = (userId, profileImgUrl) => {
    return db.query(
        `UPDATE users
        SET imgurl = $2
        WHERE id = $1
        RETURNING imgurl`,
        [userId, profileImgUrl]
    );
};


exports.getUserInfo = userId => {
    let q = 'SELECT first, last, imgurl, bio FROM users WHERE id = $1';
    let params = [ userId ];
    return db.query(q, params);
};
