const API_BASE = 'http://localhost:5000/api';

async function loadReports() {
  const tbody = document.querySelector('#reportsTable tbody');
  try {
    const res = await fetch(`${API_BASE}/reports`);
    const reports = await res.json();
    tbody.innerHTML = reports.map(r => `
      <tr>
        <td>${r.full_name}</td>
        <td>${r.roll_no}</td>
        <td>${r.subject}</td>
        <td>${r.marks}</td>
        <td>${r.attendance_pct}</td>
        <td>${new Date(r.generated_on).toLocaleDateString()}</td>
      </tr>
    `).join('');
  } catch (err) {
    tbody.innerHTML = '<tr><td colspan="6">Could not load reports</td></tr>';
  }
}

loadReports();
