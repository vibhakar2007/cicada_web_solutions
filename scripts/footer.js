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