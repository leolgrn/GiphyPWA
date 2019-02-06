var CACHE_NAME = 'giphypwa-v1';
var urlsToCache = [
    '/index.html',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );    
});

self.addEventListener('online', () => {
    console.log('online event catch');
});

self.addEventListener('offline', () => {
    console.log('offline event catch');
});

// self.addEventListener('fetch', (event) => {
//     console.log('fetch event catch');
// });
