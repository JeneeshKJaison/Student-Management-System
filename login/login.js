const API_BASE = 'http://localhost:5000/api';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const errorEl = document.getElementById('loginError');
  errorEl.textContent = '';

  try {
    const res = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      errorEl.textContent = data.message || 'Login failed';
      return;
    }
    localStorage.setItem('sms_token', data.token);
    window.location.href = '../dashboard/dashboard.html';
  } catch (err) {
    errorEl.textContent = 'Could not reach server. Is the backend running?';
  }
});
