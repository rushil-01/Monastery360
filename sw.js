const CACHE_NAME = 'monastery360-v2';
const STATIC_ASSETS = [
  './',
  'index.html',
  'calendar.html',
  'tours.html',
  'gallery.html',
  'stay.html',
  'login.html',
  'profile.html',
  'css/globals.css',
  'css/shared.css',
  'css/home.css',
  'css/calendar.css',
  'css/pages.css',
  'js/data.js',
  'js/app.js',
  'js/auth.js',
  'js/pano_b64.js',
  'manifest.json'
];

const CDN_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css',
  'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js',
];

// Install: cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache static assets (fail silently for missing ones)
      return Promise.allSettled(
        [...STATIC_ASSETS, ...CDN_ASSETS].map(url =>
          cache.add(url).catch(err => console.warn('Cache skip:', url, err.message))
        )
      );
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for static, network-first for dynamic and images
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip Supabase API calls
  if (url.hostname.includes('supabase')) return;

  // Images: Network-first with cache fallback so new/custom photos show immediately
  if (url.pathname.includes('/images/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  
  // Cache-first for core static scripts/styles and CDNs
  if (STATIC_ASSETS.some(a => url.pathname.endsWith(a.replace('./', ''))) ||
      CDN_ASSETS.some(a => event.request.url.startsWith(a.split('?')[0]))) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => {
          // Return offline fallback for HTML navigation requests
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('index.html') || caches.match('./index.html') || caches.match('./');
          }
        });
      })
    );
    return;
  }
  
  // Network-first for everything else
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
