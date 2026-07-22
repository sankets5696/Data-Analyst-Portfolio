// ==========================================
// Typing Animation
// ==========================================

const words = [
    "Senior Data Analyst",
    "Power BI Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {

        typingElement.textContent = currentWord.substring(0, charIndex--);

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex++);

    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {

        speed = 1500;
        isDeleting = true;

    }

    if (isDeleting && charIndex === 0) {

        isDeleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// ==========================================
// Mobile Menu Toggle
// ==========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// ==========================================
// Close Menu After Clicking Link
// ==========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ==========================================
// Active Navigation While Scrolling
// ==========================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// Navbar Background On Scroll
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.3)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ==========================================
// Reveal Animation On Scroll
// ==========================================

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .about-container, .contact-box"
);

const reveal = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";

        }

    });

};

reveal();

window.addEventListener("scroll", reveal);


// ==========================================
// Initial Hidden State
// ==========================================

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all .8s ease";

});


// ==========================================
// Smooth Scroll (Extra Support)
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ==========================================
// Console Message
// ==========================================

console.log("🚀 Sanket Sonar Portfolio Loaded Successfully");