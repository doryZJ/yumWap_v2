<template>
  <div class="overview-view">
    <div class="title">
      <span>总览</span>
      <div class="create">
        <i class="el-icon-bell"></i>
        <span class="prompt">3</span>
        <!-- <img src="../assets/images/Add@2x.png" alt=""> -->
      </div>
    </div>
    <work-order></work-order>
    <alarm-list></alarm-list>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>

<script>
    import YFooter from '@/components/Footer'
    import WorkOrder from '@/components/WorkOrder'
    import AlarmList from '@/components/AlarmList'
    export default {
      data () {
        return {
          footerNav: 0
        }
      },
      components: {
        YFooter,
        WorkOrder,
        AlarmList
      }
    }
</script>
<style lang="scss">
  .overview-view {
    width: 100%;
    height: 100%;
    background: #F4F8FB;
    padding-bottom: 0.59rem;

    .title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;

      .create {
        position: absolute;
        right: 15px;
        top: 0.12rem;
        height: 26px;

        i {
          color: #698CA7;
          font-size: 26px;
        }

        .prompt {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #FF8041;
          text-align: center;
          line-height: 15px;
          position: absolute;
          font-size: 10px;
          color: #FFFFFF;
          top: 1px;
          right: -4px;
        }
      }
    }
  }
</style>
