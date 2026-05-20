const path = window.location.pathname;
const pathParts = path.split("/").filter(Boolean);
const brand = pathParts[1] || "";
const pageFile = pathParts[pathParts.length - 1] || "";
const model = pageFile.replace(/\.html$/i, "");

const specialIdMap = {
  "/Marque/bmw/store_bmw/m5.html": "bmw-m5-touring"
};

const normalizedPath = path.replace(/\\/g, "/");
const carId = specialIdMap[normalizedPath] || `${brand}-${model}`.toLowerCase();
const apiUrl = `/api/cars/${encodeURIComponent(carId)}`;

function updateSpecs(specListElement, specs) {
  if (!specListElement || !Array.isArray(specs)) {
    return;
  }
  specListElement.innerHTML = specs.map((item) => `<li>${item}</li>`).join("");
}

async function loadCarData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }
    const car = await response.json();

    const title = document.querySelector("main.page h2");
    const intro = document.querySelector("main.page .intro");
    const price = document.querySelector(".vehicle-price");
    const specsList = document.querySelector(".spec-list");

    if (title) title.textContent = car.name || title.textContent;
    if (intro) intro.textContent = car.intro || intro.textContent;
    if (price && typeof car.priceFrom === "number") {
      price.textContent = `Prix: à partir de ${car.priceFrom.toLocaleString("fr-FR")} EUR`;
    }
    updateSpecs(specsList, car.specs);
    if (document.title && car.name) {
      document.title = car.name;
    }
  } catch (error) {
    console.warn("loadCarData: impossible de charger les infos backend", error);
  }
}

document.addEventListener("DOMContentLoaded", loadCarData);
