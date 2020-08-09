<template>
  <div>
    <app-preloader v-if="isLoading"></app-preloader>

    <app-error v-else-if="isError"></app-error>

    <div v-else-if="matches.length" class="row">
      <div v-for="(match, index) in matches" :key="'m-' + index" class="col s12 l6">
        <div class="card">
          <div class="card content">
            <div class="row valign-wrapper">
              <div class="col s9 u-marginLeft-1 u-paddingRight-1">
                <ul class="collection u-marginTop-1 u-marginBottom-1">
                  <li class="collection-item">
                    <div>
                      {{ match.awayTeam.name }}
                      <span
                        v-if="match.status === matchStatus.Finished"
                        class="secondary-content black-text"
                      >{{ match.score.fullTime.awayTeam }}</span>
                    </div>
                  </li>

                  <li class="collection-item">
                    {{ match.homeTeam.name }}
                    <span
                      v-if="match.status === matchStatus.Finished"
                      class="secondary-content black-text"
                    >{{ match.score.fullTime.homeTeam }}</span>
                  </li>
                </ul>
              </div>

              <div class="col s3 u-marginRight-1 u-paddingLeft-1">
                <div v-if="match.status === matchStatus.Finished" class="center-align">
                  <p class="u-marginAll-0">FT</p>
                  <span class="grey-text">{{ getFinishedDate(match.utcDate) }}</span>
                </div>

                <div v-else class="center-align">
                  <p class="u-marginAll-0">{{ getScheduledDateTime(match.utcDate).scheduledDate }}</p>
                  <span>{{ getScheduledDateTime(match.utcDate).scheduledTime }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="center-align u-marginTop-2">
      <i class="material-icons large">search</i>
      <p>Pertandingan untuk 1 minggu ke depan tidak ditemukan</p>
    </div>
  </div>
</template>

<script src="./competition.js"></script>
