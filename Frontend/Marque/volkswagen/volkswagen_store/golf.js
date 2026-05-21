const carImage = document.getElementById("carImage");
const vehicleCaption = document.getElementById("vehicleCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorDots = document.querySelectorAll(".color-dot");

const buildSrc = (colorFolder, fileName) =>
  `/src/volkswagen/golf/${colorFolder}/${encodeURIComponent(fileName)}`;

const imagesByColor = {
  blanche: [
    buildSrc("blanche", "Golf blanche 1.png"),
    buildSrc("blanche", "Golf blanche 2.png"),
    buildSrc("blanche", "Golf blanche 3.png"),
  
  ],

  noire: [
    buildSrc("noire", "Golf noire 1.png"),
    buildSrc("noire", "Golf noire 2.png"),
    buildSrc("noire", "Golf noire 3.png"),

  ],
    bleu: [
      buildSrc("bleu", "Golf bleu 1.png"),
      buildSrc("bleu", "Golf bleu 2.png"),
      buildSrc("bleu", "Golf bleu 3.png"),
    ],
    rouge: [
      buildSrc("rouge", "Golf rouge 1.png"),
      buildSrc("rouge", "Golf rouge 2.png"),
      buildSrc("rouge", "Golf rouge 3.png"),
    ]

};

let currentColor = "blanche";
let currentIndex = 0;

function updateView() {
  const images = imagesByColor[currentColor];
  carImage.src = images[currentIndex];
  carImage.alt = `Golf ${currentColor}`;
  vehicleCaption.textContent = `Golf - coloris ${currentColor} - photo ${currentIndex + 1}/3`;

  colorDots.forEach((dot) => {
    dot.classList.toggle("is-active", dot.dataset.color === currentColor);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 3) % 3;
  updateView();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 3;
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