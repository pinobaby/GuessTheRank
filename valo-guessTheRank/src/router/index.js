import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/playGuess',
      name: 'playGuess',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/play-guess.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/form-data.vue')
    },
    {
      path: '/chosse-the-rank',
      name: 'chosse-the-rank',
      component: () => import('../views/Chosse-the-rank.vue')
    },
  
  ]
  
})


export default router
