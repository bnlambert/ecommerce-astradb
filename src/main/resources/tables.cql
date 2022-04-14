CREATE TABLE users (
    email text PRIMARY KEY,
    user_uuid uuid,
    password text,
    status int,
    type int,
    created_at timestamp,
    updated_at timestamp
);