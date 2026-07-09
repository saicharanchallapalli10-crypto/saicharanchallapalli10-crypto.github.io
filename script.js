// ========== SITE CONFIG — Edit these ==========
const OWNER_NAME    = "SaiCharan Challapalli";
const CONTACT_EMAIL = "challapalli.si@northeastern.edu";       // ← Contact form sends here
const DISPLAY_EMAIL = "challapalli.si@northeastern.edu";       // ← Shown in contact card
const LINKEDIN_URL  = "#";                    // ← Your LinkedIn profile URL (footer)
const GITHUB_URL    = "https://github.com/saicharanchallapalli10-crypto";                    // ← Your GitHub profile URL (footer)
// ==============================================

// ========== PROJECTS — Add/edit your projects here ==========
// Adding a project to this array automatically renders a tile + detail view.
const PROJECTS = [
  {
    name: "USB-C Inline Power Meter",
    // 2–3 sentence brief shown on the TILE
    shortDescription:
      "Designed a pass-through USB-C power meter in Kicad that measures voltage, current, and power " +
      "delivered to a device in real time and shows all three on an onboard screen. ",
    eyebrow: "Hardware / Embedded",          // ← category line shown in the detail view
    // Detail-view body paragraphs (each renders as its own <p>)
    paragraphs: [
      "I designed a pass-through USB-C power meter in KiCad that measures voltage, current, and power delivered to USB-C devices in real time. The design uses an INA226 for high-side current sensing across a 10mΩ shunt, a wide-input buck regulator (TPS62933) to handle the full USB-PD voltage range (5V-20V), and an RP2040 driving an OLED display. I took this project on to learn how USB-C Power Delivery works at a low level and to get hands-on experience with PCB design — originally I just wanted to buy a USB-C power meter to test my devices, but figured why not use the opportunity to learn something new and build one myself!",
      "From a high-level perspective, the power meter sits inline between a USB-C charger and a device, measuring the voltage and current flowing through VBUS in real time. It then displays all three values (voltage, current, power) on a OLED, while passing through the USB-C CC pins so USB Power Delivery negotiation between the charger and device still works normally.",
    ],
    chips: ["Started: May 10th, 2026", "Completed: June 8th, 2026", "Assembly in progress!"], // ← info chips in detail
    keyDecisions: [                                          // ← "Key design decisions" bullets in detail
      "High-side current sensing with a 10 mOhm shunt and TI INA226 over I2C.",
      "Wide input TPS62933 buck regulator for the 3.3V rail across the full USB-PD range.",
      "Passive CC1/CC2 pass-through to preserve USB-PD negotiation",
      "Seeed XIAO RP2040 microcontroller for I2C control and display drive.",
    ],
    dateRange: "May 2026 - June 2026",            // ← shown on the tile
    previewImage: "./images/usbc-preview.jpg",    // ← tile image + detail fallback when no 3D model
    tileImageFit: "cover",                        // ← "cover" fills the tile media edge-to-edge; default "contain"
    model3D: "pcb.glb",                           // ← 3D model path (.glb/.gltf), or null to use previewImage
  },
  {
    name: "SWD Debug Adapter",
    // 2–3 sentence brief shown on the TILE
    shortDescription:
      "As a apart of the NU AERO club this was the first PCB I designed; For my first ever PCB, I designed a dual-orientation SWD debug adapter PCB in KiCad with signal protection, auxiliary breakout " +
      "pins, and support for both standard and flipped ARM 10-pin header pinouts.",
    eyebrow: "Hardware / Embedded",          // ← category line shown in the detail view
    // Detail-view body paragraphs (each renders as its own <p>)
    paragraphs: [
      "Designed a compact SWD debug adapter board in KiCad that lets you connect a debug probe to ARM microcontrollers regardless of the target's header orientation. The board has two 10-pin connectors — one standard and one flipped — so it works with both pinout layouts without rewiring.",
    ],
    chips: [], // ← info chips in detail
    dateRange: "March 2026 - April 2026",                            // ← shown on the tile
    previewImage: "./images/aeropcb.png",         // ← tile preview image
    tileImageFit: "cover",                        // ← fills the tile media edge-to-edge (matches USB-C)
    model3D: "aeropcb.glb",                       // ← 3D model path (.glb/.gltf), or null to use previewImage
  },
  {
    name: "Smart Parking Reservation Simulator",
    // 2–3 sentence brief shown on the TILE
    shortDescription:
      "Developed the core backend of a smart parking reservation system with dynamic pricing and parking " +
      "management. Connected the application's components and designed the frontend UI.",
    eyebrow: "Software / Full-Stack",             // ← category line shown in the detail view
    // Detail-view body paragraphs (each renders as its own <p>)
    paragraphs: [
      "For EECE 2140, I worked as part of a three-person team to develop a Smart Parking Reservation Simulator; The goal was to create a web-based application with a C++ backend designed to simulate a 100 spot parking facility with real-time reservations and dynamic pricing.",
      "I was responsible for designing and implementing the PricingEngine and ParkingSpot classes; <strong>I developed an algorithmic pricing system that dynamically adjusted reservation costs based on real time parking demand, including factors such as lot occupancy and reservation duration.</strong>",
      "I also integrated the project's backend by connecting the User, PricingEngine, and ParkingSpot classes through the main server. This involved processing HTTP requests, validating user input, coordinating data between classes, and returning responses to the frontend.",
      
    ],
    chips: ["Started: February 2026", "Completed: April 2026"], // ← info chips in detail
    dateRange: "February 2026 - April 2026",                      // ← shown on the tile
    previewImage: "./images/c++preview.png",       // ← tile image
    detailImage: "./images/c++main.png",           // ← detail-view image (no 3D model)
    model3D: null,                                 // ← 3D model path (.glb/.gltf), or null to use images
    projectLink: {
      url: "https://github.com/saicharanchallapalli10-crypto/Smart-Parking-Reservation-Simulator-",
      text: "Click here to visit the Github repository where more details and documentation exist for the project! "
    }
  },
  {
    name: "Arcade Game Project",
    // 2–3 sentence brief shown on the TILE
    shortDescription:
      "Wired, assembled, and programmed a cup pong arcade game in MicroPython using two separate Raspberry Pi " +
      "Pico boards with inter-board communication, photoresistor-based scoring, and real-time LCD point tracking.",
    eyebrow: "Hardware / Embedded",               // ← category line shown in the detail view
    // Detail-view body paragraphs (each renders as its own <p>)
    paragraphs: [
      "For Cornerstone of Engineering 1, a group of three people and I built an Arcade game. My team built a physical cup pong game with automated electronic scoring. The game has six cups spread across a base and backboard, each worth different points based on distance and elevation — 10, 20, 30, and 40 for the base cups, and 60 and 100 for the two backboard cups. The player gets six balls, unlimited time, and each cup can only be scored once, for a max of 260 points.",
      "The game runs on two Raspberry Pi Pico microcontrollers programmed in MicroPython. Each cup has a photoresistor inside it that continuously reads ambient light levels. When a ball lands in a cup and blocks the light, the sensor reading drops below a coded threshold, triggering the corresponding point value to be sent to an LCD display. A desk lamp above the game keeps the baseline light level high so the contrast when a ball lands is large and detection stays reliable.",
    ],
    chips: ["Started: October 2025", "Completed: December 2025"], // ← info chips in detail
    keyDecisionsHeading: "My contributions",       // ← custom heading for the bullet list below
    keyDecisions: [                                 // ← renders as a bulleted list in detail
      "Wired all six photoresistors in an organized manner and handled the full circuit layout across both boards.",
      "Documented all parts chosen and the connections between the parts.",
      "Wrote all the MicroPython code including the scoring logic and threshold detection.",
      "Set up two separate Pico boards and established inter-board communication so sensor readings from one board could be sent to the other and all six scores tracked from a single display.",
      "Integrated all wiring and electronics into the physical game after the structure was built.",
      "Programmed a reset button so the next player can zero out the score and start a new round.",
    ],
    dateRange: "October 2025 - December 2025",     // ← shown on the tile
    previewImage: "./images/corner-preview.JPG",   // ← tile image
    tileImageFit: "cover",                          // ← fills the tile media edge-to-edge
    detailImage: "./images/corner-main.JPG",       // ← primary detail-view image
    detailImage2: "./images/corner-wiring.jpg",    // ← optional second image, rendered below the primary
    model3D: null,                                 // ← 3D model path (.glb/.gltf), or null to use images
  },
  // Add more projects here...
];
// =============================================================

