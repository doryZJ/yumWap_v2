import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import StoreList from '@/views/storeList'
import AreaIndex from '@/views/AreaIndex'
import StoreIndex from '@/views/StoreIndex'
import StoreIndexManager from '@/views/StoreIndex-Manager'
import DeviceList from '@/views/DeviceList'
import TaskList from '@/views/TaskList'
import ScanQRcode from '@/views/ScanQRcode'

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
      path: '/storeIndex',
      name: 'StoreIndex',
      component: StoreIndex
    },
    {
      path: '/storeIndexManager',
      name: 'StoreIndexManager',
      component: StoreIndexManager
    },
    {
      path: '/storeList',
      name: 'StoreList',
      component: StoreList
    },
    {
      path: '/deviceList',
      name: 'DeviceList',
      component: DeviceList
    },
    {
      path: '/taskList',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/scanQRcode',
      name: 'ScanQRcode',
      component: ScanQRcode
    }
  ]
})

export default router
