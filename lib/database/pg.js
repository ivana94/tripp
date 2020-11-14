const db = require("spiced-pg")(
    process.env.DATABASE_URL || `postgres:postgres:postgres@localhost:5432/jp`
);

exports.getPrices = async () => {
    const { rows } = await db.query(`
        SELECT id, user_id AS userId, item, is_activity, is_expense, price, city FROM expenses;
    `);
    return rows;
};

exports.registerUser = async (first, last, email, password) => {
    const { rows } = await db.query(
        `INSERT INTO users (first, last, email, password)
        VALUES ($1, $2, $3, $4)
        RETURNING id`,
        [first, last, email, password]
    );
    return rows[0].id;
};

exports.getUserByEmail = async (email) => {
    const {
        rows,
    } = await db.query(
        `SELECT password, id, first FROM users WHERE email = $1`,
        [email]
    );
    return rows[0];
};

exports.getUserById = async (userId) => {
    const {
        rows,
    } = await db.query(
        `SELECT id, first, last, color FROM users WHERE id = $1`,
        [userId]
    );
    return rows[0];
};
