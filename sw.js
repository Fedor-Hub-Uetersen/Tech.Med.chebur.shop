// Простейший сервис-воркер для успешной установки PWA
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Просто пропускаем запросы через сеть
    event.respondWith(fetch(event.request));
});
