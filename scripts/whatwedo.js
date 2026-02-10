const bar = document.querySelector('.timeline-bar');
const dot = document.querySelector('.progress-dot');

window.addEventListener('scroll', () => {
  const barRect = bar.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // start when bar enters viewport
  const start = windowHeight;
  // end when bar fully leaves viewport
  const end = -barRect.height;

  const progress =
    (start - barRect.top) / (start - end);

  const clamped = Math.max(0, Math.min(1, progress));

  dot.style.top = `${clamped * bar.offsetHeight}px`;
});
