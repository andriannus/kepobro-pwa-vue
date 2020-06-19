/* eslint-disable no-undef */

const ICON_URLS = [
  '/img/icons/android-chrome-192x192.png',
  '/img/icons/android-chrome-512x512.png',
  '/img/icons/android-chrome-maskable-192x192.png',
  '/img/icons/android-chrome-maskable-512x512.png',
  '/img/icons/apple-touch-icon.png',
  '/img/icons/apple-touch-icon-57x57.png',
  '/img/icons/apple-touch-icon-60x60.png',
  '/img/icons/apple-touch-icon-72x72.png',
  '/img/icons/apple-touch-icon-76x76.png',
  '/img/icons/apple-touch-icon-114x114.png',
  '/img/icons/apple-touch-icon-120x120.png',
  '/img/icons/apple-touch-icon-144x144.png',
  '/img/icons/apple-touch-icon-152x152.png',
  '/img/icons/apple-touch-icon-180x180.png',
  '/img/icons/favicon-16x16.png',
  '/img/icons/favicon-32x32.png',
  '/img/icons/msapplication-icon-144x144.png',
  '/img/icons/mstile-150x150.png',
  '/img/icons/safari-pinned-tab.svg'
]

workbox.core.setCacheNameDetails({ prefix: 'kepobro-news-vue' })

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.__precacheManifest = ICON_URLS.concat(self.__precacheManifest || [])
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
