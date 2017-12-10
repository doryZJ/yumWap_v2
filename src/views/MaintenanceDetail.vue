<template>
  <div class="maintenanceDetail">
    <div class="title">
      <div class="back"><返回</div>
      <span>肯德基洛川店-日常保养</span>
    </div>
    <ticket-info></ticket-info>
    <div class="btn-wrapper">
      <span class="btn">扫描二维码签到</span>
    </div>
    <maintenance-info :title="fireSystem.title" :params="fireSystem.params"></maintenance-info>
    <maintenance-info :title="kitchenEquipment.title" :params="kitchenEquipment.params"></maintenance-info>
    <maintenance-info :title="otherEquipment.title" :params="otherEquipment.params"></maintenance-info>
    <div class="btn-wrapper">
      <span class="btn">保养完成</span>
    </div>
    <maintenance-footer></maintenance-footer>
  </div>
</template>
<script>
  import TicketInfo from '@/components/TicketInfo'
  import MaintenanceInfo from '@/components/MaintenanceInfo'
  import MaintenanceFooter from '@/components/MaintenanceFooter'
  export default {
    data () {
      return {
        fireSystem: {
          title: '火警系统',
          params: {
            title1: '视觉检查污垢、破损、锈蚀和固定的状态',
            state1: '良好',
            time1: '2017/10/17    16:33:21',
            title2: '检测主机状态包括已存在的安全封条/铅封',
            title3: '核对主机商显示的信息'
          }
        },
        kitchenEquipment: {
          title: '厨房设备',
          params: {
            title1: '视觉检查污垢、破损、锈蚀和固定的状态',
            state1: '良好',
            time1: '2017/10/17    16:33:21',
            title2: '检测主机状态包括已存在的安全封条/铅封',
            title3: '核对主机商显示的信息'
          }
        },
        otherEquipment: {
          title: '其它设备',
          params: {
            title1: '视觉检查污垢、破损、锈蚀和固定的状态',
            state1: '良好',
            time1: '2017/10/17    16:33:21',
            title2: '检测主机状态包括已存在的安全封条/铅封',
            title3: '核对主机商显示的信息'
          }
        }
      }
    },
    components: {
      TicketInfo,
      MaintenanceInfo,
      MaintenanceFooter
    }
  }
</script>
<style lang="scss">
  .maintenanceDetail {
    background: #F4F8FB;
    width: 100%;
    min-height: 100%;
    height: auto;
    margin-bottom: 0.5rem;

    .title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: SourceHanSansCN-Normal;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;

      .back {
        font-family: SourceHanSansCN-Normal;
        font-size: 14px;
        color: #688BA6;
        letter-spacing: 0;
        margin-left: 0.1rem;
        position: absolute;
        left: 0.1rem;
      }
    }

    .btn-wrapper {
      width: 100%;
      padding: 0.6rem 0;
      height: 0.46rem;
      font-size: 0;

      .btn {
        width: 2.56rem;
        height: 100%;
        background: #A8B3C3;
        font-family: SourceHanSansCN-Light;
        font-size: 0.18rem;
        margin: 0 auto;
        color: #FFFFFF;
        letter-spacing: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
