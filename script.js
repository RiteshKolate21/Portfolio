// Smooth scrolling function for hero buttons
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}


// Function to show work message for repo buttons
function showWorkMessage(button) {
  const originalText = button.textContent;
  button.textContent = 'Added shortly';
  button.style.opacity = '0.7';
  button.style.cursor = 'not-allowed';

  // Reset after 2 seconds
  setTimeout(() => {
    button.textContent = originalText;
    button.style.opacity = '1';
    button.style.cursor = 'pointer';
  }, 2000);
}

// Theme toggle functionality
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

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
