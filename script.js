(function () {
    var data = window.PORTFOLIO;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    var fine = window.matchMedia("(hover: hover) and (pointer: fine)");

    function ready(fn) {
        if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
        else fn();
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function projectHref(project) {
        return "project.html?id=" + encodeURIComponent(project.id);
    }

    function mediaHtml(project) {
        if (project.cover) {
            return '<img src="' + escapeHtml(project.cover) + '" alt="' + escapeHtml(project.coverAlt || project.title) + '">';
        }
        return '<div class="work-placeholder" role="img" aria-label="' + escapeHtml(project.title) + '">' +
            escapeHtml(project.placeholder || project.title) + "</div>";
    }

    function tagsHtml(tags) {
        return (tags || []).map(function (tag) {
            return '<span class="tag">' + escapeHtml(tag) + "</span>";
        }).join("");
    }

    /* ---------- cursor ---------- */
    function initCursor() {
        var dot = document.querySelector(".cursor-dot");
        var ring = document.querySelector(".cursor-ring");
        if (!dot || !ring) return;

        function enable() {
            var on = fine.matches && !reduce.matches;
            document.body.classList.toggle("has-cursor", on);
        }
        enable();
        fine.addEventListener("change", enable);
        reduce.addEventListener("change", enable);

        var x = 0;
        var y = 0;
        var rx = 0;
        var ry = 0;
        var running = false;

        document.addEventListener("mousemove", function (event) {
            x = event.clientX;
            y = event.clientY;
            dot.style.transform = "translate3d(" + x + "px," + y + "px,0)";
            if (!running) {
                running = true;
                requestAnimationFrame(tick);
            }
        });

        function tick() {
            rx += (x - rx) * 0.18;
            ry += (y - ry) * 0.18;
            ring.style.transform = "translate3d(" + rx + "px," + ry + "px,0)";
            if (Math.abs(x - rx) > 0.4 || Math.abs(y - ry) > 0.4) requestAnimationFrame(tick);
            else running = false;
        }

        document.addEventListener("mousedown", function () {
            document.body.classList.add("is-cursor-down");
        });
        document.addEventListener("mouseup", function () {
            document.body.classList.remove("is-cursor-down");
        });

        document.addEventListener("mouseover", function (event) {
            var hot = event.target.closest("a, button, .filter-btn, .skill-item, input, textarea");
            document.body.classList.toggle("is-cursor-hot", !!hot);
        });

        document.addEventListener("mouseleave", function () {
            dot.style.opacity = "0";
            ring.style.opacity = "0";
        });
        document.addEventListener("mouseenter", function () {
            dot.style.opacity = "1";
            ring.style.opacity = "1";
        });
    }

    /* ---------- header ---------- */
    function initHeader() {
        var header = document.querySelector(".site-header");
        var toggle = document.querySelector(".nav-toggle");
        var nav = document.querySelector(".primary-nav");
        if (header) {
            var onScroll = function () {
                header.classList.toggle("is-scrolled", window.scrollY > 8);
            };
            onScroll();
            window.addEventListener("scroll", onScroll, { passive: true });
        }
        if (toggle && nav) {
            toggle.addEventListener("click", function () {
                var open = nav.classList.toggle("is-open");
                toggle.setAttribute("aria-expanded", open ? "true" : "false");
            });
            nav.querySelectorAll("a").forEach(function (link) {
                link.addEventListener("click", function () {
                    nav.classList.remove("is-open");
                    toggle.setAttribute("aria-expanded", "false");
                });
            });
        }
    }

    /* ---------- home + featured page cards ---------- */
    function renderHomeFeatured() {
        var mount = document.getElementById("home-featured");
        if (!mount || !data) return;
        mount.innerHTML = data.featuredIds.map(function (id) {
            var project = data.byId(id);
            if (!project) return "";
            var year = project.year ? '<span class="work-year">' + escapeHtml(project.year) + "</span>" : "";
            return '<a class="work-card" href="' + projectHref(project) + '">' +
                '<div class="work-frame">' +
                    '<div class="work-chrome" aria-hidden="true"><i></i><i></i><i></i></div>' +
                    '<div class="work-media">' + mediaHtml(project) +
                        '<div class="glass-bar" aria-hidden="true">' +
                            '<p class="glass-cat">' + escapeHtml(data.labelsFor(project).join(" · ")) + "</p>" +
                            "<h3>" + escapeHtml(project.title) + "</h3>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="work-meta"><h3>' + escapeHtml(project.title) + "</h3>" + year + "</div>" +
                '<p class="work-summary">' + escapeHtml(project.summary) + "</p>" +
            "</a>";
        }).join("");
    }

    function renderFeaturedPage() {
        var mount = document.getElementById("featured-list");
        if (!mount || !data) return;
        mount.innerHTML = data.featuredIds.map(function (id, index) {
            var project = data.byId(id);
            if (!project) return "";
            var links = '<a class="text-link" href="' + projectHref(project) + '">Case study</a>';
            (project.links || []).forEach(function (link) {
                links += '<a class="text-link" href="' + escapeHtml(link.href) + '" target="_blank" rel="noopener noreferrer">' +
                    escapeHtml(link.label) + "</a>";
            });
            var meta = data.labelsFor(project).join(" · ");
            if (project.year) meta = project.year + " · " + meta;
            return '<article class="feature-row">' +
                '<span class="feature-index">0' + (index + 1) + "</span>" +
                "<div>" +
                    '<p class="feature-kicker">' + escapeHtml(meta) + "</p>" +
                    '<h2><a href="' + projectHref(project) + '">' + escapeHtml(project.title) + "</a></h2>" +
                    "<p>" + escapeHtml(project.blurb || project.summary) + "</p>" +
                    '<div class="tag-row">' + tagsHtml(project.tags) + "</div>" +
                    '<div class="feature-actions">' + links + "</div>" +
                "</div>" +
            "</article>";
        }).join("");
    }

    /* ---------- shuffling projects deck ---------- */
    function initDeck() {
        var stage = document.getElementById("deck-stage");
        var filters = document.getElementById("project-filters");
        var counter = document.getElementById("deck-counter");
        if (!stage || !filters || !data) return;

        var currentFilter = "all";
        var currentIndex = 0;

        filters.innerHTML = data.categories.map(function (category, index) {
            return '<button type="button" class="filter-btn' + (index === 0 ? " is-active" : "") +
                '" data-filter="' + category.id + '" role="tab" aria-selected="' + (index === 0 ? "true" : "false") + '">' +
                escapeHtml(category.label) + "</button>";
        }).join("");

        function visible() {
            return data.inCategory(currentFilter);
        }

        function render() {
            var list = visible();
            stage.innerHTML = list.map(function (project) {
                var image = project.cover
                    ? '<img src="' + escapeHtml(project.cover) + '" alt="' + escapeHtml(project.coverAlt || project.title) + '">'
                    : '<div class="slide-placeholder">' + escapeHtml(project.placeholder || project.title) + "</div>";
                return '<a class="project-slide" href="' + projectHref(project) + '" data-id="' + project.id + '" data-pos="hidden">' +
                    '<div class="slide-media">' + image +
                        '<div class="glass-bar">' +
                            '<p class="glass-cat">' + escapeHtml(data.labelsFor(project).join(" · ")) + "</p>" +
                            "<h3>" + escapeHtml(project.title) + "</h3>" +
                        "</div>" +
                    "</div>" +
                    '<div class="slide-copy"><p>' + escapeHtml(project.summary) + "</p>" +
                        '<div class="tag-row slide-tags">' + tagsHtml(project.tags.slice(0, 3)) + "</div>" +
                    "</div>" +
                "</a>";
            }).join("");

            var slides = stage.querySelectorAll(".project-slide");
            var n = slides.length;
            if (currentIndex >= n) currentIndex = 0;
            slides.forEach(function (slide) {
                slide.dataset.pos = "hidden";
            });
            if (!n) {
                if (counter) counter.textContent = "0 / 0";
                return;
            }
            var prev = (currentIndex - 1 + n) % n;
            var next = (currentIndex + 1) % n;
            slides[currentIndex].dataset.pos = "center";
            if (n === 2) slides[next].dataset.pos = "right";
            else if (n > 2) {
                if (currentIndex !== 0) slides[prev].dataset.pos = "left";
                slides[next].dataset.pos = "right";
            }
            slides.forEach(function (slide) {
                slide.tabIndex = slide.dataset.pos === "center" ? 0 : -1;
            });
            if (counter) counter.textContent = (currentIndex + 1) + " / " + n;
        }

        function step(dir) {
            var n = visible().length;
            if (!n) return;
            currentIndex = (currentIndex + dir + n) % n;
            render();
        }

        filters.addEventListener("click", function (event) {
            var button = event.target.closest(".filter-btn");
            if (!button) return;
            filters.querySelectorAll(".filter-btn").forEach(function (item) {
                item.classList.remove("is-active", "is-pop");
                item.setAttribute("aria-selected", "false");
            });
            button.classList.add("is-active", "is-pop");
            button.setAttribute("aria-selected", "true");
            currentFilter = button.dataset.filter;
            currentIndex = 0;
            render();
        });

        stage.addEventListener("click", function (event) {
            var slide = event.target.closest(".project-slide");
            if (!slide) return;
            if (slide.dataset.pos === "left") {
                event.preventDefault();
                step(-1);
            } else if (slide.dataset.pos === "right") {
                event.preventDefault();
                step(1);
            }
        });

        document.querySelector(".deck-arrow.prev").addEventListener("click", function () { step(-1); });
        document.querySelector(".deck-arrow.next").addEventListener("click", function () { step(1); });

        document.addEventListener("keydown", function (event) {
            if (event.target.matches("input, textarea")) return;
            if (document.body.dataset.page !== "projects") return;
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                step(-1);
            }
            if (event.key === "ArrowRight") {
                event.preventDefault();
                step(1);
            }
        });

        render();
    }

    /* ---------- case study ---------- */
    function renderCase() {
        var mount = document.getElementById("case");
        if (!mount || !data) return;
        var params = new URLSearchParams(window.location.search);
        var project = data.byId(params.get("id"));
        if (!project) {
            mount.innerHTML = '<div class="wrap case"><p>That project is not on this site.</p><p><a class="case-back" href="projects.html">Back to all projects</a></p></div>';
            return;
        }
        document.title = project.title + " — Zeinab Drameh";

        var sorted = data.sorted();
        var index = sorted.findIndex(function (item) { return item.id === project.id; });
        var next = sorted[(index + 1) % sorted.length];

        var links = (project.links || []).map(function (link) {
            return '<a class="btn" href="' + escapeHtml(link.href) + '" target="_blank" rel="noopener noreferrer">' +
                escapeHtml(link.label) + "</a>";
        }).join("");

        var hero = project.cover
            ? '<div class="case-hero"><img src="' + escapeHtml(project.cover) + '" alt="' + escapeHtml(project.coverAlt || project.title) + '"></div>'
            : "";

        var sections = (project.sections || []).map(function (section) {
            var paragraphs = (section.paragraphs || []).map(function (paragraph) {
                return "<p>" + escapeHtml(paragraph) + "</p>";
            }).join("");
            var highlights = (section.highlights || []).length
                ? '<ul class="case-highlights">' + section.highlights.map(function (item) {
                    return "<li>" + escapeHtml(item) + "</li>";
                }).join("") + "</ul>"
                : "";
            var figures = (section.images || []).length
                ? '<div class="case-figures' + (section.layout === "grid" ? " is-grid" : "") + '">' +
                    section.images.map(function (image) {
                        return "<figure><img src=\"" + escapeHtml(image.src) + "\" alt=\"" + escapeHtml(image.alt || "") + "\">" +
                            (image.alt ? "<figcaption>" + escapeHtml(image.alt) + "</figcaption>" : "") +
                        "</figure>";
                    }).join("") + "</div>"
                : "";
            return '<section class="case-section">' +
                '<h2 class="case-label">' + escapeHtml(section.label) + "</h2>" +
                '<div class="case-copy">' + paragraphs + highlights + figures + "</div>" +
            "</section>";
        }).join("");

        var meta = data.labelsFor(project).join(" · ");
        if (project.year) meta = project.year + " · " + meta;

        mount.innerHTML =
            '<article class="wrap case">' +
                '<a class="case-back" href="projects.html">All projects</a>' +
                '<p class="case-kicker">' + escapeHtml(meta) + "</p>" +
                "<h1>" + escapeHtml(project.title) + "</h1>" +
                '<p class="case-lede">' + escapeHtml(project.lede || project.summary) + "</p>" +
                (links ? '<div class="case-links">' + links + "</div>" : "") +
                hero +
                sections +
                '<div class="case-tools"><p>Built with</p><div class="tag-row">' + tagsHtml(project.tags) + "</div></div>" +
                '<a class="next-project" href="' + projectHref(next) + '">' +
                    "<span>Next project</span><strong>" + escapeHtml(next.title) + "</strong>" +
                "</a>" +
            "</article>";
    }

    function initContact() {
        var form = document.getElementById("contact-form");
        var message = document.getElementById("form-message");
        if (!form) return;
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            var name = document.getElementById("name").value.trim();
            var email = document.getElementById("email").value.trim();
            var subject = document.getElementById("subject").value.trim();
            var body = document.getElementById("body").value.trim();
            if (!name || !email || !subject || !body) {
                message.textContent = "Please fill in all fields.";
                return;
            }
            if (!email.includes("@") || !email.includes(".")) {
                message.textContent = "Please enter a valid email address.";
                return;
            }
            window.location.href = "mailto:zeinabdrameh@gmail.com?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + body);
            message.textContent = "Opening your email app...";
            form.reset();
        });
    }

    ready(function () {
        initCursor();
        initHeader();
        renderHomeFeatured();
        renderFeaturedPage();
        initDeck();
        renderCase();
        initContact();
    });
})();
