const ELCIIcache = 'v1';

// Call Install Event
self.addEventListener('install', event => {
    console.log('Service Worker: Installed, my lord!');
});

// Activate Event
self.addEventListener('activate', event => {
    console.log('Service Worker: Activated!');
    // Remove deprecated caches
    event.waitUntil(
        caches.keys().then( cacheVersions => {
            cacheVersions.map(cacheV => {
                if (cacheV !== ELCIIcache) {
                    console.log('Service Worker: "Taking Out the Trash, my lord. Old cache versions are taken care of!"');
                    return caches.delete(cacheV);
                }
            })
        }
        )
    )
});

// Call Fetch Event
self.addEventListener('fetch', event => {
    console.log('Service Worker: Fetching, my lord!');
    event.respondWith(
        fetch(event.request)
        .then( response => {
            // Clone the response
            const responseWmustache = response.clone();
            caches
                .open(ELCIIcache)
                .then(cache => {
                    cache.put(event.request, responseWmustache);
                });
            return response;
        })
        .catch(err => caches.match(event.request))
        .then( response => response)
    );
});