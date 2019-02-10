const cacheVersion = 'gifffle-v1';

self.addEventListener('install', event => {
    console.log('[sw] Installed');

    event.waitUntil(
        caches.open(cacheVersion).then(cache => {
            return cache.addAll(['./index.html']).then(() => {
                self.skipWaiting();
            });
        })
    );
});

self.addEventListener('activate', event => {
    console.log('[sw] Activated');

    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map((key, i) => {
                    if (key !== cacheVersion) {
                        return caches.delete(keys[i]);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    console.log('[sw] Fetching');

    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                return response;
            }

            return fetch(event.request);
        })
    );
});
