const express = require('express');
const pool = require('../db');

const router = express.Router();

// GET /api/dashboard/summary
router.get('/summary', async (req, res) => {
  try {
    const students = await pool.query('SELECT COUNT(*) FROM students');
    const reports = await pool.query('SELECT COUNT(*) FROM reports');
    const avgMarks = await pool.query('SELECT ROUND(AVG(marks), 2) AS avg_marks FROM reports');
    res.json({
      totalStudents: Number(students.rows[0].count),
      totalReports: Number(reports.rows[0].count),
      averageMarks: avgMarks.rows[0].avg_marks || 0,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
