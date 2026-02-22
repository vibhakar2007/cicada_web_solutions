
const assets = document.images;
let loaded = 0;

gsap.set(".progress", { scaleX: 0 });
gsap.to(".loader-logo", { opacity: 1, scale: 1, duration: 0.8 });

Array.from(assets).forEach(img => {
  if (img.complete) update();
  else img.addEventListener("load", update);
});

function update() {
  loaded++;
  const progress = loaded / assets.length;

  gsap.to(".progress", {
    scaleX: progress,
    duration: 0.3,
    ease: "power2.out"
  });

  if (progress === 1) finish();
}

function finish() {
  // Add the class to make the rest of the site visible
  document.body.classList.add('is-loaded');

  gsap.to("#loader", {
    yPercent: -100,
    duration: 0.9,
    ease: "power4.inOut",
    delay: 0.2,
    onComplete: () => {
       const loader = document.getElementById('loader');
       if(loader) loader.remove();
    }
  });
}

// Force the page to show after 5 seconds even if images are slow
setTimeout(() => {
  if (document.getElementById('loader')) {
    finish();
  }
}, 5000);