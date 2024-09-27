import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SportsView from '@/views/SportsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sports',
      name: 'sports',
      component: SportsView
    },
    {
      path: '/sports/:name?',
      name: 'sports',
      component: SportsView
    },
    {
      path: '/:catchAll(.*)',
      name: "NotFound",
      component: () => import('../views/NotfoundView.vue')
    }
  ]
})

export default router
