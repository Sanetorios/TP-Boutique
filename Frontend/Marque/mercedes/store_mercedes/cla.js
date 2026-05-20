const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const buildSrc = (colorFolder, fileName) =>
  `/src/mercedes/cla/${colorFolder}/${encodeURIComponent(fileName)}`;

const imagesByColor = {
  grise: [
    buildSrc("grise", "cla grise 1.png"),
    buildSrc("grise", "cla grise 2.png"),
    buildSrc("grise", "cla grise 3.png"),
    buildSrc("grise", "cla grise 4.png"),
    buildSrc("grise", "cla grise 5.png"),
    buildSrc("grise", "cla grise 6.png"),
    buildSrc("grise", "cla grise 7.png"),
    buildSrc("grise", "cla grise 8.png")
  ],
  noire: [
    buildSrc("noire", "cla noire 1.png"),
    buildSrc("noire", "cla noire 2.png"),
    buildSrc("noire", "cla noire 3.png"),
    buildSrc("noire", "cla noire 4.png"),
    buildSrc("noire", "cla noire 5.png"),
    buildSrc("noire", "cla noire 6.png"),
    buildSrc("noire", "cla noire 7.png"),
    buildSrc("noire", "cla noire 8.png")
  ],

};

let currentColor = "grise";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `Mercedes CLA ${currentColor}`;
  vehicleCaption.textContent = `Mercedes CLA - coloris ${currentColor} - photo ${currentIndex + 1}/8`;

  colorDots.forEach((dot) => {
    dot.classList.toggle("is-active", dot.dataset.color === currentColor);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 8) % 8;
  updateView();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 8;
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