const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const buildSrc = (colorFolder, fileName) =>
  `/src/alfa-romeo/tonale/${colorFolder}/${encodeURIComponent(fileName)}`;

const imagesByColor = {
  bleu: [
    buildSrc("bleu", "tonale bleu 1.png"),
    buildSrc("bleu", "tonale bleu 2.png"),
    buildSrc("bleu", "tonale bleu 3.png"),
    buildSrc("bleu", "tonale bleu 4.png")
  ],
  rouge: [
    buildSrc("rouge", "tonale rouge 1.png"),
    buildSrc("rouge", "tonale rouge 2.png"),
    buildSrc("rouge", "tonale rouge 3.png"),
    buildSrc("rouge", "tonale rouge 4.png")
  ],
  vert: [
    buildSrc("vert", "tonale vert 1.png"),
    buildSrc("vert", "tonale vert 2.png"),
    buildSrc("vert", "tonale vert 3.png"),
    buildSrc("vert", "tonale vert 4.png")
  ],
  or: [
    buildSrc("or", "tonale or 1.png"),
    buildSrc("or", "tonale or 2.png"),
    buildSrc("or", "tonale or 3.png"),
    buildSrc("or", "tonale or 4.png")
  ]
};

let currentColor = "bleu";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `Alfa Romeo Tonale ${currentColor}`;
  vehicleCaption.textContent = `Alfa Romeo Tonale - coloris ${currentColor} - photo ${currentIndex + 1}/${images.length}`;

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
