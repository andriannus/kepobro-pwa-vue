<template>
  <div>
    <app-preloader v-if="isLoading"></app-preloader>

    <div v-else-if="teams.length" class="row">
      <div v-for="(team, index) in teams" :key="'t-' + index" class="col s4 m4 l3">
        <div class="Team card" @click="showTeam(team)">
          <div class="card-content center-align u-paddingAll-3">
            <div class="u-marginBottom-2">
              <img
                :src="team.crestUrl"
                :alt="team.name"
                class="Team-img"
                @error="handleLoadImageError"
              />
            </div>

            <p class="u-isEllipsis">{{ team.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="center-align u-marginTop-2">
      <i class="material-icons large">search</i>
      <p>Kamu belum memiliki tim yang disukai</p>

      <router-link class="btn grey" to="/team">Temukan Tim</router-link>
    </div>

    <app-modal :name="modalName" ref="modal">
      <template #content>
        <div class="center-align">
          <img
            :src="selectedTeam.crestUrl"
            :alt="selectedTeam.name"
            class="Team-img"
            @error="handleLoadImageError"
          />

          <h5>{{ selectedTeam.name }}</h5>
          <p>{{ selectedTeam.venue }}</p>
          <p>{{ selectedTeam.address }}</p>
        </div>
      </template>

      <template #footer>
        <button
          class="modal-close waves-effect btn-flat red-text"
          @click="unlikeTeam(selectedTeam.id)"
        >Unlike</button>
      </template>
    </app-modal>
  </div>
</template>

<script src="./liked-team.js"></script>
