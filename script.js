const progress = document.querySelector('.scroll-progress');
const year = document.querySelector('#year');

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
}

year.textContent = new Date().getFullYear();
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
