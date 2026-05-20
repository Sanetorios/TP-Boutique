const cars = require("../data/carsData");

function sendJson(res, statusCode, payload) {
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
    priceFrom: car.priceFrom
  };
}

function getCars(req, res, url) {
  const featuredOnly = url.searchParams.get("featured") === "true";
  const selectedCars = featuredOnly ? cars.filter((car) => car.featured) : cars;
  sendJson(res, 200, selectedCars.map(toSummary));
}

function getCarById(req, res, id) {
  const car = cars.find((item) => item.id === id);
  if (!car) {
    sendJson(res, 404, { error: "Car not found" });
    return;
  }
  sendJson(res, 200, car);
}

module.exports = {
  getCars,
  getCarById
};
