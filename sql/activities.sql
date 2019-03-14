DROP TABLE IF EXISTS activities;

CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    activity TEXT NOT NULL,
    city VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO activities (activity, city) VALUES ('Ghibli Museum', 'Tokyo');
