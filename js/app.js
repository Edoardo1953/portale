// SVG Icons Catalog
const SVG_ICONS = {
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  router: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="14" width="20" height="8" rx="2"></rect><path d="M6 18h.01"></path><path d="M10 18h.01"></path><path d="M15 10v4"></path><path d="M17.8 8A6 6 0 0 0 6.2 8"></path><path d="M20.5 5A10 10 0 0 0 3.5 5"></path></svg>`,
  'file-text': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  gauge: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 0-9.8 12.2l1.3-1.3a8 8 0 1 1 17 0l1.3 1.3A10 10 0 0 0 12 2z"></path><path d="m14.5 9.5-3.5 3.5"></path><circle cx="12" cy="14" r="2"></circle></svg>`,
  'message-circle': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  'cloud-sun': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  film: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>`
};

let allApps = [];
let currentArea = 'my-apps'; // 'my-apps' (default), 'all', 'web'
let currentFilter = 'all';    // 'all', 'direct', 'login', or 'cat:...'
let searchQuery = '';
let deletingAppId = null;

document.addEventListener('DOMContentLoaded', () => {
  // Static / GitHub Pages Auth Check
  const isStatic = window.location.protocol === 'file:' || !window.location.port || window.location.hostname.includes('github.io');
  if (isStatic) {
    if (!localStorage.getItem('portal-auth')) {
      window.location.href = 'login.html';
      return;
    }
  }

  initClock();
  fetchUserProfile();
  loadApps();
  setupEventListeners();
});

// Live Clock
function initClock() {
  const clockEl = document.getElementById('liveClock');
  function update() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateStr = now.toLocaleDateString('it-IT', { weekday: 'short', day: 'numeric', month: 'short' });
    clockEl.textContent = `${dateStr.toUpperCase()} • ${timeStr}`;
  }
  update();
  setInterval(update, 1000);
}

// Fetch Profile
async function fetchUserProfile() {
  try {
    const res = await fetch('/api/me');
    if (res.ok) {
      const user = await res.json();
      document.getElementById('currentUserName').textContent = user.displayName || user.username;
      document.getElementById('dropdownDisplayName').textContent = user.displayName || user.username;
      document.getElementById('dropdownUsername').textContent = user.username;
      document.getElementById('secDisplayName').value = user.displayName || '';
      document.getElementById('secNewUsername').value = user.username;
      return;
    }
  } catch (err) {}

  // Static Fallback
  const name = localStorage.getItem('portal-display-name') || 'Edoardo Tubia';
  const uname = localStorage.getItem('portal-user-name') || 'admin';
  document.getElementById('currentUserName').textContent = name;
  document.getElementById('dropdownDisplayName').textContent = name;
  document.getElementById('dropdownUsername').textContent = uname;
  document.getElementById('secDisplayName').value = name;
  document.getElementById('secNewUsername').value = uname;
}

// Load Apps from Server or Static Fallback
async function loadApps() {
  try {
    const res = await fetch('/api/apps');
    if (res.ok) {
      allApps = await res.json();
      renderStats();
      buildCategoryPills();
      renderAppsGrid();
      return;
    }
    if (res.status === 401) {
      window.location.href = 'login.html';
      return;
    }
  } catch (err) {}

  // Fallback to static data/apps.json (GitHub Pages)
  try {
    const res2 = await fetch('data/apps.json');
    if (res2.ok) {
      allApps = await res2.json();
      const custom = localStorage.getItem('portal-custom-apps');
      if (custom) {
        try {
          allApps = JSON.parse(custom);
        } catch (e) {}
      }
      renderStats();
      buildCategoryPills();
      renderAppsGrid();
      return;
    }
  } catch (err2) {
    console.error('Error loading apps:', err2);
  }

  showToast('Impossibile caricare le applicazioni.', 'error');
}

// Render Stats Counters & Tab Badges
function renderStats() {
  const myApps = allApps.filter((a) => a.isPersonalApp).length;
  const webApps = allApps.filter((a) => !a.isPersonalApp).length;
  const total = allApps.length;
  const direct = allApps.filter((a) => !a.requiresLogin).length;
  const login = allApps.filter((a) => a.requiresLogin).length;

  // Stat cards
  const statMyAppsEl = document.getElementById('statMyApps');
  if (statMyAppsEl) statMyAppsEl.textContent = myApps;
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statDirect').textContent = direct;
  document.getElementById('statLogin').textContent = login;

  // Area Tabs Badges
  const bMyApps = document.getElementById('badgeMyAppsCount');
  const bTotal = document.getElementById('badgeTotalCount');
  const bWeb = document.getElementById('badgeWebCount');
  if (bMyApps) bMyApps.textContent = myApps;
  if (bTotal) bTotal.textContent = total;
  if (bWeb) bWeb.textContent = webApps;
}

// Category filter pills
function buildCategoryPills() {
  const filterPills = document.getElementById('filterPills');
  const defaultPills = `
    <button class="pill ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">Tutte</button>
    <button class="pill ${currentFilter === 'direct' ? 'active' : ''}" data-filter="direct">
      <span class="badge-dot direct"></span>
      Accesso Diretto
    </button>
    <button class="pill ${currentFilter === 'login' ? 'active' : ''}" data-filter="login">
      <span class="badge-dot login"></span>
      Richiede Login
    </button>
  `;

  // Get categories relevant to current area
  let areaApps = allApps;
  if (currentArea === 'my-apps') areaApps = allApps.filter((a) => a.isPersonalApp);
  else if (currentArea === 'web') areaApps = allApps.filter((a) => !a.isPersonalApp);

  const categories = Array.from(new Set(areaApps.map((a) => a.category).filter(Boolean)));
  const catPills = categories
    .map(
      (cat) =>
        `<button class="pill ${currentFilter === 'cat:' + cat ? 'active' : ''}" data-filter="cat:${cat}">${cat}</button>`
    )
    .join('');

  filterPills.innerHTML = defaultPills + catPills;

  // Re-bind click events
  filterPills.querySelectorAll('.pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      filterPills.querySelectorAll('.pill').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderAppsGrid();
    });
  });
}

// Render App Cards
function renderAppsGrid() {
  const grid = document.getElementById('appsGrid');
  const emptyState = document.getElementById('emptyState');

  let filtered = allApps.filter((app) => {
    // Area filter
    if (currentArea === 'my-apps' && !app.isPersonalApp) return false;
    if (currentArea === 'web' && app.isPersonalApp) return false;

    // Search query match (title, description, category, and WEB ADDRESS!)
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = (app.title || '').toLowerCase().includes(q);
      const matchDesc = (app.description || '').toLowerCase().includes(q);
      const matchCat = (app.category || '').toLowerCase().includes(q);
      const matchUrl = (app.directUrl || '').toLowerCase().includes(q) || (app.loginUrl || '').toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchCat && !matchUrl) return false;
    }

    // Filter match (direct vs login vs category)
    if (currentFilter === 'direct') return !app.requiresLogin;
    if (currentFilter === 'login') return app.requiresLogin;
    if (currentFilter.startsWith('cat:')) {
      const targetCat = currentFilter.replace('cat:', '');
      return app.category === targetCat;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  grid.innerHTML = filtered
    .map((app) => {
      const isLogin = app.requiresLogin;
      const cardTypeClass = isLogin ? 'type-login' : 'type-direct';
      
      // Determine logo
      let logoHtml = '';
      if (app.customLogoUrl) {
        logoHtml = `<img src="${escapeHtml(app.customLogoUrl)}" alt="${escapeHtml(app.title)}" class="app-card-logo-img" onerror="this.onerror=null; this.parentElement.innerHTML='🌐';">`;
      } else {
        const svgIcon = SVG_ICONS[app.iconSvg] || SVG_ICONS.globe;
        logoHtml = svgIcon;
      }

      const iconColor = app.iconColor || (isLogin ? '#f59e0b' : '#38bdf8');
      const bgColor = app.bgColor || (isLogin ? 'rgba(245, 158, 11, 0.12)' : 'rgba(56, 189, 248, 0.12)');

      // Target URL to connect
      const targetUrl = isLogin ? (app.loginUrl || app.directUrl) : app.directUrl;
      const fullTargetUrl = (targetUrl && targetUrl.startsWith('/')) ? (window.location.origin + targetUrl) : (targetUrl || '#');

      // Personal App Badge
      const personalBadgeHtml = app.isPersonalApp
        ? `<span class="badge-personal-app">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" style="width:11px; height:11px;">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            App Creata Insieme
          </span>`
        : '';

      // Status Badge
      const statusBadgeHtml = isLogin
        ? `<div class="app-status-badge badge-login">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px; height:13px;">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Richiede Login</span>
          </div>`
        : `<div class="app-status-badge badge-direct">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px; height:13px;">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
            <span>Accesso Diretto</span>
          </div>`;

      // Web Address (URL) Display Bar
      const urlBoxHtml = `
        <div class="app-card-url-wrap" title="Indirizzo web: ${escapeHtml(fullTargetUrl)}">
          <div class="app-card-url-left">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <a href="${escapeHtml(fullTargetUrl)}" target="_blank" rel="noopener noreferrer" class="app-card-url-link">${escapeHtml(fullTargetUrl)}</a>
          </div>
          <button type="button" class="btn-copy-card-url" data-url="${escapeHtml(fullTargetUrl)}" title="Copia Indirizzo Web">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      `;

      // Connect Button
      let connectBtnHtml = '';
      if (isLogin) {
        connectBtnHtml = `
          <a href="${escapeHtml(fullTargetUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-connect btn-connect-login" title="Apri pagina di login di ${escapeHtml(app.title)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Apri Pagina Login</span>
          </a>
          <button type="button" class="btn-card-creds btn-quick-creds" data-id="${app.id}" title="Visualizza credenziali e note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 18h1.4c1.3 0 2.5-.8 3-2l.8-2c.5-1.2 1.7-2 3-2h3.6"></path>
              <circle cx="17" cy="8" r="4"></circle>
              <line x1="21" y1="12" x2="23" y2="12"></line>
            </svg>
          </button>
        `;
      } else {
        connectBtnHtml = `
          <a href="${escapeHtml(fullTargetUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-connect btn-connect-direct" title="Apri subito ${escapeHtml(app.title)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>Entra Subito</span>
          </a>
        `;
      }

      return `
        <div class="app-card ${cardTypeClass} ${app.isPersonalApp ? 'card-is-personal' : ''}" id="card-${app.id}" data-id="${app.id}" draggable="true">
          <div class="app-card-header">
            <div class="app-card-logo-wrap" style="background: ${bgColor}; color: ${iconColor};">
              ${logoHtml}
            </div>
            <div style="display:flex; gap: 4px; align-items:center;">
              <button type="button" class="btn-card-action-icon btn-drag-handle" data-id="${app.id}" title="Trascina per riordinare (Drag & Drop)" aria-label="Sposta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="9" cy="6" r="1.5"></circle>
                  <circle cx="15" cy="6" r="1.5"></circle>
                  <circle cx="9" cy="12" r="1.5"></circle>
                  <circle cx="15" cy="12" r="1.5"></circle>
                  <circle cx="9" cy="18" r="1.5"></circle>
                  <circle cx="15" cy="18" r="1.5"></circle>
                </svg>
              </button>
              <button class="btn-card-action-icon btn-edit-app" data-id="${app.id}" title="Modifica Riquadro">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
              <button class="btn-card-action-icon delete btn-delete-app" data-id="${app.id}" title="Elimina Riquadro">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="app-card-body">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px; flex-wrap:wrap;">
              <span class="app-category-badge">${escapeHtml(app.category || 'Generale')}</span>
              ${personalBadgeHtml}
            </div>
            <h3 class="app-card-title">${escapeHtml(app.title)}</h3>
            <p class="app-card-desc">${escapeHtml(app.description || 'Nessuna descrizione disponibile.')}</p>
          </div>

          <div>
            ${urlBoxHtml}
            ${statusBadgeHtml}
            <div class="app-card-actions">
              ${connectBtnHtml}
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  // Attach button events
  grid.querySelectorAll('.btn-edit-app').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openEditModal(btn.getAttribute('data-id'));
    });
  });

  grid.querySelectorAll('.btn-delete-app').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openDeleteModal(btn.getAttribute('data-id'));
    });
  });

  grid.querySelectorAll('.btn-quick-creds').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuickCredsModal(btn.getAttribute('data-id'));
    });
  });

  grid.querySelectorAll('.btn-copy-card-url').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const url = btn.getAttribute('data-url');
      if (url) copyToClipboard(url, `Indirizzo copiato: ${url}`);
    });
  });

  // Setup Drag & Drop Reordering
  setupCardDragAndDrop(grid);
}

