CREATE DATABASE LEARN1;

\c LEARN1

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

\dt;





INSERT INTO users (username, email, password)
VALUES ('username_here', 'user@example.com', 'user_password');

SELECT * FROM users;


UPDATE users
SET password = 'new_password'
WHERE email = 'user@example.com';

DELETE FROM users
WHERE id = 1;


SELECT * FROM users
WHERE id = 2;