// ── Config wiring ──
document.querySelectorAll("[data-config-linkedin]").forEach(el => {
  if (LINKEDIN_URL !== "#") el.href = LINKEDIN_URL;
});
document.querySelectorAll("[data-config-github]").forEach(el => {
  if (GITHUB_URL !== "#") el.href = GITHUB_URL;
});
document.querySelectorAll("[data-config-email-display]").forEach(el => {
  el.textContent = DISPLAY_EMAIL;
  el.href = `mailto:${DISPLAY_EMAIL}`;
});

// ── Hamburger menu (mobile) ──
const hamburger = document.querySelector("[data-hamburger]");
const navLinks = document.getElementById("nav-links");

function closeHamburger() {
  if (!hamburger || !navLinks) return;
  hamburger.classList.remove("is-open");
  navLinks.classList.remove("is-open");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Open navigation");
}

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const opening = !hamburger.classList.contains("is-open");
    hamburger.classList.toggle("is-open", opening);
    navLinks.classList.toggle("is-open", opening);
    hamburger.setAttribute("aria-expanded", String(opening));
    hamburger.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
  });

  document.addEventListener("click", e => {
    const nav = document.querySelector(".top-nav");
    if (nav && !nav.contains(e.target)) closeHamburger();
  });
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeHamburger();
});

