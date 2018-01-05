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
import PartLibrary from '@/views/PartLibrary'
import MyCount from '@/views/MyCount'
import MainApplicationSuccess from '@/views/MainApplicationSuccess'
import RepairDetail from '@/views/RepairDetail'
import RepairRecord from '@/views/RepairRecord'
import RepairOrderDetail from '@/views/RepairOrderDetail'
import EnergyTotal from '@/views/EnergyTotal'
import AlarmOverview from '@/views/AlarmOverview'
import OrdersList from '@/views/OrdersList'

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
      path: '/maintenanceApplication/edit',
      name: 'MaintenanceApplication',
      component: MaintenanceApplication
    },
    {
      path: '/maintenanceApplication',
      name: 'MaintenanceApplication',
      component: MaintenanceApplication
    },
    {
      path: '/mainApplicationSuccess',
      name: 'MainApplicationSuccess',
      component: MainApplicationSuccess
    },
    {
      path: '/partLibrary',
      name: 'PartLibrary',
      component: PartLibrary
    },
    {
      path: '/myCount',
      name: 'MyCount',
      component: MyCount
    },
    {
      path: '/repairDetail',
      name: 'RepairDetail',
      component: RepairDetail
    },
    {
      path: '/repairRecord',
      name: 'RepairRecord',
      component: RepairRecord
    },
    {
      path: '/repairOrderDetail',
      name: 'RepairOrderDetail',
      component: RepairOrderDetail
    },
    {
      path: '/energyTotal',
      name: 'EnergyTotal',
      component: EnergyTotal
    },
    {
      path: '/alarmOverview',
      name: 'AlarmOverview',
      component: AlarmOverview
    },
    {
      path: '/ordersList',
      name: 'OrdersList',
      component: OrdersList
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {x: 0, y: 0}
  }
})

export default router
