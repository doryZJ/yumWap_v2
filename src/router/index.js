import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import StoreList from '@/views/storeList'
import AreaIndex from '@/views/AreaIndex'

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
      path: '/areaIndex',
      name: 'AreaIndex',
      component: AreaIndex
    },
    {
      path: '/storeList',
      name: 'StoreList',
      component: StoreList
    }
  ]
})

export default router
