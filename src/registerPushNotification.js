import { PUBLIC_KEY } from '@/shared/constants/pn.constant'
import { urlBase64ToUint8Array } from '@/shared/utils/transform.util'

if ('Notification' in window) {
  Notification.requestPermission().then((status) => {
    if (status === 'denied') {
      console.log('Notification denied')
      return
    }

    if (status === 'default') {
      console.log('Close dialog without giving permission')
      return
    }

    console.log('Notification granted')
  })
}

if ('PushManager' in window) {
  navigator.serviceWorker.getRegistration().then((registration) => {
    const convertedPublicKey = urlBase64ToUint8Array(PUBLIC_KEY)

    registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: convertedPublicKey
    }).then(() => {
      console.log('Push manager has been subscribed')
    }).catch((error) => {
      console.log('Error during push manager subscription: ', error)
    })
  })
}
