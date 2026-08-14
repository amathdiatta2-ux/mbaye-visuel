(function () {
  "use strict";

  /* ---------------- Year ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Header scroll state ---------------- */
  var header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile nav toggle ---------------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  /* ---------------- Build gallery from GALLERY_DATA ---------------- */
  var galleryGrid = document.getElementById("galleryGrid");
  var galleryItemsState = []; // { el, category }

  function categoryLabel(cat) {
    var map = {
      mariages: "Mariage",
      traditions: "Tradition & Cérémonie",
      soutenances: "Soutenance",
      "shooting-femmes": "Shooting Femme",
      "shooting-hommes": "Shooting Homme",
      "shooting-enfants": "Shooting Enfant",
      evenements: "Événement"
    };
    return map[cat] || cat;
  }

  if (galleryGrid && typeof GALLERY_DATA !== "undefined") {
    var frag = document.createDocumentFragment();
    GALLERY_DATA.forEach(function (item, idx) {
      var fig = document.createElement("figure");
      fig.className = "gallery-item";
      fig.setAttribute("data-category", item.category);
      fig.setAttribute("data-index", idx);

      var img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt;
      img.loading = "lazy";
      fig.appendChild(img);

      var overlay = document.createElement("div");
      overlay.className = "gi-overlay";
      var span = document.createElement("span");
      span.textContent = categoryLabel(item.category);
      overlay.appendChild(span);
      fig.appendChild(overlay);

      fig.addEventListener("click", function () {
        openLightbox(idx);
      });

      frag.appendChild(fig);
      galleryItemsState.push({ el: fig, category: item.category });
    });
    galleryGrid.appendChild(frag);
  }

  /* ---------------- Gallery filters ---------------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var filter = btn.getAttribute("data-filter");
      galleryItemsState.forEach(function (state) {
        var show = filter === "all" || state.category === filter;
        state.el.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------------- Scroll reveal for gallery items + generic reveal ---------------- */
  var revealTargets = document.querySelectorAll(".gallery-item, .reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Mark sections with .reveal for generic fade-up (applied via class in HTML optionally) */
  document.querySelectorAll(".strength-item, .service-col, .highlight-item").forEach(function (el) {
    el.classList.add("reveal");
    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      obs.observe(el);
    } else {
      el.classList.add("is-visible");
    }
  });

  /* ---------------- Lightbox ---------------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImage = document.getElementById("lightboxImage");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");
  var currentIndex = 0;

  function getVisibleIndices() {
    // respects current filter: navigation moves across currently visible items
    var indices = [];
    galleryItemsState.forEach(function (state, i) {
      if (!state.el.classList.contains("is-hidden")) indices.push(i);
    });
    return indices;
  }

  function openLightbox(index) {
    currentIndex = index;
    renderLightbox();
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function renderLightbox() {
    var item = GALLERY_DATA[currentIndex];
    if (!item) return;
    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt;
    lightboxCaption.textContent = categoryLabel(item.category);
  }

  function stepLightbox(direction) {
    var visible = getVisibleIndices();
    if (visible.length === 0) return;
    var pos = visible.indexOf(currentIndex);
    if (pos === -1) pos = 0;
    pos = (pos + direction + visible.length) % visible.length;
    currentIndex = visible[pos];
    renderLightbox();
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", function () { stepLightbox(-1); });
  lightboxNext.addEventListener("click", function () { stepLightbox(1); });
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });

  /* ---------------- Highlights open lightbox by matching src ---------------- */
  document.querySelectorAll(".highlight-item img").forEach(function (img) {
    img.parentElement.style.cursor = "pointer";
    img.parentElement.addEventListener("click", function () {
      var idx = GALLERY_DATA.findIndex(function (d) { return d.src === img.getAttribute("src"); });
      if (idx > -1) openLightbox(idx);
    });
  });
})();