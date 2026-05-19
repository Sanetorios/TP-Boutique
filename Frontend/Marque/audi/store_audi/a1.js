const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const buildSrc = (colorFolder, fileName) =>
  `/src/audi/a1/${colorFolder}/${encodeURIComponent(fileName)}`;

const imagesByColor = {
  grise: [
    buildSrc("grise", "a1 grise 1.png"),
    buildSrc("grise", "a1 grise 2.png"),
    buildSrc("grise", "a1 grise 3.png"),
    buildSrc("grise", "a1 grise 4.png"),
    buildSrc("grise", "a1 grise 5.png")
  ],
  noire: [
    buildSrc("noire", "a1  noire 1.png"),
    buildSrc("noire", "a1 noire 2.png"),
    buildSrc("noire", "a1 noire 3.png"),
    buildSrc("noire", "a1 noire 4.png"),
    buildSrc("noire", "a1 noire 5.png")
  ],
  blanche: [
    buildSrc("blanche", "a1 blanche 1.png"),
    buildSrc("blanche", "a1 blanche 2.png"),
    buildSrc("blanche", "a1 blanche 3.png"),
    buildSrc("blanche", "a1 blanche 4.png"),
    buildSrc("blanche", "a1 blanche 5.png")
  ]
};

let currentColor = "grise";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `Audi A1 ${currentColor}`;
  vehicleCaption.textContent = `Audi A1 - coloris ${currentColor} - photo ${currentIndex + 1}/${images.length}`;

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
