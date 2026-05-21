const cars = require("./carsData");

let stock = {};

function initializeStock() {
  cars.forEach((car) => {
    stock[car.id] = 10;
  });
}

function getStock(carId) {
  return stock[carId] !== undefined ? stock[carId] : null;
}

function decreaseStock(carId) {
  if (stock[carId] !== undefined && stock[carId] > 0) {
    stock[carId] -= 1;
    return true;
  }
  return false;
}

function getAllStock() {
  return stock;
}

module.exports = {
  initializeStock,
  getStock,
  decreaseStock,
  getAllStock
};
