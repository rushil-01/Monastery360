const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname;
const CUSTOM_IMAGES_DIR = path.join(PUBLIC_DIR, 'images', 'custom');

// Ensure custom images directory exists
if (!fs.existsSync(CUSTOM_IMAGES_DIR)) {
  try {
    fs.mkdirSync(CUSTOM_IMAGES_DIR, { recursive: true });
  } catch (e) {}
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];

/**
 * Sniffs image magic bytes to detect true MIME type
 * Fixes issues where JPEGs are named .png or vice-versa
 */
function detectMimeType(filePath, buffer) {
  if (buffer && buffer.length >= 3) {
    if (buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF) {
      return 'image/jpeg';
    }
  }
  if (buffer && buffer.length >= 8) {
    if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
      return 'image/png';
    }
  }
  if (buffer && buffer.length >= 12) {
    if (buffer[0] === 0x52 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x46 &&
        buffer[8] === 0x57 && buffer[9] === 0x45 && buffer[10] === 0x42 && buffer[11] === 0x50) {
      return 'image/webp';
    }
  }
  if (buffer && buffer.length >= 4) {
    if (buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x38) {
      return 'image/gif';
    }
  }

  // Detect SVG files even if named .png or .jpg
  if (buffer && buffer.length >= 5) {
    const head = buffer.slice(0, 100).toString('utf8').trimStart();
    if (head.startsWith('<svg') || head.startsWith('<?xml')) {
      return 'image/svg+xml; charset=utf-8';
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

/**
 * Resolves an image request with priority:
 * 1. images/custom/<exact_filename>
 * 2. images/custom/<basename>.<any_ext> (.jpg, .jpeg, .png, .webp)
 * 3. images/<exact_filename>
 * 4. images/<basename>.<any_ext>
 * 5. Fallback placeholder (images/rumtek.png)
 */
function resolveImageFile(reqPath) {
  const norm = reqPath.replace(/^\/+/, '');
  
  // Only process requests under images/
  if (!norm.startsWith('images/')) return null;

  const fileName = path.basename(norm);
  const baseName = path.parse(fileName).name;

  // 1. Check custom folder for exact match
  const customExact = path.join(CUSTOM_IMAGES_DIR, fileName);
  if (fs.existsSync(customExact) && fs.statSync(customExact).isFile()) {
    return customExact;
  }

  // 2. Check custom folder for any extension match
  for (const ext of IMAGE_EXTENSIONS) {
    const candidate = path.join(CUSTOM_IMAGES_DIR, baseName + ext);
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }

  // 3. Check default images folder for exact match
  const defaultExact = path.join(PUBLIC_DIR, norm);
  if (fs.existsSync(defaultExact) && fs.statSync(defaultExact).isFile()) {
    return defaultExact;
  }

  // 4. Check default images folder for any extension match
  const defaultDir = path.join(PUBLIC_DIR, 'images');
  for (const ext of IMAGE_EXTENSIONS) {
    const candidate = path.join(defaultDir, baseName + ext);
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }

  // 5. Fallback placeholder if file is missing
  const fallback = path.join(PUBLIC_DIR, 'images', 'rumtek.png');
  if (fs.existsSync(fallback)) {
    return fallback;
  }

  return null;
}

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') {
    reqPath = '/index.html';
  }

  // Handle custom image resolution
  if (reqPath.startsWith('/images/')) {
    const resolvedImage = resolveImageFile(reqPath);
    if (resolvedImage) {
      fs.readFile(resolvedImage, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Image read error');
          return;
        }

        const mime = detectMimeType(resolvedImage, data);
        res.writeHead(200, {
          'Content-Type': mime,
          'Cache-Control': 'no-cache',
          'Service-Worker-Allowed': '/',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(data);
      });
      return;
    }
  }

  const filePath = path.join(PUBLIC_DIR, reqPath);

  // Security: prevent path traversal outside root
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Error');
        return;
      }

      const mime = detectMimeType(filePath, data);
      res.writeHead(200, {
        'Content-Type': mime,
        'Service-Worker-Allowed': '/',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(data);
    });
  });
});

let currentPort = PORT;

function tryListen(port) {
  server.listen(port, '127.0.0.1');
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${currentPort} is in use, trying port ${currentPort + 1}...`);
    currentPort++;
    setTimeout(() => tryListen(currentPort), 200);
  } else {
    console.error('Server error:', err);
  }
});

server.on('listening', () => {
  console.log(`\n============================================================`);
  console.log(`  ☸ Monastery360 Local Development Server`);
  console.log(`  ➜ Local:   http://localhost:${currentPort}/`);
  console.log(`  ➜ Storage: Browser localStorage (Fully Client-Side)`);
  console.log(`  ➜ Custom:  c:\\Users\\home\\Desktop\\Monastery360\\images\\custom\\`);
  console.log(`============================================================\n`);
});

server.listen(currentPort, '127.0.0.1');
