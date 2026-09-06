const express = require('express');
const pool = require('../db');

const router = express.Router();

// GET /api/students
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM students ORDER BY id');
  res.json(result.rows);
});

// POST /api/students
router.post('/', async (req, res) => {
  const { full_name, roll_no, course, email } = req.body;
  const result = await pool.query(
    'INSERT INTO students (full_name, roll_no, course, email) VALUES ($1,$2,$3,$4) RETURNING *',
    [full_name, roll_no, course, email]
  );
  res.status(201).json(result.rows[0]);
});

// DELETE /api/students/:id
router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM students WHERE id = $1', [req.params.id]);
  res.status(204).send();
});

module.exports = router;
