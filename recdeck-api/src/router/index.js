import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import Results from '@/views/Results.vue'
import Bookmarked from '@/views/Bookmarked.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/search', name: 'Search', component: Search },
  { path: '/results', name: 'Results', component: Results },
  { path: '/bookmarked', name: 'Bookmarked', component: Bookmarked }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router