const express = require('express');
const pool = require('../db');

const router = express.Router();

// GET /api/reports
router.get('/', async (req, res) => {
  const result = await pool.query(`
    SELECT r.id, s.full_name, s.roll_no, r.subject, r.marks, r.attendance_pct, r.generated_on
    FROM reports r JOIN students s ON r.student_id = s.id
    ORDER BY r.generated_on DESC
  `);
  res.json(result.rows);
});

// POST /api/reports
router.post('/', async (req, res) => {
  const { student_id, subject, marks, attendance_pct } = req.body;
  const result = await pool.query(
    'INSERT INTO reports (student_id, subject, marks, attendance_pct) VALUES ($1,$2,$3,$4) RETURNING *',
    [student_id, subject, marks, attendance_pct]
  );
  res.status(201).json(result.rows[0]);
});

module.exports = router;
