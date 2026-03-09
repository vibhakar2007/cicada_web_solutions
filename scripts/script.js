// Buttons
contactButton = document.getElementById("contactButton");
pcContactButton = document.getElementById("pcContactButton");
initializeProject = document.getElementById("initializeProject");
initializeProject2 = document.getElementById("initializeProject2");
initializeProject3 = document.getElementById("initializeProject3");
exploreSystem = document.getElementById("exploreSystem");
wwu1 = document.getElementById("wwu1")
wwu2 = document.getElementById("wwu2")
wwu3 = document.getElementById("wwu3")

contactButton.addEventListener("click", () => {
    window.location.href = "https://wa.me/+918778688185";
})

pcContactButton.addEventListener("click", () => {
    window.location.href = "https://wa.me/+918778688185";
})

initializeProject.addEventListener("click", () => {
    window.location.href = "https://wa.me/+918778688185";
})

initializeProject2.addEventListener("click", () => {
    window.location.href = "https://wa.me/+918778688185";
})

initializeProject3.addEventListener("click", () => {
    window.location.href = "https://wa.me/+918778688185";
})

wwu1.addEventListener("click", () => {
    window.location.href = "https://wa.me/+918778688185";
})

wwu2.addEventListener("click", () => {
    window.location.href = "https://wa.me/+918778688185";
})

wwu3.addEventListener("click", () => {
    window.location.href = "https://wa.me/+918778688185";
})

exploreSystem.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/cicadawebsolutions/";
})


//Contact
const form = document.getElementById("contactForm");
const button = document.getElementById("submitBtn");

function showMessage(message, type) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.className = "";
  toast.classList.add(type);
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  button.classList.add("loading");
  button.disabled = true;

  emailjs.sendForm(
    "contactForm",
    "template_yyv3ete",
    form
  )
  .then(() => {
    showMessage("Message sent successfully 🚀", "success");
    form.reset();
  })
  .catch(() => {
    showMessage("Failed to send message ❌", "error");
  })
  .finally(() => {
    button.classList.remove("loading");
    button.disabled = false;
  });
});


// Footer
const footerlogo1 = document.getElementById("linkedin");
const footerlogo2 = document.getElementById("github");
const footerlogo3 = document.getElementById("insta");
const footerlogo4 = document.getElementById("facebook");

footerlogo1.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "https://www.linkedin.com/company/cicada-web-solutions/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BuIHhcN%2BpRcGybV0oKSMNPA%3D%3D";
});

footerlogo2.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "https://github.com/vibhakar2007/cicada_web_solutions";
});

footerlogo3.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "https://www.instagram.com/cicadawebsolutions/?__pwa=1#";
});

footerlogo4.addEventListener("click", (e) => {
    window.location.href = "https://wa.me/+918778688185";
});


// NavMenu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");

  menuBtn.innerHTML = mobileMenu.classList.contains("active")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

const navLinks = document.querySelectorAll("#mobileMenu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");

    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});


// Preloader

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


// Scrollbar
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


// Whatwedo
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
