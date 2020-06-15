<template>
  <div>
    <app-navbar></app-navbar>

    <div class="container">
      <div class="row">
        <div class="col s3 hide-on-med-and-down">
          <app-sidenav></app-sidenav>
        </div>

        <div class="col s12 l9">
          <app-offline v-if="isOffline"></app-offline>

          <router-view v-else></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppNavbar from '@/shared/components/AppNavbar.vue'
import AppSidenav from '@/shared/components/AppSidenav.vue'
import AppOffline from '@/shared/components/AppOffline.vue'
import { MUTATION } from '@/shared/constants/types.constant'

export default {
  metaInfo: {
    title: 'Welcome',
    titleTemplate: '%s - KB News'
  },

  components: {
    'app-navbar': AppNavbar,
    'app-sidenav': AppSidenav,
    'app-offline': AppOffline
  },

  computed: mapState(['isOffline']),

  created () {
    this.handleConnection()
  },

  methods: {
    handleConnection () {
      window.addEventListener('online', () => {
        this.$store.commit(MUTATION.SetIsOffline, false)
      })

      window.addEventListener('offline', () => {
        this.$store.commit(MUTATION.SetIsOffline, true)
      })
    }
  }
}
</script>
