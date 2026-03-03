// ================= SPLASH SCREEN LOGIC =================
window.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const body = document.body;

    // Set duration to exactly 5 seconds
    const splashDuration = 5000; 

    setTimeout(() => {
        splashScreen.classList.add('hidden');
        body.classList.remove('no-scroll');
        
        setTimeout(() => {
            if (splashScreen) splashScreen.remove();
        }, 800);
    }, splashDuration);
});

// ================= STICKY NAVBAR =================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================= MOBILE MENU TOGGLE =================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle'); 
});

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

// ================= SMOOTH SCROLLING =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ================= PREMIUM SCROLL REVEAL =================
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px" 
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});