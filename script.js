// ============================================
// script.js
// Small, separate blocks so it is easy to find
// and change things later.
//
// 1. Dark mode
// 2. Smooth scroll
// 3. Scroll spy (nav highlight)
// 4. Featured coverflow + gallery filters
// 5. Project modals
// 6. Modal gallery arrows
// 7. Contact form
// 8. Letter wave (name hover)
// ============================================


// ── 1. DARK MODE ──────────────────────────
// Off for now. Keep the styles in CSS so it
// can come back later without a rewrite.

document.body.classList.remove('dark');
try { localStorage.removeItem('mode'); } catch (e) { /* private mode / blocked storage */ }


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


// ── 4. FEATURED COVERFLOW + GALLERY FILTERS ─
// Featured deck: center card opens the modal,
// side cards shuffle the coverflow.
// Gallery tiles filter by data-categories.

const filterBtns = document.querySelectorAll('.filter-btn');
const tiles = document.querySelectorAll('.project-tile');
const slides = document.querySelectorAll('.project-slide');
const prevArrow = document.querySelector('.carousel-arrow.prev');
const nextArrow = document.querySelector('.carousel-arrow.next');
const counterEl = document.getElementById('carousel-counter');

let currentIndex = 0;

function renderCarousel() {
    const n = slides.length;

    slides.forEach((slide, i) => {
        slide.classList.remove('is-active');
        if (!n) {
            slide.dataset.pos = 'hidden';
            return;
        }
        const offset = (i - currentIndex + n) % n;
        if (offset === 0) {
            slide.dataset.pos = 'center';
            slide.classList.add('is-active');
        } else if (offset === 1) {
            slide.dataset.pos = 'right';
        } else if (offset === n - 1) {
            slide.dataset.pos = 'left';
        } else {
            slide.dataset.pos = 'hidden';
        }
    });

    if (counterEl) {
        counterEl.textContent = n ? (currentIndex + 1) + ' / ' + n : '0 / 0';
    }
}

function stepCarousel(dir) {
    const n = slides.length;
    if (!n) return;
    currentIndex = (currentIndex + dir + n) % n;
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

const galleryEl = document.getElementById('project-gallery');
let filterToken = 0;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!reduceMotion.matches) {
    tiles.forEach((tile, i) => {
        tile.style.animationDelay = Math.min(i, 12) * 40 + 'ms';
        tile.classList.add('is-entering');
        tile.addEventListener('animationend', function done(e) {
            if (e.target !== tile) return;
            tile.classList.remove('is-entering');
            tile.style.animationDelay = '';
            tile.removeEventListener('animationend', done);
        });
    });
}

function projectMatches(el, filter) {
    if (filter === 'all') return true;
    const cats = (el.dataset.categories || '').split(/\s+/);
    return cats.includes(filter);
}

function applyGalleryFilter(filter) {
    const token = ++filterToken;
    const toHide = [];
    const toShow = [];

    tiles.forEach(tile => {
        const match = projectMatches(tile, filter);
        const hidden = tile.classList.contains('is-hidden');
        tile.classList.remove('is-exiting', 'is-entering');
        tile.style.animationDelay = '';
        if (!match && !hidden) toHide.push(tile);
        else if (match && hidden) toShow.push(tile);
    });

    if (reduceMotion.matches) {
        tiles.forEach(tile => {
            tile.classList.toggle('is-hidden', !projectMatches(tile, filter));
        });
        return;
    }

    if (galleryEl) galleryEl.style.minHeight = galleryEl.offsetHeight + 'px';

    toHide.forEach((tile, i) => {
        tile.style.animationDelay = Math.min(i, 10) * 16 + 'ms';
        tile.classList.add('is-exiting');
    });

    const hideMs = toHide.length ? 320 : 0;

    window.setTimeout(function () {
        if (token !== filterToken) return;
        toHide.forEach(tile => {
            tile.classList.add('is-hidden');
            tile.classList.remove('is-exiting');
            tile.style.animationDelay = '';
        });
        toShow.forEach((tile, i) => {
            tile.classList.remove('is-hidden');
            tile.style.animationDelay = i * 42 + 'ms';
            void tile.offsetWidth;
            tile.classList.add('is-entering');
            tile.addEventListener('animationend', function done(e) {
                if (e.target !== tile) return;
                tile.classList.remove('is-entering');
                tile.style.animationDelay = '';
                tile.removeEventListener('animationend', done);
            });
        });
        window.setTimeout(function () {
            if (token !== filterToken) return;
            if (galleryEl) galleryEl.style.minHeight = '';
        }, 700);
    }, hideMs);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        filterBtns.forEach(b => b.classList.remove('is-active', 'is-pop'));
        this.classList.add('is-active', 'is-pop');
        applyGalleryFilter(this.dataset.filter);
    });
});

function openProjectModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('is-open');
    document.body.classList.add('modal-open');
}


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
// Center featured card and gallery tiles open a modal.
// Side featured cards rotate the deck.

slides.forEach(card => {
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
        openProjectModal(this.dataset.modal);
    });
});

tiles.forEach(tile => {
    tile.addEventListener('click', function () {
        openProjectModal(this.dataset.modal);
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
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.proj-modal.is-open').forEach(m => {
        m.classList.remove('is-open');
    });
    document.body.classList.remove('modal-open');
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
