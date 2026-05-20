const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const buildSrc = (colorFolder, fileName) =>
  `/src/lamborghini/temerario/${colorFolder}/${encodeURIComponent(fileName)}`;

const imagesByColor = {
  jaune: [
    buildSrc("jaune", "temerario jaune 1.png"),
    buildSrc("jaune", "temerario jaune 2.png"),
    buildSrc("jaune", "temerario jaune 3.png"),
    buildSrc("jaune", "temerario jaune 4.png"),
    buildSrc("jaune", "temerario jaune 5.png"),
    buildSrc("jaune", "temerario jaune 6.png"),
    buildSrc("jaune", "temerario jaune 7.png")
  ],
  noire: [
    buildSrc("noire", "temerario noire 1.png"),
    buildSrc("noire", "temerario noire 2.png"),
    buildSrc("noire", "temerario noire 3.png"),
    buildSrc("noire", "temerario noire 4.png"),
    buildSrc("noire", "temerario noire 5.png"),
    buildSrc("noire", "temerario noire 6.png"),
    buildSrc("noire", "temerario noire 7.png")
  ],
  violette: [
    buildSrc("violette", "temerario violette 1.png"),
    buildSrc("violette", "temerario violette 2.png"),
    buildSrc("violette", "temerario violette 3.png"),
    buildSrc("violette", "temerario violette 4.png"),
    buildSrc("violette", "temerario violette 5.png"),
    buildSrc("violette", "temerario violette 6.png"),
    buildSrc("violette", "temerario violette 7.png")
  ]
};

let currentColor = "jaune";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `Lamborghini Temerario ${currentColor}`;
  vehicleCaption.textContent = `Lamborghini Temerario - coloris ${currentColor} - photo ${currentIndex + 1}/7`;

  colorDots.forEach((dot) => {
    dot.classList.toggle("is-active", dot.dataset.color === currentColor);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 7) % 7;
  updateView();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 7;
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