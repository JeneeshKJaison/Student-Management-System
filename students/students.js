const API_BASE = 'http://localhost:5000/api';

async function loadStudents() {
  const tbody = document.querySelector('#studentsTable tbody');
  const res = await fetch(`${API_BASE}/students`);
  const students = await res.json();
  tbody.innerHTML = students.map(s => `
    <tr data-id="${s.id}">
      <td>${s.full_name}</td>
      <td>${s.roll_no}</td>
      <td>${s.course || ''}</td>
      <td>${s.email || ''}</td>
      <td>${new Date(s.enrolled_on).toLocaleDateString()}</td>
      <td><button class="delete-btn" data-id="${s.id}">Delete</button></td>
    </tr>
  `).join('');
}

document.getElementById('addStudentForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const full_name = document.getElementById('fullName').value.trim();
  const roll_no = document.getElementById('rollNo').value.trim();
  const course = document.getElementById('course').value.trim();
  const email = document.getElementById('email').value.trim();

  await fetch(`${API_BASE}/students`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ full_name, roll_no, course, email }),
  });
  e.target.reset();
  loadStudents();
});

document.querySelector('#studentsTable tbody').addEventListener('click', async (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const id = e.target.dataset.id;
    await fetch(`${API_BASE}/students/${id}`, { method: 'DELETE' });
    loadStudents();
  }
});

loadStudents();
