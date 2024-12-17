const CACHE_NAME = "notes-app-v1";
const urlsToCache = [
  "/", // Halaman utama
  "/favicon.ico",
  "/icon-192x192.png", // Tambahkan aset utama seperti logo
  "/icon-512x512.png",
];

// Instalasi Service Worker dan cache aset
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching halaman utama dan aset...");
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercept fetch requests untuk menyediakan halaman utama saat offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        // Jika request cocok dengan cache, tampilkan
        return response || fetch(event.request);
      })
      .catch(() => {
        // Jika gagal, fallback ke halaman utama
        return caches.match("/");
      })
  );
});

// Membersihkan cache lama
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});
