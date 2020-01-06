CREATE TABLE IF NOT EXISTS stud_class (
    id SERIAL PRIMARY KEY,
    class_name TEXT,
    form_teacher TEXT
);

CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    stud_name TEXT,
    class_name TEXT,
    presence TEXT DEFAULT '0'
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,                       name TEXT,
    password TEXT
);