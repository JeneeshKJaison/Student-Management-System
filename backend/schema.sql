-- Student Management System schema

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin',
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    roll_no VARCHAR(20) UNIQUE NOT NULL,
    course VARCHAR(100),
    email VARCHAR(100),
    enrolled_on DATE DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS reports (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    subject VARCHAR(100) NOT NULL,
    marks INTEGER CHECK (marks >= 0 AND marks <= 100),
    attendance_pct NUMERIC(5,2),
    generated_on DATE DEFAULT CURRENT_DATE
);

-- seed an admin user (password: admin123, hashed at app level)
INSERT INTO users (username, password_hash, role)
VALUES ('admin', '$2a$10$replace_with_bcrypt_hash', 'admin')
ON CONFLICT DO NOTHING;
