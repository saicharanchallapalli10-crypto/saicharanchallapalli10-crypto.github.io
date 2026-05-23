const viewTitles = {
  home: "SaiCharan Challapalli",
  projects: "Projects - SaiCharan Challapalli",
  about: "About Me - SaiCharan Challapalli"
};

const routes = {
  "": "home",
  "#": "home",
  "#/": "home",
  "#/projects": "projects",
  "#/about": "about"
};

const app = document.querySelector(".app");
const views = [...document.querySelectorAll(".view")];

function getViewFromHash(hash) {
  return routes[hash] || "home";
}

function applyView(nextView) {
  app.dataset.activeView = nextView;
  document.title = viewTitles[nextView] || viewTitles.home;

  views.forEach((view) => {
    const isActive = view.dataset.view === nextView;
    view.classList.toggle("is-active", isActive);
    view.setAttribute("aria-hidden", String(!isActive));
  });
}

function syncView() {
  applyView(getViewFromHash(window.location.hash));
}

window.addEventListener("hashchange", syncView);
window.addEventListener("DOMContentLoaded", syncView);

if (!window.location.hash) {
  window.history.replaceState(null, "", "#/");
}

syncView();
