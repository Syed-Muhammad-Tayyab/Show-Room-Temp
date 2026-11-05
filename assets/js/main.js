/* Cars. landing page - Developed by Syed Muhammad Tayyab */
(() => {
    'use strict';

    const toggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');
    const links = [...navbar.querySelectorAll('a')];

    // Mobile menu
    toggle.addEventListener('click', () => {
        const open = navbar.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.classList.toggle('open', open);
    });
    links.forEach(a => a.addEventListener('click', () => {
        navbar.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('open');
    }));

    // Active link on scroll
    const sections = links.map(a => document.querySelector(a.getAttribute('href')));
    const spy = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => s && spy.observe(s));

    // Reveal on scroll
    const items = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
            });
        }, { threshold: 0.15 });
        items.forEach(el => io.observe(el));
    } else {
        items.forEach(el => el.classList.add('visible'));
    }

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();
})();
