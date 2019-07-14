DROP TABLE IF EXISTS expenses;

CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    item VARCHAR(255) NOT NULL,
    is_activity BOOLEAN DEFAULT FALSE,
    is_expense BOOLEAN DEFAULT FALSE,
    price INT,
    city VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO expenses (item, user_id, is_activity, city, price) VALUES ('Ghibli Museum', 1, true, 'Tokyo', 9);
INSERT INTO expenses (item, user_id, is_expense, price) VALUES ('flight', 1, true, 1000);
INSERT INTO expenses (item, user_id, is_expense, price) VALUES ('lodging', 1, true, 1000);
INSERT INTO expenses (item, user_id, is_expense, price) VALUES ('JR Pass', 1, true, 414);
