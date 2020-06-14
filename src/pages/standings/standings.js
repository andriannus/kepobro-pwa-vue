import AppPreloader from '@/shared/components/AppPreloader.vue'
import { $axios } from '@/shared/services/axios.service'

export default {
  metaInfo: {
    title: 'Klasemen'
  },

  components: {
    'app-preloader': AppPreloader
  },

  data () {
    return {
      isLoading: false,
      standings: []
    }
  },

  mounted () {
    this.fetchStandings()
  },

  methods: {
    async fetchStandings () {
      this.isLoading = true

      try {
        const { data } = await $axios.get('competitions/PL/standings')
        const [summary] = data.standings

        this.standings = summary.table
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  }
}
