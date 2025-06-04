// sw.js
self.addEventListener('install', (e) => {
  console.log('Service Worker نصب شد.');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker فعال شد.');
});

self.addEventListener('push', (e) => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
  });
});
