// Mobile nav toggle
const navToggleButton = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggleButton && navMenu) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Projects slider removed; using static grid
// Theme toggle with persistence
const htmlEl = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light' || savedTheme === 'dark') {
  htmlEl.setAttribute('data-theme', savedTheme);
  if (themeToggleBtn) themeToggleBtn.textContent = savedTheme === 'light' ? '🌙' : '☀️';
}
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggleBtn.textContent = next === 'light' ? '🌙' : '☀️';
  });
}

// Reveal on scroll animations
const revealEls = document.querySelectorAll('.section, .hero-media img, .about-media img');
const onReveal = () => {
  const trigger = window.innerHeight * 0.88;
  revealEls.forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < trigger) el.classList.add('in');
  });
};
revealEls.forEach(el => el.classList.add('reveal'));
window.addEventListener('scroll', onReveal, { passive: true });
window.addEventListener('load', onReveal);

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Aurora background removed


