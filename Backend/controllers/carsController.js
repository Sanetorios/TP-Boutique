// Contrôleur backend pour les données de voitures.
// Ce fichier contient la logique des endpoints API.
const cars = require("../data/carsData");
const stockManager = require("../data/stockManager");

function sendJson(res, statusCode, payload) {
  // Envoie une réponse JSON au client.
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function toSummary(car) {
  return {
    id: car.id,
    name: car.name,
    brand: car.brand,
    model: car.model,
    pagePath: car.pagePath,
    cardImage: car.cardImage,
    priceFrom: car.priceFrom,
    stock: stockManager.getStock(car.id)
  };
}

function getCars(req, res, url) {
  // Récupère la liste des voitures.
  // Si featured=true dans l'URL, on ne renvoie que les voitures en vedette.
  const featuredOnly = url.searchParams.get("featured") === "true";
  const selectedCars = featuredOnly ? cars.filter((car) => car.featured) : cars;
  sendJson(res, 200, selectedCars.map(toSummary));
}

function getCarById(req, res, id) {
  // Renvoie les détails d'une voiture à partir de son identifiant.
  const car = cars.find((item) => item.id === id);
  if (!car) {
    sendJson(res, 404, { error: "Car not found" });
    return;
  }
  const carWithStock = { ...car, stock: stockManager.getStock(car.id) };
  sendJson(res, 200, carWithStock);
}

function buyCar(req, res, carId) {
  // Tente d'acheter une voiture et de diminuer le stock.
  const car = cars.find((item) => item.id === carId);
  if (!car) {
    sendJson(res, 404, { error: "Car not found" });
    return;
  }

  if (!stockManager.decreaseStock(carId)) {
    sendJson(res, 400, { error: "Stock not available" });
    return;
  }

  sendJson(res, 200, {
    success: true,
    message: "Purchase successful",
    carId: carId,
    carName: car.name,
    remainingStock: stockManager.getStock(carId)
  });
}

module.exports = {
  getCars,
  getCarById,
  buyCar
};
