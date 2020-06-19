<template>
  <div>
    <app-navbar></app-navbar>

    <div class="container">
      <div class="row">
        <div class="col s3 hide-on-med-and-down">
          <app-sidenav></app-sidenav>
        </div>

        <div class="col s12 l9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppNavbar from '@/shared/components/AppNavbar.vue'
import AppSidenav from '@/shared/components/AppSidenav.vue'
import { showOfflineToast, showOnlineToast } from '@/shared/services/connection.service'

export default {
  metaInfo: {
    title: 'Welcome',
    titleTemplate: '%s - KB News'
  },

  components: {
    AppNavbar,
    AppSidenav
  },

  created () {
    this.handleConnection()
  },

  methods: {
    handleConnection () {
      window.addEventListener('online', () => {
        showOnlineToast()
      })

      window.addEventListener('offline', () => {
        showOfflineToast()
      })
    }
  }
}
</script>
