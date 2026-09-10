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
// 8. Letter wave (name hover)
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


// ── 4. PROJECTS COVERFLOW + FILTERS ───────
// Visible slides get a position:
//   center = front card (click opens modal)
//   left / right = tilted side cards (click to rotate)
//   hidden = not shown
//
// Filter buttons use data-filter: all | product | ml | graphic | consulting

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
    const n = visible.length;

    if (currentIndex >= n) currentIndex = 0;
    if (currentIndex < 0) currentIndex = Math.max(n - 1, 0);

    slides.forEach(slide => {
        slide.dataset.pos = 'hidden';
        slide.classList.remove('is-active');
    });

    if (!n) {
        if (counterEl) counterEl.textContent = '0 / 0';
        return;
    }

    const prev = (currentIndex - 1 + n) % n;
    const next = (currentIndex + 1) % n;

    visible[currentIndex].dataset.pos = 'center';
    visible[currentIndex].classList.add('is-active');

    if (n === 2) {
        visible[next].dataset.pos = 'right';
    } else if (n > 2) {
        visible[prev].dataset.pos = 'left';
        visible[next].dataset.pos = 'right';
    }

    if (counterEl) counterEl.textContent = (currentIndex + 1) + ' / ' + n;
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

function stepCarousel(dir) {
    const visible = getVisibleSlides();
    if (!visible.length) return;
    currentIndex = (currentIndex + dir + visible.length) % visible.length;
    renderCarousel();
}

if (prevArrow) prevArrow.addEventListener('click', function (e) {
    e.stopPropagation();
    stepCarousel(-1);
});

if (nextArrow) nextArrow.addEventListener('click', function (e) {
    e.stopPropagation();
    stepCarousel(1);
});

document.addEventListener('keydown', function (e) {
    if (document.body.classList.contains('modal-open')) return;
    if (e.target.matches('input, textarea')) return;
    if (e.key === 'ArrowLeft') stepCarousel(-1);
    if (e.key === 'ArrowRight') stepCarousel(1);
});

renderCarousel();


// ── 8. LETTER WAVE ────────────────────────
// Hovered letter lifts; neighbors lift a little
// so the motion rolls as the cursor glides.

function bindLetterWave(root) {
    const letters = [...root.querySelectorAll('.hero-letter')];
    if (!letters.length) return;

    function reset() {
        letters.forEach(el => { el.style.transform = 'translateY(0)'; });
    }

    function liftFromX(clientX) {
        const centers = letters.map(el => {
            const r = el.getBoundingClientRect();
            return r.left + r.width / 2;
        });
        const unit = Math.max(letters[0].offsetWidth, 1);

        letters.forEach((el, i) => {
            const dist = Math.abs(clientX - centers[i]) / unit;
            const t = Math.max(0, 1 - dist / 2.5);
            el.style.transform = 'translateY(' + (-0.22 * t * t) + 'em)';
        });
    }

    root.addEventListener('mousemove', function (e) {
        liftFromX(e.clientX);
    });
    root.addEventListener('mouseleave', reset);
}

document.querySelectorAll('.hero-line, .nav-logo').forEach(bindLetterWave);


// ── 5. PROJECT MODALS ─────────────────────
// Center card opens the modal. Side cards rotate the deck.

document.querySelectorAll('.project-slide').forEach(card => {
    card.addEventListener('click', function () {
        const pos = this.dataset.pos;
        if (pos === 'left') {
            stepCarousel(-1);
            return;
        }
        if (pos === 'right') {
            stepCarousel(1);
            return;
        }
        if (pos !== 'center') return;

        const modal = document.getElementById(this.dataset.modal);
        if (!modal) return;
        modal.classList.add('is-open');
        document.body.classList.add('modal-open');
    });
});

document.querySelectorAll('.featured-card').forEach(card => {
    card.addEventListener('click', function () {
        const modal = document.getElementById(this.dataset.modal);
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
