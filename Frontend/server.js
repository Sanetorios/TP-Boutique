const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const frontendRoot = path.join(__dirname);
const port = process.env.PORT || 3001;

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
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let requestPath = parsedUrl.pathname || '/';
  requestPath = decodeURIComponent(requestPath);

  if (requestPath === '/' || requestPath === '') {
    requestPath = '/HomePage/HomePage.html';
  }

  const relativePath = requestPath.replace(/^\/+/, '');
  const filePath = path.resolve(frontendRoot, relativePath);
  const safeRoot = path.resolve(frontendRoot);

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
  console.log(`Frontend server running at http://localhost:${port}`);
});
