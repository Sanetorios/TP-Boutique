const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const buildSrc = (colorFolder, fileName) =>
  `/src/mercedes/classe-a/${colorFolder}/${encodeURIComponent(fileName)}`;

const imagesByColor = {
  grise: [
    buildSrc("grise", "classe-a grise 1.png"),
    buildSrc("grise", "classe-a grise 2.png"),
    buildSrc("grise", "classe-a grise 3.png"),
    buildSrc("grise", "classe-a grise 4.png"),
    buildSrc("grise", "classe-a grise 5.png"),
    buildSrc("grise", "classe-a grise 6.png"),
    buildSrc("grise", "classe-a grise 7.png"),
    buildSrc("grise", "classe-a grise 8.png")
  ],
  blanche: [
    buildSrc("blanche", "classe-a blanche 1.png"),
    buildSrc("blanche", "classe-a blanche 2.png"),
    buildSrc("blanche", "classe-a blanche 3.png"),
    buildSrc("blanche", "classe-a blanche 4.png"),
    buildSrc("blanche", "classe-a blanche 5.png"),
    buildSrc("blanche", "classe-a blanche 6.png"),
    buildSrc("blanche", "classe-a blanche 7.png"),
    buildSrc("blanche", "classe-a blanche 8.png")
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