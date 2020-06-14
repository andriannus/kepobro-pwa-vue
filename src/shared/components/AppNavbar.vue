<template>
  <div>
    <div class="navbar-fixed">
      <nav class="grey darken-4" role="navigation">
        <div class="container">
          <div class="nav-wrapper">
            <router-link class="brand-logo center" to="/">KB News</router-link>

            <ul>
              <li>
                <a class="sidenav-trigger" href="#" data-target="nav-mobile">
                  <i class="material-icons">menu</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <ul id="nav-mobile" class="sidenav" ref="sidenav">
      <li v-for="(menu, index) in menus" :key="'m-' + index">
        <router-link class="waves-effect" :to="menu.to" @click.native="closeSidenav">
          <i class="material-icons">{{ menu.icon }}</i>
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Sidenav } from 'materialize-css/dist/js/materialize'

import { MENUS } from '@/shared/constants/menu.constant'

export default {
  data () {
    return {
      menus: MENUS
    }
  },

  mounted () {
    this.initializeSidenav()
  },

  methods: {
    initializeSidenav () {
      const { sidenav } = this.$refs
      Sidenav.init(sidenav)
    },

    closeSidenav () {
      const { sidenav } = this.$refs
      Sidenav.getInstance(sidenav).close()
    }
  }
}
</script>
