//register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

//cache
const cacheName = 'v1';

const cacheAssets = [
'HHtribute.html'
];

//call install event
self.addEventListener('install', e => {
	console.log('Service Worker: Installed');
	e.waitUntil(
	caches
	.open(cacheName)
	.then(cache => {
		console.log('Service Worker: Caching Files')
		cache.addAll(cacheAssets);
	})
	.then(() => self.skipWaiting())
	);
});

//call activate event
self.addEventListener('activate', e => {
	console.log('Service Worker: Activated');
	//remove unwanted caches
	
});

