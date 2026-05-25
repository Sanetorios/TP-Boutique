// Serveur HTTP simple pour le projet Boutique de voitures.
// Il gère à la fois l'API backend et la livraison des fichiers statiques.
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Routeur de l'API cars (/api/cars, /api/buy).
const { handleCarsRoutes } = require('./routes/carsRouter');
// Gestion du stock en mémoire pour les achats de voitures.
const stockManager = require('./data/stockManager');

// Dossiers de fichiers statiques.
const frontendRoot = path.join(__dirname, '..', 'Frontend');
const backendSrcRoot = path.join(__dirname, 'src');
const port = process.env.PORT || 3000;

// Initialisation du stock au démarrage du serveur.
stockManager.initializeStock();

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.m3u8': 'application/vnd.apple.mpegurl',
  '.ts': 'video/mp2t'
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let requestPath = parsedUrl.pathname;
  requestPath = decodeURIComponent(requestPath);

  // Si la route correspond à l'API cars, on la gère ici.
  if (handleCarsRoutes(req, res, parsedUrl)) {
    return;
  }

  // Redirection de la racine vers la page d'accueil.
  if (requestPath === '/' || requestPath === '') {
    res.writeHead(302, { Location: '/HomePage/HomePage.html' });
    res.end();
    return;
  }

  // Les fichiers du dossier /src/ sont servis depuis Backend/src.
  // Les autres fichiers statiques sont servis depuis Frontend.
  const isSrcRequest = requestPath.startsWith('/src/');
  const baseRoot = isSrcRequest ? backendSrcRoot : frontendRoot;
  const relativePath = isSrcRequest
    ? requestPath.slice('/src/'.length)
    : requestPath.replace(/^\/+/,'');

  const filePath = path.resolve(baseRoot, relativePath);
  const safeRoot = path.resolve(baseRoot);
  // Protection contre le path traversal.
  if (!filePath.startsWith(safeRoot + path.sep) && filePath !== safeRoot) {
    res.writeHead(400);
    res.end('Bad request');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server error');
      }
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
