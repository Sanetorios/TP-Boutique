const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const imagesByColor = {
  bleu: [
    "./assets/m5/bleu/1.webp",
    "./assets/m5/bleu/2.webp",
    "./assets/m5/bleu/3.webp",
    "./assets/m5/bleu/4.webp",
    "./assets/m5/bleu/5.webp"
  ],
  noire: [
    "./assets/m5/noire/1.webp",
    "./assets/m5/noire/2.webp",
    "./assets/m5/noire/3.webp",
    "./assets/m5/noire/4.webp",
    "./assets/m5/noire/5.webp"
  ]
};

let currentColor = "bleu";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `BMW M5 Touring ${currentColor}`;
  vehicleCaption.textContent = `BMW M5 Touring - coloris ${currentColor} - photo ${currentIndex + 1}/5`;

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
