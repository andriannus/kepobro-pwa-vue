<template>
  <div>
    <app-preloader v-if="isLoading"></app-preloader>

    <app-error v-else-if="isError"></app-error>

    <div v-else class="card">
      <div class="Table-responsive card-content">
        <table class="striped">
          <thead>
            <tr class="grey-text">
              <th colspan="3">Klub</th>
              <th>M</th>
              <th>M</th>
              <th>S</th>
              <th>K</th>
              <th>GM</th>
              <th>GA</th>
              <th>SG</th>
              <th>Poin</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(standing, index) in standings" :key="'s-' + index">
              <td>{{ index + 1 }}</td>
              <td>
                <img :src="standing.team.crestUrl" :alt="standing.team.name" class="Standings-img" />
              </td>
              <td>{{ standing.team.name }}</td>
              <td>{{ standing.playedGames }}</td>
              <td>{{ standing.won }}</td>
              <td>{{ standing.draw }}</td>
              <td>{{ standing.lost }}</td>
              <td>{{ standing.goalsFor }}</td>
              <td>{{ standing.goalsAgainst }}</td>
              <td>{{ standing.goalDifference }}</td>
              <td>{{ standing.points }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script src="./standings.js"></script>
