const { getCars, getCarById, buyCar } = require("../controllers/carsController");

function handleCarsRoutes(req, res, url) {
  const { pathname } = url;

  if (req.method === "GET" && pathname === "/api/cars") {
    getCars(req, res, url);
    return true;
  }

  if (req.method === "GET" && pathname.startsWith("/api/cars/")) {
    const id = decodeURIComponent(pathname.replace("/api/cars/", ""));
    getCarById(req, res, id);
    return true;
  }

  if (req.method === "POST" && pathname.startsWith("/api/buy/")) {
    const id = decodeURIComponent(pathname.replace("/api/buy/", ""));
    buyCar(req, res, id);
    return true;
  }

  return false;
}

module.exports = {
  handleCarsRoutes
};
