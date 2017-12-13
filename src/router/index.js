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
import AreaTicketDetail from '@/views/AreaTicketDetail'
import StoreMaintenanceDetail from '@/views/StoreMaintenanceDetail'
import DeviceDetail from '@/views/DeviceDetail'
import MaintenanceDetail from '@/views/MaintenanceDetail'
import InspectionOrders from '@/views/InspectionOrders'
import RepairOrders from '@/views/RepairOrders'
import InspectionStepOne from '@/views/InspectionStepOne'
import InspectionStepTwo from '@/views/InspectionStepTwo'
import InspectionStepThree from '@/views/InspectionStepThree'
import InspectionStepFour from '@/views/InspectionStepFour'
import InspectionSubmit from '@/views/InspectionSubmit'
import MaintenanceApplication from '@/views/MaintenanceApplication'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
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
      path: '/taskList/:type',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/scanQRcode',
      name: 'ScanQRcode',
      component: ScanQRcode
    },
    {
      path: '/areaTicketDetail/:type',
      name: 'AreaTicketDetail',
      component: AreaTicketDetail
    },
    {
      path: '/storeMaintenanceDetail',
      name: 'StoreMaintenanceDetail',
      component: StoreMaintenanceDetail
    },
    {
      path: '/deviceDetail',
      name: 'DeviceDetail',
      component: DeviceDetail
    },
    {
      path: '/maintenanceDetail',
      name: 'MaintenanceDetail',
      component: MaintenanceDetail
    },
    {
      path: '/inspectionOrders',
      name: 'InspectionOrders',
      component: InspectionOrders
    },
    {
      path: '/repairOrders',
      name: 'RepairOrders',
      component: RepairOrders
    },
    {
      path: '/inspectionStepOne',
      name: 'InspectionStepOne',
      component: InspectionStepOne
    },
    {
      path: '/inspectionStepTwo',
      name: 'InspectionStepTwo',
      component: InspectionStepTwo
    },
    {
      path: '/inspectionStepThree',
      name: 'InspectionStepThree',
      component: InspectionStepThree
    },
    {
      path: '/inspectionStepFour',
      name: 'InspectionStepFour',
      component: InspectionStepFour
    },
    {
      path: '/inspectionSubmit',
      name: 'InspectionSubmit',
      component: InspectionSubmit
    },
    {
      path: '/maintenanceApplication',
      name: 'MaintenanceApplication',
      component: MaintenanceApplication
    }
  ]
})

export default router
