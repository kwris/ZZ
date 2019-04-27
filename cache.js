const CacheName = 'v1';

const cacheAssets = [
'index.html'/*,*/
/*'sw.js',
'cache.js',
'ldg.png',
'her1.jpg',
'bm.jpg',
'HH2013.jpg'*/	
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
