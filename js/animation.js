// Define DOM elements
const garfieldImage = document.querySelector("#garfield__animation__img");

const tl = document.querySelector("#corner__tl");
const tr = document.querySelector("#corner__tr");
const bl = document.querySelector("#corner__bl");
const br = document.querySelector("#corner__br");

const tlBtn = document.querySelector("#corner__tl__btn");
const trBtn = document.querySelector("#corner__tr__btn");
const blBtn = document.querySelector("#corner__bl__btn");
const brBtn = document.querySelector("#corner__br__btn");

const tlContent = document.querySelector("#corner__tl__content");
const trContent = document.querySelector("#corner__tr__content");
const blContent = document.querySelector("#corner__bl__content");
const brContent = document.querySelector("#corner__br__content");

const projectOne = document.querySelector(".project-1");
const projectTwo = document.querySelector(".project-2");
const projectThree = document.querySelector(".project-3");

const articles = tlContent.querySelectorAll("article");
const experience = document.querySelector(".experience");
const card = document.querySelector(".cards");

// Define colors and positions
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(7.5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(4.5vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// Define corner that is open
let activeCorner = "";

// Store last reverse animation, ready to be played
let lastReverseAnimation = "";

window.addEventListener("resize", handleWindowResize);

// Add on event listener to the window object to listen for resize events
function handleWindowResize() {
  switch (activeCorner) {
    case "top-left":
      if (window.innerWidth <= 1100) {
        tlActive = "translateX(0) translateY(0)";
        tlContent.style.transform = "translateX(0vw) translateY(0)";
        tlContent.style.width = "100vw";
        tlContent.style.height = "100vh";
        tlContent.style.top = "0";
        tlContent.style.display = "flex";
        tlContent.style.alignItems = "center";
        tlContent.style.justifyContent = "center";
        tlContent.style.background = "var(--bg-transparent)";
        card.style.marginTop = "7rem";
        card.style.width = "80%";
        articles.forEach((el) => {
          el.style.display = "inline-block";
        });
        tlContent.style.zIndex = "200";
        tlBtn.style.zIndex = "300";
        trBtn.style.zIndex = "100";
        blBtn.style.zIndex = "100";
        brBtn.style.zIndex = "100";
      } else {
        tlActive = "translateX(7.5vw) translateY(0)";
        tlContent.style.transform = "translateX(5vw) translateY(0)";
        tlContent.style.width = "30vw";
        tlContent.style.height = "0";
        tlContent.style.top = "10vh";
        tlContent.style.display = "block";
        card.style.marginTop = "";
        card.style.width = "";
        articles.forEach((el) => {
          el.style.display = "";
        });
      }
      break;

    case "top-right":
      if (window.innerWidth <= 1100) {
        trActive = "translateX(0) translateY(0)";
        trContent.style.transform = "translateX(0vw) translateY(0)";
        trContent.style.width = "100vw";
        trContent.style.height = "100vh";
        trContent.style.top = "0";
        trContent.style.right = "0";

        trContent.style.display = "flex";
        trContent.style.alignItems = "center";
        trContent.style.justifyContent = "center";
        trContent.style.background = "var(--bg-transparent)";
        trContent.style.zIndex = "200";

        experience.style.left = "50%";
        experience.style.top = "50%";
        experience.style.right = "";
        experience.style.transform = "translateX(-50%) translateY(-50%)";

        trBtn.style.zIndex = "300";
        tlBtn.style.zIndex = "100";
        blBtn.style.zIndex = "100";
        brBtn.style.zIndex = "100";
      } else {
        trActive = "translateX(10vw) translateY(0)";
        trContent.style.transform = "translateX(-5vw) translateY(0)";
        trContent.style.width = "30vw";
        trContent.style.height = "0";
        trContent.style.top = "10vh";
        trContent.style.display = "block";

        experience.style.left = "";
        experience.style.top = "0";
        experience.style.right = "0";
        experience.style.transform = "";
      }
      break;

    case "bottom-left":
      const projects = document.querySelectorAll("#corner__bl .projects");

      if (window.innerWidth <= 600) {
        blActive = "translateX(0) translateY(0)";
        blContent.style.transform = "translateX(0vw) translateY(0)";
        blContent.style.width = "100vw";
        blContent.style.height = "100vh";
        blContent.style.top = "0";
        blContent.style.display = "flex";
        blContent.style.alignItems = "center";
        blContent.style.justifyContent = "center";
        blContent.style.background = "var(--bg-transparent)";
        blContent.style.zIndex = "200";
        trBtn.style.zIndex = "100";
        tlBtn.style.zIndex = "100";
        blBtn.style.zIndex = "300";
        brBtn.style.zIndex = "100";

        projects.forEach((project) => {
          project.style.width = "70%";
          project.style.margin = "auto auto 0.5rem";
        });
      } else if (window.innerWidth <= 1100) {
        blActive = "translateX(0) translateY(0)";
        blContent.style.transform = "translateX(0vw) translateY(0)";
        blContent.style.width = "100vw";
        blContent.style.height = "100vh";
        blContent.style.top = "0";
        blContent.style.display = "flex";
        blContent.style.alignItems = "center";
        blContent.style.justifyContent = "center";
        blContent.style.background = "var(--bg-transparent)";
        blContent.style.zIndex = "200";
        trBtn.style.zIndex = "100";
        tlBtn.style.zIndex = "100";
        blBtn.style.zIndex = "300";
        brBtn.style.zIndex = "100";
      } else {
        blActive = "translateX(4.5vw) translateY(7vh)";
        blContent.style.transform = "translateX(4.5vw) translateY(7vh)";
        blContent.style.height = "0";
        blContent.style.top = "26vh";
        blContent.style.display = "block";
      }
      break;

    case "bottom-right":
      if (window.innerWidth <= 600) {
        brActive = "translateX(0) translateY(0)";
        brContent.style.transform = "translateX(0vw) translateY(0)";
        brContent.style.width = "100vw";
        brContent.style.height = "100vh";
        brContent.style.bottom = "0";
        brContent.style.display = "flex";
        brContent.style.flexDirection = "column";
        brContent.style.alignItems = "center";
        brContent.style.justifyContent = "center";
        brContent.style.background = "var(--bg-transparent)";
        brContent.style.zIndex = "200";

        brContent.style.border = "none";
        brContent.style.padding = "0";

        brContent.querySelectorAll(":scope > div").forEach((row) => {
          row.style.gap = "1.5rem";
        });

        trBtn.style.zIndex = "100";
        tlBtn.style.zIndex = "100";
        blBtn.style.zIndex = "100";
        brBtn.style.zIndex = "300";
      } else if (window.innerWidth <= 1100) {
        brActive = "translateX(0) translateY(0)";
        brContent.style.transform = "translateX(0vw) translateY(0)";
        brContent.style.width = "100vw";
        brContent.style.height = "100vh";
        brContent.style.bottom = "0";
        brContent.style.display = "flex";
        brContent.style.flexDirection = "column";
        brContent.style.alignItems = "center";
        brContent.style.justifyContent = "center";
        brContent.style.background = "var(--bg-transparent)";
        brContent.style.zIndex = "200";

        brContent.style.border = "none";
        brContent.style.padding = "2.5rem";
        brContent.querySelectorAll(":scope > div").forEach((row) => {
          row.style.gap = "1.2rem";
        });

        trBtn.style.zIndex = "100";
        tlBtn.style.zIndex = "100";
        blBtn.style.zIndex = "100";
        brBtn.style.zIndex = "300";
      } else {
        brActive = "translateX(-5vw) translateY(0)";
        brContent.style.transform = "translateX(-5vw) translateY(0)";
        brContent.style.bottom = "15vh";
        brContent.style.display = "block";

        brContent.style.border = "var(--border-1)";
        brContent.style.padding = "2.5rem";
        brContent.querySelectorAll(":scope > div").forEach((row) => {
          row.style.gap = "1.2rem";
        });
      }
      break;
  }
}

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
    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";

    // Setting activeCorner
    activeCorner = "top-left";
    tlBtn.innerHTML = "&uarr;<br/>About";

    handleWindowResize();
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
    tlBtn.innerHTML = "About";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";

    //Setting activeCorner
    activeCorner = "top-right";
    trBtn.innerHTML = "&uarr;<br/>Experience";

    handleWindowResize();
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

blBtn.onclick = function () {
  if (activeCorner === "bottom-left") {
    playClosingAnimation("reverse-animate-bottom-left");
  } else {
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    brBtn.innerHTML = "Contact";

    // Setting activeCorner
    activeCorner = "bottom-left";
    blBtn.innerHTML = "Projects<br/>&darr;";

    handleWindowResize();
    playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

    // Change background colors
    trBtn.style.background = bgColor;
    brBtn.style.background = bgColor;
    blBtn.style.background = bgColorAlt;
    tlBtn.style.background = bgColor;

    // Change text colors
    trBtn.style.color = textColor;
    brBtn.style.color = textColor;
    blBtn.style.color = textColorAlt;
    tlBtn.style.color = textColor;

    // Change positions of the corner content
    trContent.style.transform = trHidden;
    brContent.style.transform = brHidden;
    blContent.style.transform = blActive;
    tlContent.style.transform = tlHidden;
  }
};

brBtn.onclick = function () {
  if (activeCorner === "bottom-right") {
    playClosingAnimation("reverse-animate-bottom-right");
  } else {
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";

    // Setting activeCorner
    activeCorner = "bottom-right";
    brBtn.innerHTML = "Contact<br/>&darr;";

    handleWindowResize();
    playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

    // Change background colors
    trBtn.style.background = bgColor;
    brBtn.style.background = bgColorAlt;
    blBtn.style.background = bgColor;
    tlBtn.style.background = bgColor;

    // Change text colors
    trBtn.style.color = textColor;
    brBtn.style.color = textColorAlt;
    blBtn.style.color = textColor;
    tlBtn.style.color = textColor;

    // Change positions of the corner content
    trContent.style.transform = trHidden;
    brContent.style.transform = brActive;
    blContent.style.transform = blHidden;
    tlContent.style.transform = tlHidden;
  }
};
