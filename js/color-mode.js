// Define DOM elements
const toggleButton = document.querySelector("#toggle__button");
const root = document.querySelector(":root");
const storageKey = "color__mode";
const defaultMode = "light__mode";

// Load the user's preferred color mode from local storage
function loadColorMode() {
  const colorMode = localStorage.getItem(storageKey);
  root.classList.add(colorMode || defaultMode);
  updateToggleButton();
}
loadColorMode();
//Toggle the color mode
toggleButton.addEventListener("click", () => {
  saveColorMode();
});

// Save the user's preferred color mode to local storage
function saveColorMode() {
  const currentMode = root.classList.contains("dark__mode") ? "light__mode" : "dark__mode";
  root.classList.remove("light__mode", "dark__mode");
  root.classList.add(currentMode);
  localStorage.setItem(storageKey, currentMode);
  updateToggleButton();
}

function updateToggleButton() {
  if (root.classList.contains("dark__mode")) {
    toggleButton.style.backgroundImage = "url(/assets/icons/moon.webp)";
  } else {
    toggleButton.style.backgroundImage = "url(/assets/icons/sun.webp)";
  }
}
