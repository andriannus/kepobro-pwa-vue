import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/standings'
  },
  {
    path: '/standings',
    name: 'Standings',
    component: () => import(/* webpackChunkName: "standings" */ '@/pages/standings/Standings.vue')
  },
  {
    path: '/competition',
    name: 'Competition',
    component: () => import(/* webpackChunkName: "competition" */ '@/pages/competition/Competition.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '@/pages/team/Team.vue')
  },
  {
    path: '/liked-team',
    name: 'LikedTeam',
    component: () => import(/* webpackChunkName: "liked-team" */ '@/pages/liked-team/LikedTeam.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found" */ '@/pages/not-found/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
