document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const heroSection = document.querySelector('.hero');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Sticky Navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > heroSection.offsetHeight - nav.offsetHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    // Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - nav.offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});
