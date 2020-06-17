import { PUBLIC_KEY } from '@/shared/constants/pn.constant'
import { urlBase64ToUint8Array } from '@/shared/utils/transform.util'

if ('Notification' in window) {
  Notification.requestPermission().then(status => {
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
  navigator.serviceWorker.getRegistration().then(registration => {
    const convertedPublicKey = urlBase64ToUint8Array(PUBLIC_KEY)

    registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedPublicKey
      })
      .then(subscribe => {
        console.log('Push manager has been subscribed')

        console.log(
          'Successfully subscribed with endpoint: ',
          subscribe.endpoint
        )

        console.log(
          'Successfully subscribed with p256dh key: ',
          btoa(
            String.fromCharCode.apply(
              null,
              new Uint8Array(subscribe.getKey('p256dh'))
            )
          )
        )

        console.log(
          'Successfully subscribed with auth key: ',
          btoa(
            String.fromCharCode.apply(
              null,
              new Uint8Array(subscribe.getKey('auth'))
            )
          )
        )
      })
      .catch(error => {
        console.log('Error during push manager subscription: ', error)
      })
  })
}
