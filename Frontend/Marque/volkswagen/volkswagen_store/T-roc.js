const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const buildSrc = (colorFolder, fileName) =>
  `/src/volkswagen/t-roc/${colorFolder}/${encodeURIComponent(fileName)}`;

const imagesByColor = {
  jaune: [
    buildSrc("jaune", "T-Roc jaune 1.png"),
    buildSrc("jaune", "T-Roc jaune 2.png"),
    buildSrc("jaune", "T-Roc jaune 3.png"),
  
  ],

  noire: [
    buildSrc("noire", "T-Roc noire 1.png"),
    buildSrc("noire", "T-Roc noire 2.png"),
    buildSrc("noire", "T-Roc noire 3.png"),

  ],

};

let currentColor = "jaune";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `T-Roc ${currentColor}`;
  vehicleCaption.textContent = `T-Roc - coloris ${currentColor} - photo ${currentIndex + 1}/3`;

  colorDots.forEach((dot) => {
    dot.classList.toggle("is-active", dot.dataset.color === currentColor);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 3) % 3;
  updateView();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 3;
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