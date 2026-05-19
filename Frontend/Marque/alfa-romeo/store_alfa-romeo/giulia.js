const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const buildSrc = (colorFolder, fileName) =>
  `/src/alfa-romeo/giulia/${colorFolder}/${encodeURIComponent(fileName)}`;

const imagesByColor = {
  blue: [
    buildSrc("blue", "giulia bleue 1.png"),
    buildSrc("blue", "giulia bleue 2.png"),
    buildSrc("blue", "giulia bleue 3.png")
  ],
  noire: [
    buildSrc("noire", "giulia noire 1.png"),
    buildSrc("noire", "giulia noire 2.png"),
    buildSrc("noire", "giulia noire 3.png")
  ],
  rouge: [
    buildSrc("rouge", "giulia rouge 1.png"),
    buildSrc("rouge", "giulia rouge 2.png"),
    buildSrc("rouge", "giulia rouge 3.png")
  ],
  blanche: [
    buildSrc("blanche", "giulia blanche 1.png"),
    buildSrc("blanche", "giulia blanche 2.png"),
    buildSrc("blanche", "giulia blanche 3.png")
  ]
};

let currentColor = "blue";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `Alfa Romeo Giulia ${currentColor}`;
  vehicleCaption.textContent = `Alfa Romeo Giulia - coloris ${currentColor} - photo ${currentIndex + 1}/${images.length}`;

  colorDots.forEach((dot) => {
    dot.classList.toggle("is-active", dot.dataset.color === currentColor);
  });
}

prevBtn.addEventListener("click", () => {
  const images = imagesByColor[currentColor];
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateView();
});

nextBtn.addEventListener("click", () => {
  const images = imagesByColor[currentColor];
  currentIndex = (currentIndex + 1) % images.length;
  updateView();
});

colorDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentColor = dot.dataset.color;
    currentIndex = 0;
    updateView();
  });
});

updateView();
