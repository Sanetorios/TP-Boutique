const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const buildSrc = (colorFolder, fileName) =>
  `/src/porsche/911-carrera/${colorFolder}/${encodeURIComponent(fileName)}`;

const imagesByColor = {
  blanche: [
    buildSrc("blanche", "911-carrera blanche 1.png"),
    buildSrc("blanche", "911-carrera blanche 2.png"),
    buildSrc("blanche", "911-carrera blanche 3.png"),
    buildSrc("blanche", "911-carrera blanche 4.png"),
    buildSrc("blanche", "911-carrera blanche 5.png")
  ],

  noire: [
    buildSrc("noire", "911-carrera noire 1.png"),
    buildSrc("noire", "911-carrera noire 2.png"),
    buildSrc("noire", "911-carrera noire 3.png"),
    buildSrc("noire", "911-carrera noire 4.png"),
    buildSrc("noire", "911-carrera noire 5.png")
  ],

};

let currentColor = "blanche";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `Porsche 911 Carrera ${currentColor}`;
  vehicleCaption.textContent = `Porsche 911 Carrera - coloris ${currentColor} - photo ${currentIndex + 1}/5`;

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