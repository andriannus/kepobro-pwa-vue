import Vue from 'vue'
import Vuex from 'vuex'

import { MUTATION } from '@/shared/constants/types.constant'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOffline: false
  },

  mutations: {
    [MUTATION.SetIsOffline] (state, status) {
      state.isOffline = status
    }
  }
})
