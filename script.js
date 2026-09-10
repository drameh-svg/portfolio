// ============================================
// script.js
// Small, separate blocks so it is easy to find
// and change things later.
//
// 1. Dark mode
// 2. Smooth scroll
// 3. Scroll spy (nav highlight)
// 4. Featured layout grid + gallery filters
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


// ── 4. FEATURED GRID + GALLERY FILTERS ────
// Featured cards expand on first click (layout-grid),
// then open their modal on a second click.
// Gallery tiles filter by data-categories.

const filterBtns = document.querySelectorAll('.filter-btn');
const tiles = document.querySelectorAll('.project-tile');
const layoutCards = document.querySelectorAll('.layout-card');
const featuredScrim = document.getElementById('featured-scrim');

function projectMatches(el, filter) {
    if (filter === 'all') return true;
    const cats = (el.dataset.categories || '').split(/\s+/);
    return cats.includes(filter);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        this.classList.add('is-active');
        const filter = this.dataset.filter;
        tiles.forEach(tile => {
            tile.classList.toggle('is-hidden', !projectMatches(tile, filter));
        });
    });
});

function deselectFeatured() {
    layoutCards.forEach(card => card.classList.remove('is-selected'));
    if (featuredScrim) featuredScrim.hidden = true;
}

function openProjectModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    deselectFeatured();
    modal.classList.add('is-open');
    document.body.classList.add('modal-open');
}

layoutCards.forEach(card => {
    card.addEventListener('click', function (e) {
        e.stopPropagation();
        if (this.classList.contains('is-selected')) {
            openProjectModal(this.dataset.modal);
            return;
        }
        deselectFeatured();
        this.classList.add('is-selected');
        if (featuredScrim) featuredScrim.hidden = false;
    });
});

if (featuredScrim) {
    featuredScrim.addEventListener('click', deselectFeatured);
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
// Gallery tiles open the matching modal immediately.

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

// Close: Escape key (modal first, then featured expand)
document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    const openModal = document.querySelector('.proj-modal.is-open');
    if (openModal) {
        openModal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
        return;
    }
    deselectFeatured();
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
