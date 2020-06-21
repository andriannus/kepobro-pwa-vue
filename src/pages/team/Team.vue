<template>
  <div>
    <app-preloader v-if="isLoading"></app-preloader>

    <app-error v-else-if="isError"></app-error>

    <div v-else class="row">
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
        <button v-if="isAlreadyLiked" class="btn-flat red-text" @click="unlikeTeam()">
          <i class="material-icons">favorite</i>
        </button>

        <button v-else class="btn-flat grey-text" @click="likeTeam()">
          <i class="material-icons">favorite</i>
        </button>
      </template>
    </app-modal>
  </div>
</template>

<script src="./team.js"></script>
