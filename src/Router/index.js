import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home/dashbord.vue';

// Define your routes here
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