// Drag & Drop State
let draggedCardId = null;

function setupCardDragAndDrop(grid) {
  const cards = grid.querySelectorAll('.app-card');

  cards.forEach((card) => {
    const cardId = card.getAttribute('data-id');
    const handle = card.querySelector('.btn-drag-handle');

    // Drag Start
    card.addEventListener('dragstart', (e) => {
      if (e.target.closest('a, input, button:not(.btn-drag-handle)')) {
        e.preventDefault();
        return;
      }
      draggedCardId = cardId;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', cardId);

      setTimeout(() => {
        card.classList.add('is-dragging');
      }, 0);
    });

    // Drag End
    card.addEventListener('dragend', () => {
      card.classList.remove('is-dragging');
      cards.forEach((c) => c.classList.remove('drag-over', 'drag-over-before', 'drag-over-after'));
      draggedCardId = null;
    });

    // Drag Over
    card.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';

      if (!draggedCardId || draggedCardId === cardId) return;

      const rect = card.getBoundingClientRect();
      const midX = rect.left + rect.width / 2;
      const isBefore = e.clientX < midX;

      card.classList.add('drag-over');
      card.classList.toggle('drag-over-before', isBefore);
      card.classList.toggle('drag-over-after', !isBefore);
    });

    // Drag Leave
    card.addEventListener('dragleave', (e) => {
      if (!card.contains(e.relatedTarget)) {
        card.classList.remove('drag-over', 'drag-over-before', 'drag-over-after');
      }
    });

    // Drop
    card.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const sourceId = draggedCardId || e.dataTransfer.getData('text/plain');
      const targetId = cardId;

      card.classList.remove('drag-over', 'drag-over-before', 'drag-over-after');

      if (!sourceId || !targetId || sourceId === targetId) return;

      const rect = card.getBoundingClientRect();
      const midX = rect.left + rect.width / 2;
      const position = e.clientX < midX ? 'before' : 'after';

      reorderApp(sourceId, targetId, position);
    });

    // Mobile / Touch Drag Support
    if (handle) {
      let currentDropTarget = null;
      let dropPos = 'before';

      handle.addEventListener('touchstart', () => {
        draggedCardId = cardId;
        card.classList.add('is-dragging');
      }, { passive: true });

      handle.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const elem = document.elementFromPoint(touch.clientX, touch.clientY);
        const target = elem ? elem.closest('.app-card') : null;

        cards.forEach((c) => c.classList.remove('drag-over', 'drag-over-before', 'drag-over-after'));

        if (target && target !== card) {
          currentDropTarget = target;
          const rect = target.getBoundingClientRect();
          dropPos = touch.clientX < (rect.left + rect.width / 2) ? 'before' : 'after';
          target.classList.add('drag-over');
          target.classList.toggle('drag-over-before', dropPos === 'before');
          target.classList.toggle('drag-over-after', dropPos === 'after');
        } else {
          currentDropTarget = null;
        }
      }, { passive: true });

      handle.addEventListener('touchend', () => {
        card.classList.remove('is-dragging');
        if (currentDropTarget) {
          const targetId = currentDropTarget.getAttribute('data-id');
          currentDropTarget.classList.remove('drag-over', 'drag-over-before', 'drag-over-after');
          if (draggedCardId && targetId && draggedCardId !== targetId) {
            reorderApp(draggedCardId, targetId, dropPos);
          }
        }
        draggedCardId = null;
        currentDropTarget = null;
      });

      handle.addEventListener('touchcancel', () => {
        card.classList.remove('is-dragging');
        cards.forEach((c) => c.classList.remove('drag-over', 'drag-over-before', 'drag-over-after'));
        draggedCardId = null;
        currentDropTarget = null;
      });
    }
  });
}

