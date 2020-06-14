<template>
  <div class="collection">
    <router-link
      v-for="(menu, index) in menus"
      :key="'m-' + index"
      :to="menu.to"
      active-class="grey darken-2 white-text"
      class="collection-item black-text"
    >{{ menu.name }}</router-link>
  </div>
</template>

<script>
import { MENUS } from '@/shared/constants/menu.constant'

export default {
  data () {
    return {
      menus: MENUS
    }
  }
}
</script>
