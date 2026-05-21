// Gestion simple du stock en mémoire pour les voitures.
// Ce module initialise le stock et permet de le réduire lors d'un achat.
const cars = require("./carsData");

let stock = {};

function initializeStock() {
  // On démarre avec 10 voitures en stock pour chaque modèle.
  cars.forEach((car) => {
    stock[car.id] = 10;
  });
}

function getStock(carId) {
  // Retourne le stock actuel d'une voiture.
  return stock[carId] !== undefined ? stock[carId] : null;
}

function decreaseStock(carId) {
  // Décrémente le stock d'une voiture uniquement si elle est disponible.
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
