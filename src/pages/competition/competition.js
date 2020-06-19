import { format } from 'date-fns'

import AppError from '@/shared/components/AppError.vue'
import AppPreloader from '@/shared/components/AppPreloader.vue'
import { $axios } from '@/shared/services/axios.service'
import { MATCH_STATUS } from '@/shared/constants/types.constant'

export default {
  metaInfo: {
    title: 'Pertandingan'
  },

  components: {
    AppError,
    AppPreloader
  },

  data () {
    return {
      isError: false,
      isLoading: false,
      matches: [],
      matchStatus: MATCH_STATUS
    }
  },

  mounted () {
    this.fetchMatchs()
  },

  methods: {
    async fetchMatchs () {
      const { dateFrom, dateTo } = this.getDateFilters()
      const filters = `dateFrom=${dateFrom}&dateTo=${dateTo}`

      this.isLoading = true
      this.isError = false

      try {
        const { data } = await $axios.get(`competitions/PL/matches?${filters}`)

        this.matches = data.matches
        this.isError = false
      } catch {
        this.matches = []
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },

    getDateFilters () {
      const currentDate = new Date()
      const oneWeekLater = currentDate.getTime() + 7 * 24 * 60 * 60 * 1000
      const formatDate = 'yyyy-MM-dd'

      const dateFrom = format(currentDate, formatDate)
      const dateTo = format(oneWeekLater, formatDate)

      return { dateFrom, dateTo }
    },

    getFinishedDate (date) {
      const validatedDate = new Date(date)

      return format(validatedDate, 'dd/MM/yy')
    },

    getScheduledDateTime (date) {
      const validatedDate = new Date(date)
      const scheduledDate = format(validatedDate, 'ccc, dd/MM')
      const scheduledTime = format(validatedDate, 'HH.mm')

      return { scheduledDate, scheduledTime }
    }
  }
}
