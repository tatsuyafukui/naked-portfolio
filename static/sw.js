// sw.js
if (workbox) {
		workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
		workbox.googleAnalytics.initialize();
		workbox.routing.registerRoute(
				/.js/,
				new workbox.strategies.NetworkFirst(),
		);
		workbox.routing.registerRoute(
				/\.(?:png|gif|jpg|jpeg|svg|ico)$/,
				new workbox.strategies.CacheFirst({
						cacheName: 'images',
						plugins: [
								new workbox.expiration.Plugin({
										maxEntries: 60,
										maxAgeSeconds: 30 * 24 * 60 * 60,
								}),
						],
				}),
		);
} else {
		console.log('failed to load workbox');
}
