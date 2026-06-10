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
const pcbViewer = document.querySelector("#pcb-viewer");
const pcbViewerShell = document.querySelector("#pcb-viewer-shell");
const fullscreenButton = document.querySelector("[data-fullscreen-target='pcb-viewer-shell']");
const resetButton = document.querySelector("[data-reset-view]");
const defaultCamera = {
  orbit: "35deg 68deg 118%",
  target: "0.02m 0.01m 0m",
  fieldOfView: "28deg"
};

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

function updateFullscreenButton() {
  if (!fullscreenButton) {
    return;
  }

  const isFullscreen = document.fullscreenElement === pcbViewerShell;
  fullscreenButton.setAttribute(
    "aria-label",
    isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
  );
}

async function toggleFullscreen() {
  if (!pcbViewerShell) {
    return;
  }

  if (document.fullscreenElement === pcbViewerShell) {
    await document.exitFullscreen();
    return;
  }

  await pcbViewerShell.requestFullscreen?.();
}

function resetViewer() {
  if (!pcbViewer) {
    return;
  }

  pcbViewer.setAttribute("camera-orbit", defaultCamera.orbit);
  pcbViewer.setAttribute("camera-target", defaultCamera.target);
  pcbViewer.setAttribute("field-of-view", defaultCamera.fieldOfView);
  pcbViewer.jumpCameraToGoal?.();
}

if (pcbViewer && pcbViewerShell) {
  const markLoaded = () => pcbViewerShell.classList.add("is-loaded");

  if (pcbViewer.loaded) {
    markLoaded();
  } else {
    pcbViewer.addEventListener("load", markLoaded, { once: true });
  }
}

if (fullscreenButton) {
  fullscreenButton.addEventListener("click", () => {
    void toggleFullscreen();
  });
}

if (resetButton) {
  resetButton.addEventListener("click", resetViewer);
}

document.addEventListener("fullscreenchange", updateFullscreenButton);

window.addEventListener("hashchange", syncView);
window.addEventListener("DOMContentLoaded", syncView);

if (!window.location.hash) {
  window.history.replaceState(null, "", "#/");
}

syncView();
updateFullscreenButton();
