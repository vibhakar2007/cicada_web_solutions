let scrollTimer;

window.addEventListener(
  'scroll',
  () => {
    document.body.classList.add('scrolling');

    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      document.body.classList.remove('scrolling');
    }, 800);
  },
  { passive: true }
);
