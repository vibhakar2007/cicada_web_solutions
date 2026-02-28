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