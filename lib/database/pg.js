const {username, password} = require('./../../secrets.json');
const db = require('spiced-pg')(process.env.DATABASE_URL || `postgres:${username}:${password}@localhost:5432/jp`);

exports.addActivity = async () => {
    const { rows } = await db.query(`
        SELECT price, expense, expenses.city AS city, activity, activities.city AS city
        FROM prices
        LEFT JOIN expenses
        ON prices.expense_id = expenses.id
        LEFT JOIN activities
        ON prices.activity_id = activities.id
    `);
    return rows;
};

exports.getPrices = async () => {
    const { rows } = await db.query(`
        SELECT price, expense, expenses.city AS city, activity, activities.city AS city
        FROM prices
        LEFT JOIN expenses
        ON prices.expense_id = expenses.id
        LEFT JOIN activities
        ON prices.activity_id = activities.id
    `);
    return rows;
};

exports.registerUser = (first, last, email, password) => {
    return db.query(
        `INSERT INTO users (first, last, email, password)
        VALUES ($1, $2, $3, $4)
        RETURNING id`,
        [first, last, email, password]
    );
};

exports.getUserInfoByEmail = async email => {
    const { rows } = await db.query(`SELECT password, id, first FROM users WHERE email = $1`, [ email ] );
    return rows[0];
};

exports.getUserInfoById = async userId => {
    const { rows } = await db.query('SELECT first, last, imgurl, bio FROM users WHERE id = $1', [ userId ] );
    return rows[0];
};
