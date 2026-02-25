import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distRoot = path.resolve(__dirname, '../dist');
const coursesRoot = path.resolve(__dirname, '../../courses');
const port = Number(process.env.PORT || 7070);

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.md': 'text/markdown; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
};

function safeResolve(root, requestPath) {
  const clean = decodeURIComponent(requestPath.split('?')[0].split('#')[0]);
  const rel = clean.replace(/^\/+/, '');
  const abs = path.resolve(root, rel);
  if (!abs.startsWith(root)) return null;
  return abs;
}

function sendFile(res, filePath) {
  fs.stat(filePath, (err, st) => {
    if (err || !st.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = mime[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const reqPath = req.url || '/';

  if (reqPath === '/' || reqPath === '/index.html') {
    return sendFile(res, path.join(distRoot, 'index.html'));
  }

  if (reqPath.startsWith('/courses/')) {
    const target = safeResolve(coursesRoot, reqPath.replace(/^\/courses\//, ''));
    if (!target) {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Bad path');
      return;
    }
    return sendFile(res, target);
  }

  const distTarget = safeResolve(distRoot, reqPath);
  if (!distTarget) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad path');
    return;
  }

  sendFile(res, distTarget);
});

server.listen(port, () => {
  console.log(`Preview server: http://localhost:${port}`);
  console.log(`Serving app from: ${distRoot}`);
  console.log(`Serving courses from: ${coursesRoot}`);
});
