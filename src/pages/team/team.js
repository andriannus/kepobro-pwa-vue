import AppError from '@/shared/components/AppError.vue'
import AppModal from '@/shared/components/AppModal.vue'
import AppPreloader from '@/shared/components/AppPreloader.vue'
import { $axios } from '@/shared/services/axios.service'
import { deleteTeam, getTeam, saveTeam } from '@/shared/services/db.service'
import { toggleToast } from '@/shared/services/toast.service'
import offlineImage from '@/assets/images/offline.png'

export default {
  metaInfo: {
    title: 'Daftar Tim'
  },

  components: {
    AppError,
    AppModal,
    AppPreloader
  },

  data () {
    return {
      isAlreadyLiked: false,
      isError: false,
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
      this.isError = false

      try {
        const { data } = await $axios.get('competitions/2021/teams')

        this.teams = data.teams
        this.isError = false
      } catch {
        this.teams = []
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },

    showTeam (team) {
      this.selectedTeam = team

      this.setAlreadySaved(team.id)
      this.$refs.modal.open()
    },

    async likeTeam () {
      try {
        await saveTeam(this.selectedTeam)
        this.setAlreadySaved(this.selectedTeam.id)

        toggleToast({
          html: 'Ditambahkan ke daftar tim yang disukai.',
          outDuration: 0
        })
      } catch (error) {
        console.log(error)
      }
    },

    async unlikeTeam () {
      const { id } = this.selectedTeam

      try {
        await deleteTeam(id)
        this.setAlreadySaved(id)

        toggleToast({
          html: 'Dihapus dari daftar tim yang disukai.',
          outDuration: 0
        })
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
