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

function playClosingAnimation(reverseAnimation) {
  tlBtn.innerHTML = "About";
  trBtn.innerHTML = "Experience";
  blBtn.innerHTML = "Projects";
  brBtn.innerHTML = "Contact";

  switch (activeCorner) {
    case "top-left":
      tlBtn.style.background = bgColor;
      tlBtn.style.color = textColor;
      tlContent.style.transform = tlHidden;
      break;
    case "top-right":
      trBtn.style.background = bgColor;
      trBtn.style.color = textColor;
      trContent.style.transform = trHidden;
      break;
    case "bottom-left":
      blBtn.style.background = bgColor;
      blBtn.style.color = textColor;
      blContent.style.transform = blHidden;
      break;
    case "bottom-right":
      brBtn.style.background = bgColor;
      brBtn.style.color = textColor;
      brContent.style.transform = brHidden;
      break;

    default:
  }

  garfieldImage.className = "";
  lastReverseAnimation = "";
  activeCorner = "";
  garfieldImage.classList.add(reverseAnimation);

  setTimeout(function () {
    garfieldImage.classList.remove(reverseAnimation);
  }, 200);
}

// Onclick corner button functions
tlBtn.onclick = function () {
  if (activeCorner === "top-left") {
    playClosingAnimation("reverse-animate-top-left");
  } else {
    // trBtn.innerHTML = "Experience";
    // blBtn.innerHTML = "Projects";
    // brBtn.innerHTML = "Contact";

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
  }
};

trBtn.onclick = function () {
  if (activeCorner === "top-right") {
    playClosingAnimation("reverse-animate-top-right");
  } else {
    //Setting activeCorner
    activeCorner = "top-right";
    trBtn.innerHTML = "&uarr;<br/>Experience";

    playAnimation("animate-top-right", "reverse-animate-top-right");

    // Change background colors
    trBtn.style.background = bgColorAlt;
    brBtn.style.background = bgColor;
    blBtn.style.background = bgColor;
    tlBtn.style.background = bgColor;

    // Change text colors
    trBtn.style.color = textColorAlt;
    brBtn.style.color = textColor;
    blBtn.style.color = textColor;
    tlBtn.style.color = textColor;

    // Change positions of the corner content
    trContent.style.transform = trActive;
    brContent.style.transform = brHidden;
    blContent.style.transform = blHidden;
    tlContent.style.transform = tlHidden;
  }
};
