const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const buildSrc = (colorFolder, fileName) =>
  `/src/ferrari/812/${colorFolder}/${encodeURIComponent(fileName)}`;

const imagesByColor = {
  rouge: [
    buildSrc("rouge", "812 rouge 1.webp"),
    buildSrc("rouge", "812 rouge 2.webp"),
    buildSrc("rouge", "812 rouge 3.webp"),
    buildSrc("rouge", "812 rouge 4.webp")
  ],
  bleu: [
    buildSrc("bleu", "812 bleu 1.webp"),
    buildSrc("bleu", "812 bleu 2.webp"),
    buildSrc("bleu", "812 bleu 3.webp"),
    buildSrc("bleu", "812 bleu 4.webp")
  ],
  grise: [
    buildSrc("grise", "812 grise 1.webp"),
    buildSrc("grise", "812 grise 2.webp"),
    buildSrc("grise", "812 grise 3.webp"),
    buildSrc("grise", "812 grise 4.webp")
  ]
};

let currentColor = "rouge";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `Ferrari 812 ${currentColor}`;
  vehicleCaption.textContent = `Ferrari 812 - coloris ${currentColor} - photo ${currentIndex + 1}/${images.length}`;

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