// ── View routing ──
// Portfolio and Contact are reached only via nav links — the hero never flows
// into them on scroll. The footer lives outside this switcher and is always shown.
const VIEW_IDS = ["home", "portfolio", "contact"];
const topNav = document.querySelector(".top-nav");
const hasViews = VIEW_IDS.some(id => document.getElementById(id));

// Portfolio elements (declared before the router so setView can reset the detail view)
const projectGrid = document.getElementById("project-grid");
const projectDetailView = document.getElementById("project-detail-view");
const projectEmpty = document.getElementById("project-empty");

function getViewFromHash() {
  const id = window.location.hash.replace("#", "");
  return VIEW_IDS.includes(id) ? id : "home";
}

function setView(id, updateHash = true) {
  const target = document.getElementById(id);
  if (!target || target.classList.contains("is-active")) {
    closeHamburger();
    return;
  }

  VIEW_IDS.forEach(viewId => {
    const view = document.getElementById(viewId);
    if (!view) return;
    view.classList.remove("is-active");
    view.hidden = true;
  });

  target.hidden = false;
  void target.offsetWidth; // reflow so the opacity transition runs
  target.classList.add("is-active");

  // Entering Portfolio always starts on the tile grid, never a stale detail view
  if (id === "portfolio") closeDetail();

  if (topNav) topNav.classList.remove("is-scrolled");
  window.scrollTo(0, 0);
  closeHamburger();

  if (updateHash) history.replaceState(null, "", `#${id}`);
}

if (hasViews) {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const id = link.getAttribute("href").slice(1);
      if (VIEW_IDS.includes(id)) {
        e.preventDefault();
        setView(id);
      }
    });
  });

  window.addEventListener("hashchange", () => setView(getViewFromHash(), false));

  // Nav gains a touch more opacity once the user scrolls down
  window.addEventListener("scroll", () => {
    if (!topNav) return;
    topNav.classList.toggle("is-scrolled", window.scrollY > 40);
  }, { passive: true });

  // Initial view from the hash (so deep links / redirects land correctly)
  setView(getViewFromHash(), false);
}

// ── Portfolio (rendered from PROJECTS) ──
// Preview image (tile top + detail fallback); dashed placeholder when none is set.
function previewMarkup(p, cls) {
  if (p.previewImage) {
    return `<img class="${cls}" src="${p.previewImage}" alt="${p.name} preview">`;
  }
  return `<div class="${cls} is-placeholder">[ Preview Image ]</div>`;
}

function renderTiles() {
  if (!projectGrid) return;

  if (!PROJECTS.length) {
    projectGrid.innerHTML = "";
    if (projectEmpty) projectEmpty.hidden = false;
    return;
  }
  if (projectEmpty) projectEmpty.hidden = true;

  projectGrid.innerHTML = PROJECTS.map((p, i) => `
    <article class="tile" data-index="${i}">
      <div class="tile__media">${previewMarkup(p, `tile__image tile__image--${p.tileImageFit || "contain"}`)}</div>
      <div class="tile__body">
        <h3 class="tile__name">${p.name}</h3>
        <p class="tile__desc">${p.shortDescription}</p>
        <div class="tile__foot">
          <span class="tile__date">${p.dateRange}</span>
          <button class="tile__cta" type="button" data-details="${i}">Get Details <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </article>
  `).join("");

  projectGrid.querySelectorAll("[data-details]").forEach(btn => {
    btn.addEventListener("click", () => openDetail(Number(btn.dataset.details)));
  });
}

const DEFAULT_CAMERA = {
  orbit: "16deg 80deg 84%",
  target: "0.136m 0.0044m 0.097m",
  fieldOfView: "22deg",
};

