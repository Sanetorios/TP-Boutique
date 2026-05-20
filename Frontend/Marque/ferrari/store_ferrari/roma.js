const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const buildSrc = (colorFolder, fileName) =>
  `/src/ferrari/roma/${colorFolder}/${encodeURIComponent(fileName)}`;

const imagesByColor = {
  rouge: [
    buildSrc("rouge", "roma rouge 1.png"),
    buildSrc("rouge", "roma rouge 2.png"),
    buildSrc("rouge", "roma rouge 3.png"),
    buildSrc("rouge", "roma rouge 4.png")
  ],
  noire: [
    buildSrc("noire", "roma noire 1.png"),
    buildSrc("noire", "roma noire 2.png"),
    buildSrc("noire", "roma noire 3.png"),
    buildSrc("noire", "roma noire 4.png")
  ],
  grise: [
    buildSrc("grise", "roma grise 1.png"),
    buildSrc("grise", "roma grise 2.png"),
    buildSrc("grise", "roma grise 3.png"),
    buildSrc("grise", "roma grise 4.png")
  ]
};

let currentColor = "rouge";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `Ferrari Roma ${currentColor}`;
  vehicleCaption.textContent = `Ferrari Roma - coloris ${currentColor} - photo ${currentIndex + 1}/${images.length}`;

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
