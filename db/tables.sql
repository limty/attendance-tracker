CREATE TABLE IF NOT EXISTS teachers (
    id SERIAL PRIMARY KEY,
    teachername TEXT,
    department TEXT
);

CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    studentname TEXT,
    stud_class TEXT,
    teachers_id INT
);