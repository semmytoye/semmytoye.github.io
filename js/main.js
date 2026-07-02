// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Hero video: fall back to the gradient/poster background if no video file
// has been added yet (assets/hero-bg.mp4), so a missing file never shows
// a broken-media icon.
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.addEventListener('error', () => heroVideo.style.display = 'none');
  heroVideo.querySelectorAll('source').forEach(src => {
    src.addEventListener('error', () => heroVideo.style.display = 'none');
  });
  // If nothing loads within a couple seconds, hide it defensively.
  setTimeout(() => {
    if (heroVideo.readyState === 0) heroVideo.style.display = 'none';
  }, 2500);
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.card, .pub, .timeline li, .contact-card, .lede, .expertise-tags'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach(el => io.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}
