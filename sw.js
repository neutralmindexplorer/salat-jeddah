// Jeddah Salat Times — Service Worker
// Caches the app shell for offline use. Prayer times always fetch fresh from API.

const CACHE_NAME = 'jeddah-salat-v1';
const SHELL = [
  '/salat-jeddah/',
  '/salat-jeddah/index.html',
  '/salat-jeddah/benefits-of-salat/',
  '/salat-jeddah/benefits-of-salat/index.html',
  '/salat-jeddah/manifest.json',
  '/salat-jeddah/icons/icon-192.png',
  '/salat-jeddah/icons/icon-512.png',
  '/salat-jeddah/og-preview.png'
];

// Install — cache the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate — remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch — network first for API calls, cache first for shell
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always fetch fresh from AlAdhan API — never cache prayer times
  if (url.hostname === 'api.aladhan.com') {
    event.respondWith(fetch(event.request));
    return;
  }

  // App shell — cache first, fall back to network
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache valid responses for shell assets
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
