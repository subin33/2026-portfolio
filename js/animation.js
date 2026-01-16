// Define DOM elements
const garfieldImage = document.querySelector("#garfield__animation__img");

const tlBtn = document.querySelector("#corner__tl__btn");
const trBtn = document.querySelector("#corner__tr__btn");
const blBtn = document.querySelector("#corner__bl__btn");
const brBtn = document.querySelector("#corner__br__btn");

const tlContent = document.querySelector("#corner__tl__content");
const trContent = document.querySelector("#corner__tr__content");
const blContent = document.querySelector("#corner__bl__content");
const brContent = document.querySelector("#corner__br__content");

// Define colors and positions
const bgColor = "#fff";
const bgColorAlt = "#333";
const textColor = "#333";
const textColorAlt = "#fff";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// Define corner that is open
let activeCorner = "";

// Store last reverse animation, ready to be played
let lastReverseAnimation = "";

function playAnimation(animation, reversAnimation) {
  // Remove all the animation classes from garfieldImage
  garfieldImage.className = "";

  if (lastReverseAnimation !== "") {
    garfieldImage.classList.add(lastReverseAnimation);
    setTimeout(() => {
      garfieldImage.classList.remove(lastReverseAnimation);
      garfieldImage.classList.add(animation);
      lastReverseAnimation = reversAnimation;
    }, 200);
  } else {
    garfieldImage.classList.add(animation);
    lastReverseAnimation = reversAnimation;
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

  playAnimation("animate-top-left", "reverse-animate-top-left");

  // Change background colors
  trBtn.style.background = bgColor;
  brBtn.style.background = bgColor;
  blBtn.style.background = bgColor;
  tlBtn.style.background = bgColorAlt;

  // Change text colors
  trBtn.style.color = textColor;
  brBtn.style.color = textColor;
  blBtn.style.color = textColor;
  tlBtn.style.color = textColorAlt;

  // Change positions of the corner content
  trContent.style.transform = trHidden;
  brContent.style.transform = brHidden;
  blContent.style.transform = blHidden;
  tlContent.style.transform = tlActive;
};
