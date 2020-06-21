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
import { toggleToast } from '@/shared/services/toast.service'

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
        toggleToast({
          html: 'You are currently offline.',
          classes: 'red',
          displayLength: 36000,
          outDuration: 0
        })
      })

      window.addEventListener('offline', () => {
        toggleToast({
          html: 'Connected',
          classes: 'green',
          outDuration: 0
        })
      })
    }
  }
}
</script>
