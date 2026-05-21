// Ce script est en réalité un script front-end pour gérer l'achat sur la page voiture.
// Il se trouve dans Backend/data, mais il agit côté client dans le navigateur.
(() => {
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

  function updateStock(newStock) {
    const stockCountEl = document.getElementById("stockCount");
    const buyBtn = document.getElementById("buyBtn");
    const stockDisplay = document.getElementById("stockDisplay");
    
    if (stockCountEl) {
      stockCountEl.textContent = newStock;
    }
    
    if (buyBtn) {
      if (newStock <= 0) {
        buyBtn.disabled = true;
        buyBtn.textContent = "Rupture de stock";
        buyBtn.style.opacity = "0.5";
        buyBtn.style.cursor = "not-allowed";
      } else {
        buyBtn.disabled = false;
        buyBtn.textContent = "Acheter";
        buyBtn.style.opacity = "1";
        buyBtn.style.cursor = "pointer";
      }
    }
  }

  function loadStock() {
    if (!carId) return;
    
    fetch(`/api/cars/${carId}`)
      .then(res => res.json())
      .then(car => {
        if (car && car.stock !== undefined) {
          updateStock(car.stock);
        }
      })
      .catch(err => console.warn("Stock loading error:", err));
  }

  function handleBuy() {
    if (!carId) {
      alert("Erreur: voiture non identifiée");
      return;
    }

    fetch(`/api/buy/${carId}`, { method: "POST" })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          updateStock(data.remainingStock);
          alert(`Achat confirmé!\n${data.carName}\nStock restant: ${data.remainingStock}`);
        } else {
          alert("Erreur: " + (data.error || "Achat échoué"));
        }
      })
      .catch(err => {
        alert("Erreur réseau");
        console.error(err);
      });
  }

  document.addEventListener("DOMContentLoaded", function() {
    loadStock();
    
    const buyBtn = document.getElementById("buyBtn");
    if (buyBtn) {
      buyBtn.addEventListener("click", handleBuy);
    }
  });
})();
