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
    component: Login,
    beforeEnter (to, from, next) {
      localStorage.isLogin ? next({ name: 'Home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  (localStorage.isLogin || to.name === 'Login') ? next() : next({ name: 'Login' })
})

export default router
