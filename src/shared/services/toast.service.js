import { toast, Toast } from 'materialize-css/dist/js/materialize'

const toggleToast = (options) => {
  Toast.dismissAll()
  toast(options)
}

export { toggleToast }
