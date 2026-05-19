const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const imagesByColor = {
  blanche: [
    "/src/audi/sq8/blanche/sq8%20blanche%201.png",
    "/src/audi/sq8/blanche/sq8%20blanche%202.png",
    "/src/audi/sq8/blanche/sq8%20blanche%203.png",
    "/src/audi/sq8/blanche/sq8%20blanche%204.png",
    "/src/audi/sq8/blanche/sq8%20blanche%205.png"
  ],
  noire: [
    "/src/audi/sq8/noire/sq8%20noire%201.png",
    "/src/audi/sq8/noire/sq8%20noire%202.png",
    "/src/audi/sq8/noire/sq8%20noire%203.png",
    "/src/audi/sq8/noire/sq8%20noire%204.png",
    "/src/audi/sq8/noire/sq8%20noire%205.png"
  ]
};

let currentColor = "blanche";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `Audi SQ8 ${currentColor}`;
  vehicleCaption.textContent = `Audi SQ8 - coloris ${currentColor} - photo ${currentIndex + 1}/${images.length}`;

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
