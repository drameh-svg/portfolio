// ============================================
// script.js
// Small, separate blocks so it is easy to find
// and change things later.
//
// 1. Dark mode
// 2. Smooth scroll
// 3. Scroll spy (nav highlight)
// 4. Projects carousel + category filters
// 5. Project modals
// 6. Modal gallery arrows
// 7. Contact form
// ============================================


// ── 1. DARK MODE ──────────────────────────
// Saves the choice in localStorage so it
// stays after a refresh.

const toggleBtn = document.getElementById('mode-toggle');

if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark');
    if (toggleBtn) toggleBtn.textContent = '☀︎';
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('mode', 'dark');
            toggleBtn.textContent = '☀︎';
        } else {
            localStorage.setItem('mode', 'light');
            toggleBtn.textContent = '☾';
        }
    });
}


// ── 2. SMOOTH SCROLL ──────────────────────

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// ── 3. SCROLL SPY ─────────────────────────
// Highlights the nav link for the section
// currently on screen.

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

function onScroll() {
    const scrollY = window.scrollY + 80;
    let currentId = '';
    sections.forEach(section => {
        if (scrollY >= section.offsetTop) currentId = section.id;
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) link.classList.add('active');
    });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();


// ── 4. PROJECTS CAROUSEL + FILTERS ────────
// How this works:
//   - Each .project-slide has data-categories
//     (product, ml, graphic — can be more than one)
//   - Filter buttons set currentFilter
//   - Only matching slides can be shown
//   - .is-active is the one slide on screen
//   - Arrows do NOT autoplay — they only move on click
//
// To add a category:
//   1. Add a filter button in index.html
//   2. Put that same word in data-categories on slides

const filterBtns = document.querySelectorAll('.filter-btn');
const slides = document.querySelectorAll('.project-slide');
const prevArrow = document.querySelector('.carousel-arrow.prev');
const nextArrow = document.querySelector('.carousel-arrow.next');
const counterEl = document.getElementById('carousel-counter');

let currentIndex = 0;
let currentFilter = 'all';

function getVisibleSlides() {
    return [...slides].filter(slide => {
        if (currentFilter === 'all') return true;
        const cats = (slide.dataset.categories || '').split(/\s+/);
        return cats.includes(currentFilter);
    });
}

function renderCarousel() {
    const visible = getVisibleSlides();

    if (visible.length === 0) {
        currentIndex = 0;
    } else if (currentIndex >= visible.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = visible.length - 1;
    }

    slides.forEach(slide => slide.classList.remove('is-active'));

    if (visible[currentIndex]) {
        visible[currentIndex].classList.add('is-active');
    }

    if (counterEl) {
        counterEl.textContent = visible.length
            ? (currentIndex + 1) + ' / ' + visible.length
            : '0 / 0';
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        this.classList.add('is-active');
        currentFilter = this.dataset.filter;
        currentIndex = 0;
        renderCarousel();
    });
});

if (prevArrow) {
    prevArrow.addEventListener('click', function () {
        const visible = getVisibleSlides();
        if (!visible.length) return;
        currentIndex = (currentIndex - 1 + visible.length) % visible.length;
        renderCarousel();
    });
}

if (nextArrow) {
    nextArrow.addEventListener('click', function () {
        const visible = getVisibleSlides();
        if (!visible.length) return;
        currentIndex = (currentIndex + 1) % visible.length;
        renderCarousel();
    });
}

// Keyboard: left / right arrows (ignored while a modal is open)
document.addEventListener('keydown', function (e) {
    if (document.body.classList.contains('modal-open')) return;
    if (e.target.matches('input, textarea')) return;
    if (e.key === 'ArrowLeft' && prevArrow) prevArrow.click();
    if (e.key === 'ArrowRight' && nextArrow) nextArrow.click();
});

renderCarousel();


// ── 5. PROJECT MODALS ─────────────────────
// Clicking a slide reads data-modal and opens
// the matching #modal-... box.

document.querySelectorAll('.project-slide').forEach(card => {
    card.addEventListener('click', function () {
        const modalId = this.dataset.modal;
        const modal = document.getElementById(modalId);
        if (!modal) return;

        modal.classList.add('is-open');
        document.body.classList.add('modal-open');
    });
});

// Close: X button
document.addEventListener('click', function (e) {
    if (e.target.closest('.proj-modal-close')) {
        const modal = e.target.closest('.proj-modal');
        modal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
    }
});

// Close: clicking the dark backdrop (not the inner box)
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('proj-modal')) {
        e.target.classList.remove('is-open');
        document.body.classList.remove('modal-open');
    }
});

// Close: Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.proj-modal.is-open').forEach(m => {
            m.classList.remove('is-open');
        });
        document.body.classList.remove('modal-open');
    }
});


// ── 6. GALLERY NAVIGATION (inside modals) ─
// Each gallery stores its current index on the
// track element itself (data-current).

document.addEventListener('click', function (e) {
    const btn = e.target.closest('.proj-gallery-btn');
    if (!btn) return;

    const trackId = btn.dataset.track;
    const total = parseInt(btn.dataset.total, 10);
    const track = document.getElementById(trackId);
    const countEl = document.getElementById('counter-' + trackId.replace('track-', ''));

    if (!track) return;

    let current = parseInt(track.dataset.current || '0', 10);

    if (btn.classList.contains('next')) {
        current = (current + 1) % total;
    } else {
        current = (current - 1 + total) % total;
    }

    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    track.dataset.current = current;

    if (countEl) countEl.textContent = (current + 1) + ' / ' + total;
});


// ── 7. CONTACT FORM ───────────────────────

const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const body = document.getElementById('body').value.trim();

        if (!name || !email || !subject || !body) {
            message.style.color = '#c0392b';
            message.textContent = 'Please fill in all fields.';
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            message.style.color = '#c0392b';
            message.textContent = 'Please enter a valid email address.';
            return;
        }

        const mailtoLink = `mailto:zeinabdrameh@gmail.com`
            + `?subject=${encodeURIComponent(subject)}`
            + `&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${body}`)}`;

        window.location.href = mailtoLink;

        message.style.color = '';
        message.textContent = "Opening your email app...";
        form.reset();
    });
}
