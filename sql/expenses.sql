DROP TABLE IF EXISTS expenses;

CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
    expense TEXT NOT NULL,
    city INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO expenses (expense) VALUES ('flight');
INSERT INTO expenses (expense) VALUES ('lodging');
INSERT INTO expenses (expense) VALUES ('JR Pass');
