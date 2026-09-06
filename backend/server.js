const express = require('express');
const cors = require('cors');
require('dotenv').config();

const loginRoutes = require('./routes/login');
const dashboardRoutes = require('./routes/dashboard');
const studentRoutes = require('./routes/students');
const reportRoutes = require('./routes/reports');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/login', loginRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/reports', reportRoutes);

app.get('/', (req, res) => res.send('Student Management System API is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SMS backend listening on port ${PORT}`));
