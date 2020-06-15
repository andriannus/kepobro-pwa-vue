import AppModal from '@/shared/components/AppModal.vue'
import AppPreloader from '@/shared/components/AppPreloader.vue'
import { $axios } from '@/shared/services/axios.service'
import { getTeam, saveTeam } from '@/shared/services/db.service'
import offlineImage from '@/assets/images/offline.png'

export default {
  metaInfo: {
    title: 'Daftar Tim'
  },

  components: {
    AppModal,
    AppPreloader
  },

  data () {
    return {
      isAlreadyLiked: false,
      db: null,
      isLoading: false,
      modal: null,
      modalName: 'Modal-team',
      selectedTeam: {},
      teams: []
    }
  },

  mounted () {
    this.fetchTeams()
  },

  methods: {
    async fetchTeams () {
      this.isLoading = true

      try {
        const { data } = await $axios.get('competitions/2021/teams')

        this.teams = data.teams
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },

    showTeam (team) {
      this.selectedTeam = team

      this.setAlreadySaved(team.id)
      this.$refs.modal.open()
    },

    async saveTeam () {
      try {
        await saveTeam(this.selectedTeam)
      } catch (error) {
        console.log(error)
      }
    },

    async setAlreadySaved (id) {
      try {
        const result = await getTeam(id)

        this.isAlreadyLiked = !!result
      } catch (error) {
        console.log(error)
      }
    },

    handleLoadImageError (e) {
      e.target.src = offlineImage
    }
  }
}
