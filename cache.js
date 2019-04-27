 //call install event
self.addEventListener('install', e => {
	console.log('Service Worker: Installed');
  });

//call activate event
self.addEventListener('activate', e => {
	console.log('Service Worker: Activated');
	//remove unwanted caches
	
}); 
