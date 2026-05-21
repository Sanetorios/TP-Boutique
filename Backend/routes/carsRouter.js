// Routeur des endpoints de l'API voiture.
// Il envoie les requêtes vers le contrôleur approprié.
const { getCars, getCarById, buyCar } = require("../controllers/carsController");

function handleCarsRoutes(req, res, url) {
  const { pathname } = url;

  if (req.method === "GET" && pathname === "/api/cars") {
    // Liste des voitures ou voitures en vedette.
    getCars(req, res, url);
    return true;
  }

  if (req.method === "GET" && pathname.startsWith("/api/cars/")) {
    // Détail d'une voiture spécifique.
    const id = decodeURIComponent(pathname.replace("/api/cars/", ""));
    getCarById(req, res, id);
    return true;
  }

  if (req.method === "POST" && pathname.startsWith("/api/buy/")) {
    // Achat d'une voiture via son identifiant.
    const id = decodeURIComponent(pathname.replace("/api/buy/", ""));
    buyCar(req, res, id);
    return true;
  }

  // La route n'appartient pas à l'API cars.
  return false;
}

module.exports = {
  handleCarsRoutes
};
