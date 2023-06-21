import { createRouter, createWebHistory } from 'vue-router'
import Sunny from '../views/Sunny.vue'
import Moon from '../views/Moon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sun',
      component: Sunny
    },
    {
      path: '/moon',
      name: 'moon',
      component: Moon
    }
  ]
})

export default router