// Reorder App Function
async function reorderApp(sourceId, targetId, position) {
  const sourceIndex = allApps.findIndex((a) => a.id === sourceId);
  const targetIndex = allApps.findIndex((a) => a.id === targetId);

  if (sourceIndex === -1 || targetIndex === -1 || sourceIndex === targetIndex) return;

  const [movedApp] = allApps.splice(sourceIndex, 1);
  const newTargetIndex = allApps.findIndex((a) => a.id === targetId);
  const insertIndex = position === 'after' ? newTargetIndex + 1 : newTargetIndex;

  allApps.splice(insertIndex, 0, movedApp);

  // Smooth re-render immediately
  renderAppsGrid();

  // Save new order to server
  try {
    const order = allApps.map((a) => a.id);
    const res = await fetch('/api/apps/reorder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order })
    });
    if (res.ok) {
      showToast(`Ordine salvato: "${movedApp.title}" spostata`, 'success');
    }
  } catch (err) {
    console.error('Errore salvataggio ordine:', err);
    showToast('Errore di comunicazione col server durante il salvataggio dell\'ordine.', 'error');
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Theme toggle (Dark / Light)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portal-theme', newTheme);
      showToast(`Tema ${newTheme === 'dark' ? 'Scuro' : 'Chiaro'} attivato`, 'info');
    });
  }

  // User menu toggle
  const btnUserMenu = document.getElementById('btnUserMenu');
  const userDropdown = document.getElementById('userDropdown');
  btnUserMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    userDropdown.classList.toggle('show');
  });
  document.addEventListener('click', () => userDropdown.classList.remove('show'));

  // Logout
  document.getElementById('btnLogout').addEventListener('click', async () => {
    localStorage.removeItem('portal-auth');
    try {
      await fetch('/api/logout', { method: 'POST' });
    } catch (err) {}
    window.location.href = 'login.html';
  });

  // Area Switcher Tabs (Area Le Mie APP vs Tutte vs Web)
  const areaTabs = document.querySelectorAll('.area-tab');
  areaTabs.forEach((tab) => {
    if (tab.id === 'btnOpenTableShortcut') return; // Handled separately
    tab.addEventListener('click', () => {
      areaTabs.forEach((t) => { if (t.id !== 'btnOpenTableShortcut') t.classList.remove('active'); });
      tab.classList.add('active');
      currentArea = tab.getAttribute('data-area');
      buildCategoryPills();
      renderAppsGrid();
    });
  });

  // Open Summary Table Modal
  const btnOpenTableModal = document.getElementById('btnOpenTableModal');
  const btnOpenTableShortcut = document.getElementById('btnOpenTableShortcut');
  if (btnOpenTableModal) {
    btnOpenTableModal.addEventListener('click', () => {
      renderSummaryTable();
      openModal('tableModalOverlay');
    });
  }
  if (btnOpenTableShortcut) {
    btnOpenTableShortcut.addEventListener('click', (e) => {
      e.stopPropagation();
      renderSummaryTable();
      openModal('tableModalOverlay');
    });
  }
  document.getElementById('btnCloseTableModal').addEventListener('click', () => closeModal('tableModalOverlay'));
  document.getElementById('btnCloseTableModalBtn').addEventListener('click', () => closeModal('tableModalOverlay'));

  // Mobile Connect Modal
  const btnOpenMobileModal = document.getElementById('btnOpenMobileModal');
  if (btnOpenMobileModal) {
    btnOpenMobileModal.addEventListener('click', async () => {
      openModal('mobileModalOverlay');
      const qrImg = document.getElementById('mobileQrCodeImg');
      const tunnelText = document.getElementById('mobileTunnelUrlText');
      const localText = document.getElementById('mobileLocalUrlText');
      
      try {
        const res = await fetch('/api/tunnel');
        const data = await res.json();
        const activeUrl = data.url || window.location.origin;
        if (tunnelText) tunnelText.textContent = activeUrl;
        if (localText && data.localUrl) localText.textContent = data.localUrl;
        if (qrImg) {
          qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(activeUrl)}`;
        }
      } catch (e) {
        if (tunnelText) tunnelText.textContent = window.location.origin;
      }
    });
  }

  const btnCloseMobileModal = document.getElementById('btnCloseMobileModal');
  if (btnCloseMobileModal) {
    btnCloseMobileModal.addEventListener('click', () => closeModal('mobileModalOverlay'));
  }
  const btnCloseMobileModalFooter = document.getElementById('btnCloseMobileModalFooter');
  if (btnCloseMobileModalFooter) {
    btnCloseMobileModalFooter.addEventListener('click', () => closeModal('mobileModalOverlay'));
  }

  const btnCopyTunnelUrl = document.getElementById('btnCopyTunnelUrl');
  if (btnCopyTunnelUrl) {
    btnCopyTunnelUrl.addEventListener('click', () => {
      const text = document.getElementById('mobileTunnelUrlText')?.textContent;
      if (text && !text.includes('caricamento')) {
        copyToClipboard(text, 'Indirizzo copiato negli appunti!');
      }
    });
  }

  // Table filter pills
  const tableFilterPills = document.querySelectorAll('#tableFilterPills .pill');
  tableFilterPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      tableFilterPills.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      tableCurrentFilter = btn.getAttribute('data-table-filter');
      renderSummaryTable();
    });
  });

  // Table search input
  const tableSearchInput = document.getElementById('tableSearchInput');
  if (tableSearchInput) {
    tableSearchInput.addEventListener('input', (e) => {
      tableSearchQuery = e.target.value.trim().toLowerCase();
      renderSummaryTable();
    });
  }

  // Search input
  const searchInput = document.getElementById('searchInput');
  const btnClearSearch = document.getElementById('btnClearSearch');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    btnClearSearch.style.display = searchQuery ? 'block' : 'none';
    renderAppsGrid();
  });
  btnClearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    btnClearSearch.style.display = 'none';
    renderAppsGrid();
  });

  // Open Add App Modal
  document.getElementById('btnOpenAddModal').addEventListener('click', () => {
    resetAppModal();
    document.getElementById('modalAppTitle').textContent = 'Aggiungi Nuova App';
    document.getElementById('saveAppBtnText').textContent = 'Aggiungi Riquadro';
    openModal('appModalOverlay');
  });
  document.getElementById('btnCloseAppModal').addEventListener('click', () => closeModal('appModalOverlay'));
  document.getElementById('btnCancelAppModal').addEventListener('click', () => closeModal('appModalOverlay'));

  // Toggle Requires Login Switch in Modal
  const appRequiresLogin = document.getElementById('appRequiresLogin');
  const credentialsSection = document.getElementById('credentialsSection');
  const accessTypeTitle = document.getElementById('accessTypeTitleText');
  const accessTypeDesc = document.getElementById('accessTypeDescText');
  const accessTypeBadgeIcon = document.getElementById('accessTypeBadgeIcon');

  appRequiresLogin.addEventListener('change', () => {
    const isLogin = appRequiresLogin.checked;
    credentialsSection.style.display = isLogin ? 'block' : 'none';
    if (isLogin) {
      accessTypeTitle.textContent = 'Richiede ID e Password';
      accessTypeDesc.textContent = 'Verrà aperta la pagina di login con assistenza credenziali rapide.';
      accessTypeBadgeIcon.classList.add('login-mode');
      accessTypeBadgeIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
    } else {
      accessTypeTitle.textContent = 'Accesso Diretto (senza password)';
      accessTypeDesc.textContent = 'Cliccando sul riquadro si accede subito all\'applicazione.';
      accessTypeBadgeIcon.classList.remove('login-mode');
      accessTypeBadgeIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>`;
    }
  });

  // Icon selector buttons
  const iconOptionsList = document.getElementById('iconOptionsList');
  const iconPreviewSvg = document.getElementById('iconPreviewSvg');
  const iconPreviewBox = document.getElementById('iconPreviewBox');
  const appIconColor = document.getElementById('appIconColor');

  let selectedIconSvg = 'globe';

  iconOptionsList.querySelectorAll('.icon-choice').forEach((btn) => {
    btn.addEventListener('click', () => {
      iconOptionsList.querySelectorAll('.icon-choice').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      selectedIconSvg = btn.getAttribute('data-icon');
      updateIconPreview();
    });
  });

  appIconColor.addEventListener('input', () => {
    updateIconPreview();
  });

  function updateIconPreview() {
    const color = appIconColor.value;
    iconPreviewBox.style.color = color;
    iconPreviewBox.style.background = `${color}22`;
    iconPreviewSvg.innerHTML = (SVG_ICONS[selectedIconSvg] || SVG_ICONS.globe)
      .replace('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">', '')
      .replace('</svg>', '');
  }

  // Toggle password in App modal
  const btnToggleAppPass = document.getElementById('btnToggleAppPass');
  const appSavedPassword = document.getElementById('appSavedPassword');
  btnToggleAppPass.addEventListener('click', () => {
    const isPass = appSavedPassword.getAttribute('type') === 'password';
    appSavedPassword.setAttribute('type', isPass ? 'text' : 'password');
  });

  // Save App Form Submit
  document.getElementById('appForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('formAppId').value;
    const title = document.getElementById('appTitle').value.trim();
    const category = document.getElementById('appCategory').value.trim() || 'Generale';
    const description = document.getElementById('appDescription').value.trim();
    const isPersonalApp = document.getElementById('appIsPersonalApp').checked;
    const requiresLogin = appRequiresLogin.checked;
    const directUrl = document.getElementById('appDirectUrl').value.trim();
    const loginUrl = document.getElementById('appLoginUrl').value.trim() || directUrl;
    const savedUsername = document.getElementById('appSavedUsername').value.trim();
    const savedPassword = document.getElementById('appSavedPassword').value.trim();
    const notes = document.getElementById('appNotes').value.trim();
    const iconColor = appIconColor.value;
    const customLogoUrl = document.getElementById('appCustomLogoUrl').value.trim();

    const payload = {
      title,
      category,
      description,
      isPersonalApp,
      requiresLogin,
      directUrl,
      loginUrl,
      savedUsername,
      savedPassword,
      notes,
      iconSvg: selectedIconSvg,
      iconColor,
      customLogoUrl
    };

    try {
      let res;
      if (id) {
        res = await fetch(`/api/apps/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } else {
        res = await fetch('/api/apps', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }

      if (res.ok) {
        closeModal('appModalOverlay');
        showToast(id ? 'Applicazione modificata!' : 'Nuova applicazione aggiunta!', 'success');
        loadApps();
      } else {
        const data = await res.json();
        showToast(data.error || 'Errore durante il salvataggio.', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Errore di comunicazione col server.', 'error');
    }
  });

  // Quick Creds Modal & Copy Buttons
  document.getElementById('btnCloseQuickModal').addEventListener('click', () => closeModal('quickLoginModalOverlay'));
  const btnToggleQuickPass = document.getElementById('btnToggleQuickPass');
  const quickModalPassword = document.getElementById('quickModalPassword');
  btnToggleQuickPass.addEventListener('click', () => {
    const isPass = quickModalPassword.getAttribute('type') === 'password';
    quickModalPassword.setAttribute('type', isPass ? 'text' : 'password');
  });

  document.getElementById('btnCopyUser').addEventListener('click', () => {
    const userVal = document.getElementById('quickModalUsername').value;
    if (userVal) copyToClipboard(userVal, 'ID / Username copiato negli appunti!');
  });

  document.getElementById('btnCopyPass').addEventListener('click', () => {
    const passVal = document.getElementById('quickModalPassword').value;
    if (passVal) copyToClipboard(passVal, 'Password copiata negli appunti!');
  });

  // Delete Modal
  document.getElementById('btnCloseDeleteModal').addEventListener('click', () => closeModal('deleteModalOverlay'));
  document.getElementById('btnCancelDelete').addEventListener('click', () => closeModal('deleteModalOverlay'));
  document.getElementById('btnConfirmDelete').addEventListener('click', async () => {
    if (!deletingAppId) return;
    try {
      const res = await fetch(`/api/apps/${deletingAppId}`, { method: 'DELETE' });
      if (res.ok) {
        closeModal('deleteModalOverlay');
        showToast('Riquadro rimosso.', 'success');
        loadApps();
      } else {
        showToast('Errore durante la rimozione.', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Errore di comunicazione col server.', 'error');
    }
  });

  // Security Modal
  document.getElementById('btnOpenSecurityModal').addEventListener('click', () => {
    userDropdown.classList.remove('show');
    document.getElementById('secCurrentPassword').value = '';
    document.getElementById('secNewPassword').value = '';
    document.getElementById('securityAlert').style.display = 'none';
    openModal('securityModalOverlay');
  });
  document.getElementById('btnCloseSecurityModal').addEventListener('click', () => closeModal('securityModalOverlay'));
  document.getElementById('btnCancelSecurityModal').addEventListener('click', () => closeModal('securityModalOverlay'));

  document.getElementById('securityForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const currentPassword = document.getElementById('secCurrentPassword').value;
    const newUsername = document.getElementById('secNewUsername').value.trim();
    const newPassword = document.getElementById('secNewPassword').value;
    const displayName = document.getElementById('secDisplayName').value.trim();
    const alertEl = document.getElementById('securityAlert');

    alertEl.style.display = 'none';

    try {
      const res = await fetch('/api/me/security', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newUsername, newPassword, displayName })
      });

      const data = await res.json();
      if (res.ok) {
        closeModal('securityModalOverlay');
        showToast('Credenziali aggiornate con successo!', 'success');
        fetchUserProfile();
      } else {
        alertEl.textContent = data.error || 'Errore durante l\'aggiornamento.';
        alertEl.style.display = 'flex';
      }
    } catch (err) {
      console.error(err);
      alertEl.textContent = 'Errore di connessione.';
      alertEl.style.display = 'flex';
    }
  });
}

// Open Edit App Modal
function openEditModal(appId) {
  const app = allApps.find((a) => a.id === appId);
  if (!app) return;

  document.getElementById('modalAppTitle').textContent = 'Modifica Riquadro';
  document.getElementById('saveAppBtnText').textContent = 'Salva Modifiche';
  document.getElementById('formAppId').value = app.id;
  document.getElementById('appTitle').value = app.title;
  document.getElementById('appCategory').value = app.category || 'Generale';
  document.getElementById('appDescription').value = app.description || '';
  document.getElementById('appIsPersonalApp').checked = app.isPersonalApp !== undefined ? Boolean(app.isPersonalApp) : true;
  document.getElementById('appDirectUrl').value = app.directUrl || '';
  document.getElementById('appLoginUrl').value = app.loginUrl || '';
  document.getElementById('appSavedUsername').value = app.savedUsername || '';
  document.getElementById('appSavedPassword').value = app.savedPassword || '';
  document.getElementById('appNotes').value = app.notes || '';
  document.getElementById('appCustomLogoUrl').value = app.customLogoUrl || '';
  document.getElementById('appIconColor').value = app.iconColor || '#38bdf8';

  const appRequiresLogin = document.getElementById('appRequiresLogin');
  appRequiresLogin.checked = Boolean(app.requiresLogin);
  appRequiresLogin.dispatchEvent(new Event('change'));

  // Highlight icon
  const iconOptionsList = document.getElementById('iconOptionsList');
  iconOptionsList.querySelectorAll('.icon-choice').forEach((btn) => {
    if (btn.getAttribute('data-icon') === (app.iconSvg || 'globe')) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const iconPreviewBox = document.getElementById('iconPreviewBox');
  const iconPreviewSvg = document.getElementById('iconPreviewSvg');
  iconPreviewBox.style.color = app.iconColor || '#38bdf8';
  iconPreviewBox.style.background = `${app.iconColor || '#38bdf8'}22`;
  iconPreviewSvg.innerHTML = (SVG_ICONS[app.iconSvg] || SVG_ICONS.globe)
    .replace('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">', '')
    .replace('</svg>', '');

  openModal('appModalOverlay');
}

// Reset Add Modal
function resetAppModal() {
  document.getElementById('formAppId').value = '';
  document.getElementById('appForm').reset();
  document.getElementById('appIsPersonalApp').checked = true;
  document.getElementById('appRequiresLogin').checked = false;
  document.getElementById('appRequiresLogin').dispatchEvent(new Event('change'));
  document.getElementById('appIconColor').value = '#38bdf8';
  document.getElementById('appCategory').value = 'Le Mie App';

  const iconOptionsList = document.getElementById('iconOptionsList');
  iconOptionsList.querySelectorAll('.icon-choice').forEach((b, i) => {
    b.classList.toggle('active', i === 0);
  });
  const iconPreviewBox = document.getElementById('iconPreviewBox');
  iconPreviewBox.style.color = '#38bdf8';
  iconPreviewBox.style.background = 'rgba(56, 189, 248, 0.15)';
  document.getElementById('iconPreviewSvg').innerHTML = SVG_ICONS.globe
    .replace('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">', '')
    .replace('</svg>', '');
}

// Quick Creds Modal
function openQuickCredsModal(appId) {
  const app = allApps.find((a) => a.id === appId);
  if (!app) return;

  document.getElementById('quickModalAppTitle').textContent = app.title;
  document.getElementById('quickModalDesc').textContent =
    app.description || 'Questa applicazione richiede ID e Password per connettersi.';

  const logoWrap = document.getElementById('quickModalLogo');
  const iconColor = app.iconColor || '#f59e0b';
  logoWrap.style.background = app.bgColor || 'rgba(245, 158, 11, 0.12)';
  logoWrap.style.color = iconColor;

  if (app.customLogoUrl) {
    logoWrap.innerHTML = `<img src="${escapeHtml(app.customLogoUrl)}" alt="${escapeHtml(app.title)}" style="width:28px;height:28px;object-fit:contain;">`;
  } else {
    logoWrap.innerHTML = SVG_ICONS[app.iconSvg] || SVG_ICONS.globe;
  }

  document.getElementById('quickModalUsername').value = app.savedUsername || '(Nessun ID salvato)';
  document.getElementById('quickModalPassword').value = app.savedPassword || '';
  document.getElementById('quickModalPassword').setAttribute('type', 'password');

  const notesEl = document.getElementById('quickModalNotes');
  const targetUrl = app.loginUrl || app.directUrl || '';
  let notesContent = '';
  if (targetUrl) {
    notesContent += `<div style="margin-bottom:6px;"><strong>🌐 Indirizzo Integrato (Attivo):</strong> <code style="word-break:break-all;">${escapeHtml(targetUrl)}</code></div>`;
  }
  if (app.standaloneUrl) {
    notesContent += `<div style="margin-bottom:6px;"><strong>⚡ Porta Standalone:</strong> <code style="word-break:break-all;">${escapeHtml(app.standaloneUrl)}</code></div>`;
  }
  if (app.notes) {
    notesContent += `<div><strong>💡 Note:</strong> ${escapeHtml(app.notes)}</div>`;
  }
  if (app.hasLauncher) {
    notesContent += `
      <div style="margin-top:12px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.08);">
        <button type="button" class="btn btn-outline btn-sm btn-block" id="btnLaunchStandalone">
          <span>🚀 Avvia Processo Locale (.bat)</span>
        </button>
      </div>
    `;
  }

  if (notesContent) {
    notesEl.innerHTML = notesContent;
    notesEl.style.display = 'block';

    const btnLaunch = notesEl.querySelector('#btnLaunchStandalone');
    if (btnLaunch) {
      btnLaunch.addEventListener('click', async () => {
        btnLaunch.disabled = true;
        btnLaunch.innerHTML = '<span>Avvio in corso...</span>';
        try {
          const res = await fetch(`/api/apps/${app.id}/launch-standalone`, { method: 'POST' });
          const d = await res.json();
          if (res.ok) {
            showToast(d.message || 'Script avviato!', 'success');
            btnLaunch.innerHTML = '<span>✅ Script Locale Avviato!</span>';
          } else {
            showToast(d.error || 'Errore di avvio', 'error');
            btnLaunch.disabled = false;
            btnLaunch.innerHTML = '<span>🚀 Riprova Avvio Script</span>';
          }
        } catch (err) {
          showToast('Errore di connessione', 'error');
          btnLaunch.disabled = false;
          btnLaunch.innerHTML = '<span>🚀 Riprova Avvio Script</span>';
        }
      });
    }
  } else {
    notesEl.style.display = 'none';
  }

  const launchBtn = document.getElementById('quickModalLaunchBtn');
  launchBtn.href = targetUrl || '#';

  openModal('quickLoginModalOverlay');
}

// Delete Modal
function openDeleteModal(appId) {
  const app = allApps.find((a) => a.id === appId);
  if (!app) return;
  deletingAppId = appId;
  document.getElementById('deleteAppName').textContent = `"${app.title}"`;
  openModal('deleteModalOverlay');
}

// Modal open/close helpers
function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Toast
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconSvg =
    type === 'success'
      ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`
      : `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  toast.innerHTML = `${iconSvg}<span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

// Copy to clipboard
function copyToClipboard(text, successMsg) {
  navigator.clipboard.writeText(text).then(
    () => showToast(successMsg, 'success'),
    () => showToast('Errore durante la copia.', 'error')
  );
}

// HTML escape helper
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Summary Table Modal Logic
let tableCurrentFilter = 'all';
let tableSearchQuery = '';

function renderSummaryTable() {
  const tbody = document.getElementById('summaryTableBody');
  if (!tbody) return;

  const totalCount = allApps.length;
  const myAppsCount = allApps.filter((a) => a.isPersonalApp).length;
  const webCount = allApps.filter((a) => !a.isPersonalApp).length;

  document.getElementById('tableCountAll').textContent = totalCount;
  document.getElementById('tableCountMyApps').textContent = myAppsCount;
  document.getElementById('tableCountWeb').textContent = webCount;

  let filtered = allApps.filter((app) => {
    if (tableCurrentFilter === 'my-apps' && !app.isPersonalApp) return false;
    if (tableCurrentFilter === 'web' && app.isPersonalApp) return false;

    if (tableSearchQuery) {
      const q = tableSearchQuery;
      const matchTitle = (app.title || '').toLowerCase().includes(q);
      const matchDesc = (app.description || '').toLowerCase().includes(q);
      const matchCat = (app.category || '').toLowerCase().includes(q);
      const matchUrl = (app.directUrl || '').toLowerCase().includes(q) || (app.loginUrl || '').toLowerCase().includes(q) || (app.standaloneUrl || '').toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchCat && !matchUrl) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:var(--text-muted);">Nessuna applicazione trovata con i filtri attuali.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered
    .map((app) => {
      const isLogin = app.requiresLogin;
      const targetUrl = isLogin ? (app.loginUrl || app.directUrl) : app.directUrl;
      const fullTargetUrl = (targetUrl && targetUrl.startsWith('/')) ? (window.location.origin + targetUrl) : (targetUrl || '#');

      let logoHtml = '';
      if (app.customLogoUrl) {
        logoHtml = `<img src="${escapeHtml(app.customLogoUrl)}" alt="${escapeHtml(app.title)}" onerror="this.onerror=null; this.parentElement.innerHTML='🌐';">`;
      } else {
        logoHtml = SVG_ICONS[app.iconSvg] || SVG_ICONS.globe;
      }

      const iconColor = app.iconColor || (isLogin ? '#f59e0b' : '#38bdf8');
      const bgColor = app.bgColor || (isLogin ? 'rgba(245, 158, 11, 0.12)' : 'rgba(56, 189, 248, 0.12)');

      // Extract port if present
      let portBadgeHtml = '<span class="table-port-badge">Integrata (3000)</span>';
      if (app.standaloneUrl) {
        const match = app.standaloneUrl.match(/:(\d+)/);
        const portStr = match ? `Porta ${match[1]}` : 'Standalone';
        portBadgeHtml = `<span class="table-port-badge standalone">${portStr}</span>`;
      }

      const accessBadgeHtml = isLogin
        ? `<span style="display:inline-flex; align-items:center; gap:6px; color:#fbbf24; font-weight:700; font-size:0.8rem;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Con Login & ID
          </span>`
        : `<span style="display:inline-flex; align-items:center; gap:6px; color:#34d399; font-weight:700; font-size:0.8rem;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            Accesso Diretto
          </span>`;

      return `
        <tr>
          <td style="text-align: center;">
            <div class="table-logo-cell" style="background: ${bgColor}; color: ${iconColor};">
              ${logoHtml}
            </div>
          </td>
          <td>
            <div class="table-app-title">${escapeHtml(app.title)}</div>
            <div class="table-app-sub">
              ${app.isPersonalApp ? '<span style="color:#f59e0b; font-weight:800;">⭐ Le Mie App</span> • ' : ''}
              ${escapeHtml(app.category || 'Generale')}
            </div>
          </td>
          <td>
            <div class="table-url-code-wrap">
              <a href="${escapeHtml(fullTargetUrl)}" target="_blank" rel="noopener noreferrer" class="table-url-code-link" title="${escapeHtml(fullTargetUrl)}">
                ${escapeHtml(fullTargetUrl)}
              </a>
              <button type="button" class="btn-copy-card-url" data-url="${escapeHtml(fullTargetUrl)}" title="Copia Indirizzo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
          </td>
          <td>
            ${portBadgeHtml}
          </td>
          <td>
            ${accessBadgeHtml}
          </td>
          <td style="text-align: center;">
            <a href="${escapeHtml(targetUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="padding: 5px 12px; font-size: 0.8rem;">
              ${isLogin ? 'Login' : 'Entra'}
            </a>
          </td>
        </tr>
      `;
    })
    .join('');

  // Bind copy buttons in table
  tbody.querySelectorAll('.btn-copy-card-url').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const url = btn.getAttribute('data-url');
      if (url) copyToClipboard(url, `Indirizzo copiato: ${url}`);
    });
  });
}
