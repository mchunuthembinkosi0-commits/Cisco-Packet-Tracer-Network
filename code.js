// Mobile Navigation
// Mobile Menu
// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// =========================
// SINGLE PAGE NAVIGATION
// =========================

const pages = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

// Hide all pages
function hidePages() {
    pages.forEach(page => {
        page.style.display = "none";
        page.style.opacity = "0";
        page.style.transform = "translateY(30px)";
    });
}

// Show selected page
function showPage(id) {

    hidePages();

    const page = document.getElementById(id);

    if (id === "home") {
        page.style.display = "flex";
    } else {
        page.style.display = "block";
    }

    setTimeout(() => {
        page.style.opacity = "1";
        page.style.transform = "translateY(0)";
        page.style.transition = "all .6s ease";
    }, 100);
}

// Show Home first
showPage("home");

// Navigation
links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        showPage(this.dataset.page);

        navLinks.classList.remove("active");

    });

});