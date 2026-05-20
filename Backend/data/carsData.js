const cars = [
  {
    id: "bmw-120d",
    brand: "BMW",
    model: "120d",
    name: "BMW 120d",
    pagePath: "/Marque/bmw/store_bmw/120d.html",
    cardImage: "/src/bmw/120d/blanche/120d%20blanche%201.webp",
    priceFrom: 46500,
    intro: "Berline compacte diesel, confortable et economique pour tous les jours.",
    specs: [
      "Moteur: 2.0 Diesel",
      "Puissance: 120 kW",
      "Couple: 400 Nm",
      "Boite: Automatique",
      "Couleur: Gris"
    ],
    featured: true
  },
  {
    id: "bmw-m5-touring",
    brand: "BMW",
    model: "M5 Touring",
    name: "BMW M5 Touring",
    pagePath: "/Marque/bmw/store_bmw/m5.html",
    cardImage: "/src/bmw/M5/bleu/M5%20bleu%201.webp",
    priceFrom: 159000,
    intro: "Break sportif hautes performances avec motorisation hybride M.",
    specs: [
      "Moteur: V8 4.4L TwinPower Turbo + moteur electrique",
      "Puissance combinee: 727 ch (535 kW)",
      "Couple maximal: 1 000 Nm",
      "Transmission: xDrive integral + boite automatique 8 rapports",
      "0 a 100 km/h: environ 3.6 s",
      "Carrosserie: M5 Touring (break 5 portes)"
    ],
    featured: true
  },
  {
    id: "alfa-romeo-giulia",
    brand: "Alfa Romeo",
    model: "Giulia",
    name: "Alfa Romeo Giulia",
    pagePath: "/Marque/alfa-romeo/store_alfa-romeo/giulia.html",
    cardImage: "/src/alfa-romeo/giulia/blue/giulia%20bleue%201.png",
    priceFrom: 52900,
    intro: "Berline sportive italienne, elegante et dynamique pour une conduite passion.",
    specs: [
      "Moteur: 2.0 Turbo essence",
      "Puissance: 280 ch",
      "Couple: 400 Nm",
      "Transmission: Automatique 8 rapports",
      "0 a 100 km/h: 5.2 s",
      "Coffre: 480 L"
    ],
    featured: true
  },
  {
    id: "alfa-romeo-tonale",
    brand: "Alfa Romeo",
    model: "Tonale",
    name: "Alfa Romeo Tonale",
    pagePath: "/Marque/alfa-romeo/store_alfa-romeo/tonale.html",
    cardImage: "/src/alfa-romeo/tonale/bleu/tonale%20bleu%201.png",
    priceFrom: 46900,
    intro: "SUV compact premium au style italien, ideal pour la ville et les longs trajets.",
    specs: [
      "Moteur: 1.5 Hybrid ou Plug-in Hybrid Q4",
      "Puissance: jusqu'a 280 ch",
      "Boite: Automatique 7 rapports",
      "Transmission: Traction ou Q4 integral",
      "Ecran central: 10.25 pouces",
      "Coffre: jusqu'a 500 L"
    ],
    featured: true
  },
  {
    id: "audi-a1",
    brand: "Audi",
    model: "A1",
    name: "Audi A1",
    pagePath: "/Marque/audi/store_audi/a1.html",
    cardImage: "/src/audi/a1/grise/a1%20grise%201.png",
    priceFrom: 32900,
    intro: "Citadine premium compacte, agile et ideale pour un usage urbain.",
    specs: [
      "Moteur: 1.5 TFSI essence",
      "Puissance: 150 ch",
      "Boite: S tronic 7 rapports",
      "0 a 100 km/h: 8.0 s",
      "Coffre: 335 L"
    ],
    featured: true
  },
  {
    id: "audi-sq8",
    brand: "Audi",
    model: "SQ8",
    name: "Audi SQ8",
    pagePath: "/Marque/audi/store_audi/sq8.html",
    cardImage: "/src/audi/sq8/blanche/sq8%20blanche%201.png",
    priceFrom: 129500,
    intro: "SUV sportif haut de gamme, puissant et confortable pour tous les trajets.",
    specs: [
      "Moteur: V8 4.0 TFSI",
      "Puissance: 507 ch",
      "Boite: Tiptronic 8 rapports",
      "Transmission: Quattro integral",
      "0 a 100 km/h: 4.1 s"
    ],
    featured: true
  },
  {
    id: "ferrari-812",
    brand: "Ferrari",
    model: "812 Superfast",
    name: "Ferrari 812 Superfast",
    pagePath: "/Marque/ferrari/store_ferrari/812.html",
    cardImage: "/src/ferrari/812/bleu/812%20bleue%201.png",
    priceFrom: 315000,
    intro: "GT supercar italienne, moteur V12 et performances exceptionnelles.",
    specs: [
      "Moteur: V12 6.5 L",
      "Puissance: 789 ch",
      "Couple: 718 Nm",
      "Boite: Automatique 7 rapports F1 DCT",
      "0 a 100 km/h: 2.9 s",
      "Vitesse maximale: 340+ km/h"
    ],
    featured: true
  },
  {
    id: "ferrari-roma",
    brand: "Ferrari",
    model: "Roma",
    name: "Ferrari Roma",
    pagePath: "/Marque/ferrari/store_ferrari/roma.html",
    cardImage: "/src/ferrari/roma/grise/roma%20grise%201.png",
    priceFrom: 220000,
    intro: "Coupé GT élégant, confortable et puissant, parfait pour l'usage quotidien en grand style.",
    specs: [
      "Moteur: V8 3.9 L bi-turbo",
      "Puissance: 620 ch",
      "Couple: 760 Nm",
      "Boite: Automatique 8 rapports",
      "0 a 100 km/h: 3.4 s",
      "Design: Carrosserie aerodynamique et luxe moderne"
    ],
    featured: true
  }
];

module.exports = cars;
