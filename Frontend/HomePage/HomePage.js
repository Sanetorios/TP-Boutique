const menuToggle = document.getElementById("menuToggle");
const dropdown = document.getElementById("dropdown");
const brandsToggle = document.getElementById("brandsToggle");
const brandsDropdown = document.getElementById("brandsDropdown");
const brandLinks = document.querySelectorAll(".brand-link, .brand-card");
const contactForm = document.querySelector(".contact-form");

function closeBrandsMenu() {
    brandsDropdown.classList.remove("open");
    brandsToggle.setAttribute("aria-expanded", "false");
    brandsDropdown.setAttribute("aria-hidden", "true");
}

function closeMainMenu() {
    dropdown.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    dropdown.setAttribute("aria-hidden", "true");
    closeBrandsMenu();
}

menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    dropdown.setAttribute("aria-hidden", String(!isOpen));

    if (!isOpen) {
        closeBrandsMenu();
    }
});

brandsToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    const isOpen = brandsDropdown.classList.toggle("open");
    brandsToggle.setAttribute("aria-expanded", String(isOpen));
    brandsDropdown.setAttribute("aria-hidden", String(!isOpen));
});

document.addEventListener("click", function (event) {
    if (!event.target.closest(".menu")) {
        closeMainMenu();
    }
});

const navigationLinks = document.querySelectorAll(".dropdown-link");
navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        closeMainMenu();
    });
});

brandLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
    });
});

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Merci. Ceci est une demo, aucun envoi reel n'est effectue.");
        contactForm.reset();
    });
}
