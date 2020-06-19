import AppError from '@/shared/components/AppError.vue'
import AppPreloader from '@/shared/components/AppPreloader.vue'
import { $axios } from '@/shared/services/axios.service'

export default {
  metaInfo: {
    title: 'Klasemen'
  },

  components: {
    AppError,
    AppPreloader
  },

  data () {
    return {
      isError: false,
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
      this.isError = false

      try {
        const { data } = await $axios.get('competitions/PL/standings')
        const [summary] = data.standings

        this.standings = summary.table
        this.isError = false
      } catch {
        this.standings = []
        this.isError = true
      } finally {
        this.isLoading = false
      }
    }
  }
}
