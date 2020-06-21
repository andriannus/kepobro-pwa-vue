<template>
  <div>
    <app-preloader v-if="isLoading"></app-preloader>

    <div v-else-if="teams.length" class="row">
      <div v-for="(team, index) in teams" :key="'t-' + index" class="col s4 m4 l3">
        <div class="Team card hoverable" @click="showTeam(team)">
          <div class="card-content center-align u-paddingAll-3">
            <div class="u-marginBottom-2">
              <img
                :src="team.crestUrl"
                :alt="team.name"
                class="Team-img"
                @error="handleLoadImageError"
              />
            </div>

            <p class="truncate">
              <strong>{{ team.name }}</strong>
            </p>
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
        <div>
          <img
            :src="selectedTeam.crestUrl"
            :alt="selectedTeam.name"
            class="Team-img"
            @error="handleLoadImageError"
          />

          <h6>
            <strong>{{ selectedTeam.name }}</strong>
          </h6>
          <p class="grey-text text-darken-1 u-marginBottom-0">
            {{ selectedTeam.venue }}
            <br />
            {{ selectedTeam.address }}
          </p>
        </div>
      </template>

      <template #footer>
        <button
          class="modal-close btn-flat red-text"
          @click="unlikeTeam(selectedTeam.id)"
        >
          <i class="material-icons">favorite</i>
        </button>
      </template>
    </app-modal>
  </div>
</template>

<script src="./liked-team.js"></script>
