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