// Right column of the detail: framed 3D viewer (with fullscreen + reset), or the preview image.
function detailVisualMarkup(p) {
  if (p.model3D) {
    return `
      <div class="pcb-viewer-shell" id="pcb-viewer-shell">
        <model-viewer id="pcb-viewer" class="pcb-viewer" src="${p.model3D}" alt="3D model of ${p.name}"
          camera-controls touch-action="pan-y" interaction-prompt="auto" tone-mapping="aces"
          environment-image="neutral" exposure="1.0" shadow-intensity="0.38"
          camera-orbit="${DEFAULT_CAMERA.orbit}" camera-target="${DEFAULT_CAMERA.target}"
          field-of-view="${DEFAULT_CAMERA.fieldOfView}" loading="lazy">
          <div class="pcb-viewer__loading" slot="poster">
            <div class="pcb-viewer__spinner" aria-hidden="true"></div>
            <span>Loading 3D PCB</span>
          </div>
        </model-viewer>
        <button class="pcb-viewer__fullscreen" type="button" aria-label="Toggle fullscreen" data-fullscreen>
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5"/>
          </svg>
        </button>
      </div>
      <button class="pcb-viewer__reset" type="button" data-reset>Reset View</button>
      <p class="pcb-viewer__hint">Drag to rotate, scroll to zoom, and pan with touch or right-click.</p>
    `;
  }
  // A project may supply a dedicated detail image (distinct from its tile preview),
  // and optionally a second image rendered below it (e.g. an internal/wiring view).
  if (p.detailImage) {
    const primary = `<img class="detail-visual" src="${p.detailImage}" alt="${p.name}">`;
    const secondary = p.detailImage2
      ? `<img class="detail-visual detail-visual--secondary" src="${p.detailImage2}" alt="${p.name} — additional view">`
      : "";
    return primary + secondary;
  }
  return previewMarkup(p, "detail-visual");
}

function openDetail(i) {
  const p = PROJECTS[i];
  if (!p || !projectDetailView) return;

  const eyebrow = p.eyebrow ? `<p class="detail-eyebrow">${p.eyebrow}</p>` : "";
  const chips = (p.chips && p.chips.length)
    ? `<div class="detail-chips">${p.chips.map(c => `<span class="chip">${c}</span>`).join("")}</div>`
    : "";
  const paragraphs = (p.paragraphs || []).map(t => `<p class="detail-lede">${t}</p>`).join("");
  const decisions = (p.keyDecisions && p.keyDecisions.length)
    ? `<div class="detail-decisions">
         <p class="detail-decisions__head">${p.keyDecisionsHeading || "Key design decisions"}</p>
         <ul>${p.keyDecisions.map(d => `<li>${d}</li>`).join("")}</ul>
       </div>`
    : "";
  const projectLinkHtml = (p.projectLink)
    ? `<div class="detail-project-link"><a href="${p.projectLink.url}" target="_blank" rel="noopener noreferrer">${p.projectLink.text}</a></div>`
    : "";

  projectDetailView.innerHTML = `
    <button class="detail-back" type="button" data-back>← Back to projects</button>
    <div class="detail-grid">
      <div class="detail-info-col">
        ${eyebrow}
        <h3 class="detail-title">${p.name}</h3>
        ${chips}
        ${paragraphs}
        ${decisions}
      </div>
      <div class="detail-visual-col">${detailVisualMarkup(p)}${projectLinkHtml}</div>
    </div>
  `;

  projectDetailView.querySelector("[data-back]").addEventListener("click", closeDetail);
  wireViewer();

  if (projectGrid) projectGrid.hidden = true;
  projectDetailView.hidden = false;
  void projectDetailView.offsetWidth;
  projectDetailView.classList.add("is-active");
  window.scrollTo(0, 0);
}

// Wire the 3D viewer controls for the currently-rendered detail view
function wireViewer() {
  const viewer = projectDetailView.querySelector("#pcb-viewer");
  const shell = projectDetailView.querySelector("#pcb-viewer-shell");
  if (!viewer || !shell) return;

  const markLoaded = () => shell.classList.add("is-loaded");
  if (viewer.loaded) markLoaded();
  else viewer.addEventListener("load", markLoaded, { once: true });

  const fsBtn = projectDetailView.querySelector("[data-fullscreen]");
  if (fsBtn) {
    fsBtn.addEventListener("click", () => {
      if (document.fullscreenElement === shell) document.exitFullscreen();
      else shell.requestFullscreen?.();
    });
  }

  const resetBtn = projectDetailView.querySelector("[data-reset]");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      viewer.setAttribute("camera-orbit", DEFAULT_CAMERA.orbit);
      viewer.setAttribute("camera-target", DEFAULT_CAMERA.target);
      viewer.setAttribute("field-of-view", DEFAULT_CAMERA.fieldOfView);
      viewer.jumpCameraToGoal?.();
    });
  }
}

function closeDetail() {
  if (!projectDetailView) return;
  projectDetailView.classList.remove("is-active");
  projectDetailView.hidden = true;
  projectDetailView.innerHTML = "";
  if (projectGrid) projectGrid.hidden = false;
  window.scrollTo(0, 0);
}

renderTiles();

// ── Contact form (mailto baseline) ──
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

if (contactForm && formSuccess) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = contactForm.elements.name.value.trim();
    const email = contactForm.elements.email.value.trim();
    const message = contactForm.elements.message.value.trim();
    if (!name || !email || !message) return;

    // ↓ Recipient set by CONTACT_EMAIL at the top of this file
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    formSuccess.hidden = false;
    contactForm.reset();
  });
}
