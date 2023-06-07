import { createRouter, createWebHistory } from 'vue-router'


import DA_Home from '@/views/DA/Home.vue'
import EN_Home from '@/views/EN/Home.vue'

const routes = [
  {
    path: '/',
    redirect: { path: '/da/home' }
  },

  {
    path: '/da/home',
    component: DA_Home
  },

  {
    path: '/en/home',
    component: EN_Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
