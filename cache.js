const CacheName = 'v1';

const cacheAssets = [
'index.html'	
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
