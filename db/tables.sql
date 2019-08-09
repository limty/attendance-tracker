CREATE TABLE IF NOT EXISTS stud_class (
    id SERIAL PRIMARY KEY,
    class_name TEXT,
    form_teacher TEXT
);

CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    stud_name TEXT,
    class_name TEXT
);