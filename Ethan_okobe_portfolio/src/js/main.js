// This file will handle any interactivity for the website, such as navigation toggles, form submissions, and animations.

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const isOpen = navList.classList.contains('open');
            navList.classList.toggle('open', !isOpen);
            navToggle.setAttribute('aria-expanded', !isOpen);
            navList.setAttribute('aria-hidden', isOpen);
        });
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});