import { toast, Toast } from 'materialize-css/dist/js/materialize'

const showOfflineToast = () => {
  Toast.dismissAll()
  toast({
    html: 'You are currently offline.',
    classes: 'red',
    displayLength: 36000,
    outDuration: 0
  })
}

const showOnlineToast = () => {
  Toast.dismissAll()
  toast({
    html: 'Connected',
    classes: 'green',
    outDuration: 0
  })
}

export { showOfflineToast, showOnlineToast }
