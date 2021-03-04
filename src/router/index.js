import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/Index'
import Login from '@/views/login/Index'
import Order from '@/views/order/Index'
import Register from '@/views/register/Index'

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
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter (to, from, next) {
      localStorage.isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  (localStorage.isLogin || to.name === 'Login' || to.name === 'Register') ? next() : next({ name: 'Login' })
})

export default router
