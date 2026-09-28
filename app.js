/* Sudais Ashraf Portfolio — interactions */

const WHATSAPP_URL = "https://wa.me/917889348341";
const INSTAGRAM_URL = "https://www.instagram.com/_sudais.ashraf_/";

// High-quality placeholders matching the cinematic / Kashmir mood
const media = {
  hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
  portrait: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  shadow: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  mountain: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
};

const projects = [
  {
    id: "quiet-frames",
    name: "Quiet Frames",
    category: "Photography",
    filter: "PHOTOGRAPHY",
    year: "2026",
    image: media.shadow,
    ratio: "tall",
    note: "Light, pause, presence.",
  },
  {
    id: "valley-light",
    name: "Valley Light",
    category: "Cinematic Video",
    filter: "VIDEOS",
    year: "2026",
    image: media.hero,
    ratio: "wide",
    note: "A visual study in atmosphere.",
  },
  {
    id: "after-rain",
    name: "After Rain",
    category: "Reel Direction",
    filter: "REELS",
    year: "2026",
    image: media.mountain,
    ratio: "wide",
    note: "Short-form, shaped with feeling.",
  },
  {
    id: "the-still",
    name: "The Still",
    category: "Editing & Grade",
    filter: "EDITING",
    year: "2026",
    image: media.portrait,
    ratio: "tall",
    note: "Color, texture, rhythm.",
  },
  {
    id: "soft-focus",
    name: "Soft Focus",
    category: "Photography",
    filter: "PHOTOGRAPHY",
    year: "2026",
    image: media.portrait,
    ratio: "portrait",
    note: "A closer look at character.",
  },
  {
    id: "grounded",
    name: "Grounded",
    category: "Cinematic Video",
    filter: "VIDEOS",
    year: "2026",
    image: media.hero,
    ratio: "portrait",
    note: "Rooted in place. Open to everywhere.",
  },
];

const services = [
  {
    id: "01",
    title: "Photography",
    summary: "Portraits, events, weddings, lifestyle, products and professional photography.",
    icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  },
  {
    id: "02",
    title: "Cinematic Videography",
    summary: "Events, weddings, promotional videos, brand films and cinematic storytelling.",
    icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2" y="2" width="20" height="20" rx="2.18"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/></svg>`,
  },
  {
    id: "03",
    title: "Video Editing",
    summary: "Professional editing, color grading, sound design, transitions and cinematic post-production.",
    icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22v-6M9 16h6"/></svg>`,
  },
  {
    id: "04",
    title: "Reel Making",
    summary: "Creative Instagram Reels, event reels, promotional reels and short-form content.",
    icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2" y="2" width="20" height="20" rx="2.18"/><path d="M7 2v20M17 2v20M2 12h20"/><path d="M10 9l5 3-5 3V9z"/></svg>`,
  },
  {
    id: "05",
    title: "Social Media Content",
    summary: "High-quality visual content for brands, businesses, creators and social platforms.",
    icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  },
];

let activeService = "01";
let currentFilter = "ALL";

// ---------- Helpers ----------
function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("is-open");
  document.body.style.overflow = menu.classList.contains("is-open") ? "hidden" : "";
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("is-open");
  document.body.style.overflow = "";
}

// ---------- Services ----------
function renderServices() {
  const list = document.getElementById("serviceList");
  const detail = document.getElementById("serviceDetail");

  list.innerHTML = services
    .map((s) => {
      const isActive = s.id === activeService;
      return `
      <button class="service-row ${isActive ? "is-active" : ""}" data-id="${s.id}" aria-expanded="${isActive}">
        <span class="service-number">${s.id}</span>
        <span class="service-icon">${s.icon}</span>
        <span class="service-name">${s.title}</span>
        <span class="service-toggle">${isActive ? "−" : "+"}</span>
        ${isActive ? `<span class="service-detail-mobile">${s.summary}</span>` : ""}
      </button>`;
    })
    .join("");

  const current = services.find((s) => s.id === activeService);
  detail.innerHTML = `
    <div class="service-detail-content">
      <span class="service-detail-index">${current.id} / 05</span>
      <h3>${current.title}</h3>
      <p>${current.summary}</p>
      <span class="detail-arrow">↗</span>
    </div>
    <div class="detail-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
  `;

  list.querySelectorAll(".service-row").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeService = btn.dataset.id;
      renderServices();
    });
  });
}

// ---------- Work grid ----------
function renderWork() {
  const grid = document.getElementById("workGrid");
  const visible =
    currentFilter === "ALL"
      ? projects
      : projects.filter((p) => p.filter === currentFilter);

  grid.innerHTML = visible
    .map(
      (p) => `
    <article class="work-card ratio-${p.ratio}" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}" loading="lazy" />
      <div class="work-card-overlay">
        <span class="work-card-cat">${p.category} · ${p.year}</span>
        <h3 class="work-card-name">${p.name}</h3>
        <p class="work-card-note">${p.note}</p>
      </div>
    </article>`
    )
    .join("");

  grid.querySelectorAll(".work-card").forEach((card) => {
    card.addEventListener("click", () => {
      const project = projects.find((p) => p.id === card.dataset.id);
      if (project) openProject(project);
    });
  });
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.filter === filter);
  });
  renderWork();
}

// ---------- Project modal ----------
function openProject(project) {
  const modal = document.getElementById("projectModal");
  document.getElementById("modalImg").src = project.image;
  document.getElementById("modalImg").alt = project.name;
  document.getElementById("modalMeta").textContent = `${project.category} / ${project.year}`;
  document.getElementById("modalTitle").textContent = project.name;
  document.getElementById("modalNote").textContent = project.note;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeProject() {
  document.getElementById("projectModal").hidden = true;
  document.body.style.overflow = "";
}

// ---------- Showreel ----------
function openShowreel() {
  document.getElementById("showreelModal").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeShowreel() {
  document.getElementById("showreelModal").hidden = true;
  document.body.style.overflow = "";
}

// ---------- Contact form ----------
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById("submitBtn").hidden = true;
  document.getElementById("formSuccess").hidden = false;
  e.target.reset();
}

// ---------- Nav scroll style ----------
function onScroll() {
  const nav = document.getElementById("siteNav");
  if (window.scrollY > 40) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
}

// ---------- Keyboard ----------
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProject();
    closeShowreel();
    closeMenu();
  }
});

// ---------- Click outside modals ----------
document.getElementById("projectModal")?.addEventListener("click", (e) => {
  if (e.target.id === "projectModal") closeProject();
});
document.getElementById("showreelModal")?.addEventListener("click", (e) => {
  if (e.target.id === "showreelModal") closeShowreel();
});

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderWork();

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => setFilter(btn.dataset.filter));
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
