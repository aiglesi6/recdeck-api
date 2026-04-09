import { createRouter, createWebHistory } from 'vue-router'

// Page components
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/search', name: 'Search', component: Search }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router