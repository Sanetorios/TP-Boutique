const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const imagesByColor = {
  grise: [
    "./assets/120d/grise/1.webp",
    "./assets/120d/grise/2.webp",
    "./assets/120d/grise/3.webp",
    "./assets/120d/grise/4.webp",
    "./assets/120d/grise/5.webp"
  ],
  noire: [
    "./assets/120d/noire/1.webp",
    "./assets/120d/noire/2.webp",
    "./assets/120d/noire/3.webp",
    "./assets/120d/noire/4.webp",
    "./assets/120d/noire/5.webp"
  ],
  blanche: [
    "./assets/120d/blanche/1.webp",
    "./assets/120d/blanche/2.webp",
    "./assets/120d/blanche/3.webp",
    "./assets/120d/blanche/4.webp",
    "./assets/120d/blanche/5.webp"
  ]
};

let currentColor = "grise";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `BMW 120d ${currentColor}`;
  vehicleCaption.textContent = `BMW 120d - coloris ${currentColor} - photo ${currentIndex + 1}/5`;

  colorDots.forEach((dot) => {
    dot.classList.toggle("is-active", dot.dataset.color === currentColor);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 5) % 5;
  updateView();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 5;
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
