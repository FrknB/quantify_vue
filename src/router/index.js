import { createRouter, createWebHistory } from 'vue-router'
import app from '@/App.vue'

const routes = [
  {
    path: '/',
    name: 'app',
    component: () => import('../App.vue')
  },
 /*  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  } */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
