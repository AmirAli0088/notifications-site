// این فایل باید در ریشه سایت قرار گیرد (همان دایرکتوری که فایل HTML قرار دارد)
self.addEventListener('install', event => {
    console.log('Service Worker نصب شد');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker فعال شد');
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({type: 'window'}).then(windowClients => {
            for (let client of windowClients) {
                if (client.url === '/' && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow('/');
            }
        })
    );
});
