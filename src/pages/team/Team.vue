<template>
  <div>
    <app-preloader v-if="isLoading"></app-preloader>

    <app-error v-else-if="isError"></app-error>

    <div v-else class="row">
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
        <button v-if="isAlreadyLiked" disabled class="btn-flat">Liked</button>

        <button v-else class="modal-close waves-effect btn blue" @click="saveTeam()">Like</button>
      </template>
    </app-modal>
  </div>
</template>

<script src="./team.js"></script>
