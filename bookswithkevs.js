const toggle = document.querySelector(".toggle");
const navbarLinks = document.querySelector(".navbar-links");

toggle.onclick = function() {
    navbarLinks.classList.toggle("active");
};

