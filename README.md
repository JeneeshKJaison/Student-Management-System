# Student Management System - Dashboard Module

A simple full-stack Student Management System built with **HTML, CSS, JavaScript, Node.js (Express) and PostgreSQL**.

This repository is organised so that a team of five developers can each own one module and
push their work to the repository independently, on their own feature branch.

## Team & Module Ownership

| # | Developer | Module      | Folder        | Branch              |
|---|-----------|-------------|---------------|----------------------|
| 1 | Jeneesh   | Backend API | `backend/`    | `feature/backend`   |
| 2 | Aslah     | Login       | `login/`      | `feature/login`     |
| 3 | Sreejeev  | Dashboard   | `dashboard/`  | `feature/dashboard` |
| 4 | Abhijith  | Reports     | `reports/`    | `feature/reports`   |
| 5 | Twinkle   | Students    | `students/`   | `feature/students`  |

## Project Structure

```
student-management-system/
├── backend/        # Node.js + Express + PostgreSQL API
├── login/          # Login page (HTML/CSS/JS)
├── dashboard/       # Dashboard page (HTML/CSS/JS)
├── reports/        # Reports page (HTML/CSS/JS)
├── students/       # Student records CRUD page (HTML/CSS/JS)
├── index.html      # Landing page linking all modules
└── README.md
```

## Running the project

1. `cd backend && npm install`
2. Create a PostgreSQL database and run `backend/schema.sql` against it.
3. Copy `backend/.env.example` to `backend/.env` and fill in your DB credentials.
4. `npm start` (backend runs on http://localhost:5000)
5. Open `index.html` in a browser (or serve the root folder with any static server).

## Status

- [x] Backend API (Express + PostgreSQL) — routes for login, dashboard, students, reports.
- [x] Login module — form with client-side validation, calls `POST /api/login`, stores JWT in localStorage.
- [x] Dashboard module — live summary cards (total students, reports, average marks) via `GET /api/dashboard/summary`.
- [x] Reports module — table of student marks & attendance via `GET /api/reports`.
- [x] Students module — add / list / delete student records via `/api/students`.

All five modules complete. Project ready for integration testing.
