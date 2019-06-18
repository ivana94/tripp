DROP TABLE IF EXISTS expenses;

CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
    item VARCHAR(255) NOT NULL,
    is_activity BOOLEAN DEFAULT FALSE,
    is_expense BOOLEAN DEFAULT FALSE,
    price INT,
    city VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO expenses (item, is_activity, city, price) VALUES ('Ghibli Museum', true, 'Tokyo', 9);
INSERT INTO expenses (item, is_expense, price) VALUES ('flight', true, 1000);
INSERT INTO expenses (item, is_expense, price) VALUES ('lodging', true, 1000);
INSERT INTO expenses (item, is_expense, price) VALUES ('JR Pass', true, 414);
