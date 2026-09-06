const API_BASE = 'http://localhost:5000/api';

async function loadSummary() {
  try {
    const res = await fetch(`${API_BASE}/dashboard/summary`);
    const data = await res.json();
    document.getElementById('totalStudents').textContent = data.totalStudents ?? 0;
    document.getElementById('totalReports').textContent = data.totalReports ?? 0;
    document.getElementById('averageMarks').textContent = data.averageMarks ?? 0;
  } catch (err) {
    console.error('Could not load dashboard summary', err);
  }
}

loadSummary();
