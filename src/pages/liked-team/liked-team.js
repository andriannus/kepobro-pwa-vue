import AppModal from '@/shared/components/AppModal.vue'
import AppPreloader from '@/shared/components/AppPreloader.vue'
import { deleteTeam, getAllTeam } from '@/shared/services/db.service'
import offlineImage from '@/assets/images/offline.png'

export default {
  metaInfo: {
    title: 'Tim yang Disukai'
  },

  components: {
    AppModal,
    AppPreloader
  },

  data () {
    return {
      isLoading: false,
      modalName: 'Modal-team',
      selectedTeam: {},
      teams: []
    }
  },

  mounted () {
    this.fetchLikedTeams()
  },

  methods: {
    async fetchLikedTeams () {
      this.isLoading = true

      try {
        const result = await getAllTeam()
        this.teams = result
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },

    showTeam (team) {
      this.selectedTeam = team

      this.$refs.modal.open()
    },

    async unlikeTeam (id) {
      try {
        await deleteTeam(id)

        this.fetchLikedTeams()
      } catch (error) {
        console.log(error)
      }
    },

    handleLoadImageError (e) {
      e.target.src = offlineImage
    }
  }
}
