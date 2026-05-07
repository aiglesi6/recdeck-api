import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import Results from '@/views/Results.vue'
import Bookmarked from '@/views/Bookmarked.vue'
import BookDetail from '@/views/BookDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/search', name: 'Search', component: Search },
  { path: '/results', name: 'Results', component: Results },
  { path: '/bookmarked', name: 'Bookmarked', component: Bookmarked },
  {
    path: '/book/:key',
    name: 'BookDetail',
    component: BookDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router