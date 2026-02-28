document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "contactForm",
        "template_yyv3ete",
        this
    ).then(function() {
        alert("Message Sent Successfully!");
    }, function(error) {
        alert("Failed to send message.");
        console.log(error);
    });
});