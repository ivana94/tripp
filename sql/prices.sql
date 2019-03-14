DROP TABLE IF EXISTS prices;

CREATE TABLE prices (
    id SERIAL PRIMARY KEY,
    activity_id INT REFERENCES activities(id),
    expense_id INT REFERENCES expenses(id),
    price INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO prices (activity_id, price) VALUES (1, 9);
INSERT INTO prices (expense_id, price) VALUES (1, 1000);
INSERT INTO prices (expense_id, price) VALUES (2, 1000);
INSERT INTO prices (expense_id, price) VALUES (3, 414);
