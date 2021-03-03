import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/Index'
import Login from '@/views/login/Index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
