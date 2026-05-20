const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const buildSrc = (colorFolder, fileName) =>
  `/src/lamborghini/urus/${colorFolder}/${encodeURIComponent(fileName)}`;

const imagesByColor = {
  blanc: [
    buildSrc("blanc", "urus blanc 1.png"),
    buildSrc("blanc", "urus blanc 2.png"),
    buildSrc("blanc", "urus blanc 3.png"),
    buildSrc("blanc", "urus blanc 4.png"),
    buildSrc("blanc", "urus blanc 5.png")
  ],
  orange: [
    buildSrc("orange", "urus orange 1.png"),
    buildSrc("orange", "urus orange 2.png"),
    buildSrc("orange", "urus orange 3.png"),
    buildSrc("orange", "urus orange 4.png"),
    buildSrc("orange", "urus orange 5.png")
  ]
};

let currentColor = "blanc";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `Lamborghini Urus ${currentColor}`;
  vehicleCaption.textContent = `Lamborghini Urus - coloris ${currentColor} - photo ${currentIndex + 1}/5`;

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