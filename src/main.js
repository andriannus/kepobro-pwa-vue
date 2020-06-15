import Vue from 'vue'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@/main.scss'
import '@/plugins/vue-meta.plugin'
import '@/registerPushNotification'
import '@/registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
