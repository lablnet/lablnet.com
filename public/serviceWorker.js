// serviceWorker.js
const CACHE_NAME = 'astro-dynamic-cache-v1';

// Install service worker and pre-cache any essential static files if necessary
self.addEventListener('install', event => {
  // Perform install steps, if any
  // For instance, caching static assets that are known and won't change
});

// Fetch and cache requests dynamically
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if found
        if (response) {
          return response;
        }
        return fetch(event.request).then(networkResponse => {
          // Check if we received a valid response
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // To cache new requests cumulatively
          var responseToCache = networkResponse.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return networkResponse;
        });
      })
  );
});

// Update service worker and clean old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // If this cache name isn't present in the whitelist, delete it
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
