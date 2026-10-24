document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const btnTogglePass = document.getElementById('btnTogglePass');
  const eyeIcon = document.getElementById('eyeIcon');
  const loginError = document.getElementById('loginError');
  const loginErrorText = document.getElementById('loginErrorText');
  const btnLogin = document.getElementById('btnLogin');
  const btnText = btnLogin.querySelector('.btn-text');
  const btnIcon = btnLogin.querySelector('.btn-icon');
  const loginSpinner = document.getElementById('loginSpinner');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  // Theme Toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portal-theme', newTheme);
    });
  }

  // Toggle password visibility
  btnTogglePass.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    eyeIcon.innerHTML = isPassword
      ? `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`
      : `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
  });

  // Handle Form Submit
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
      showError('Compila tutti i campi richiesti.');
      return;
    }

    // Set loading state
    setLoading(true);
    hideError();

    let loginSuccess = false;
    let redirectUrl = 'index.html';

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          loginSuccess = true;
          redirectUrl = data.redirect || 'index.html';
        }
      }
    } catch (err) {
      // In modalità statica (es. GitHub Pages), il backend Node non è presente
    }

    // Fallback autenticazione client-side (GitHub Pages / Standalone)
    if (!loginSuccess) {
      const savedUser = localStorage.getItem('portal-user') || 'admin';
      const savedPass = localStorage.getItem('portal-pass') || 'password123';
      if (username.trim() === savedUser && password === savedPass) {
        loginSuccess = true;
      }
    }

    if (loginSuccess) {
      localStorage.setItem('portal-auth', 'true');
      localStorage.setItem('portal-auth-time', Date.now().toString());
      localStorage.setItem('portal-user-name', username.trim());
      btnText.textContent = 'Accesso in corso...';
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 300);
    } else {
      showError('Credenziali non valide. Controlla ID e Password.');
      setLoading(false);
    }
  });

  function showError(msg) {
    loginErrorText.textContent = msg;
    loginError.style.display = 'flex';
    passwordInput.classList.add('input-error');
    usernameInput.classList.add('input-error');
  }

  function hideError() {
    loginError.style.display = 'none';
    passwordInput.classList.remove('input-error');
    usernameInput.classList.remove('input-error');
  }

  function setLoading(loading) {
    btnLogin.disabled = loading;
    if (loading) {
      btnText.style.display = 'none';
      if (btnIcon) btnIcon.style.display = 'none';
      loginSpinner.style.display = 'inline-block';
    } else {
      btnText.style.display = 'inline-block';
      if (btnIcon) btnIcon.style.display = 'inline-block';
      loginSpinner.style.display = 'none';
    }
  }
});
