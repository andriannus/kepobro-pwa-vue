/* eslint-disable no-undef */

workbox.core.setCacheNameDetails({ prefix: 'kepobro-news-vue' })

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute('/index.html')
workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  workbox.strategies.staleWhileRevalidate()
)

self.addEventListener('push', event => {
  let body = 'Push message no payload'

  if (event.data) {
    body = event.data.text()
  }

  const title = 'KepoBro News'
  const options = {
    body,
    icon: 'img/notification/icon.png',
    badge: 'img/notification/badge.png',
    vibrate: [100, 50, 100]
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', event => {
  const { notification } = event

  notification.close()
  clients.openWindow('https://news-pwa-vue.andriannus.id')
})
