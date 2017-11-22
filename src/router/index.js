import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import StoreList from '@/views/storeList'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/storeList',
      name: 'StoreList',
      component: StoreList
    }
  ]
})

export default router
