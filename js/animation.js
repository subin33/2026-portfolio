// Define DOM elements
const garfieldImage = document.querySelector("garfield__animation__img");

const tlBtn = document.querySelector("#corner__tl__btn");
const trBtn = document.querySelector("#corner__tr__btn");
const blBtn = document.querySelector("#corner__bl__btn");
const brBtn = document.querySelector("#corner__br__btn");

const tlContent = document.querySelector("#corner__tl__content");
const trContent = document.querySelector("#corner__tr__content");
const blContent = document.querySelector("#corner__bl__content");
const brContent = document.querySelector("#corner__br__content");

// Define corner that is open
let activeCorner = "";

// Store last reverse animation, ready to be played
let lastReverseAni = "";

function playAnimation(ani, reversAni) {
  // Remove all the animation classes from garfieldImage
  garfieldImage.className = "";

  if (lastReverseAni !== "") {
  }
}

// Onclick corner button functions
tlBtn.onclick = function () {
  trBtn.innerHTML = "Experience";
  blBtn.innerHTML = "Projects";
  brBtn.innerHTML = "Contact";

  // Setting activeCorner
  activeCorner = "top-left";
  tlBtn.innerHTML = "&uarr;<br/>About";
};
