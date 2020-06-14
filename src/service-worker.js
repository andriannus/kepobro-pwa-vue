/* eslint-disable no-undef */

workbox.core.setCacheNameDetails({ prefix: 'kepobro-news-vue' })

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('push', event => {
  let body = 'Push message no payload'

  if (event.data) {
    body = event.data.text()
  }

  const logo = 'img/logo.png'
  const title = 'KepoBro News'
  const options = {
    body,
    icon: logo,
    badge: logo,
    vibrate: [100, 50, 100]
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', (event) => {
  const { notification } = event

  notification.close()
  clients.openWindow('https://news-pwa-vue.andriannus.id')
})
