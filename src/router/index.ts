import Board from '@/views/BoardView.vue'
import Home from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/board', name: 'board', component: Board },
  ],
})

export default router
