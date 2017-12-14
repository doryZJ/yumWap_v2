<template>
  <div class="area-view">
    <div class="title">
      <span>肯德基洛川点</span>
    </div>
    <repair-apply :pageType="pageType" :list="storeList"></repair-apply>
    <area-info :infoType="infoType"></area-info>
    <overview :overviewType="energyType" :overviewParams="energy" :title="energyTitle"></overview>
    <overview :overviewType="maintenanceType" :overviewParams="maintenance" :title="maintenanceTitle"></overview>
    <overview :overviewType="maintenanceType" :title="videoTitle"></overview>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import YFooter from '@/components/Footer'
  import RepairApply from '@/components/RepairApply'
  import AreaInfo from '@/components/AreaInfo'
  import Overview from '@/components/Overview'
  export default {
    data () {
      return {
        pageType: 1,
        footerNav: 0,
        energyType: 0,
        infoType: 1,
        maintenanceType: 2,
        storeList: [
          {
            name: '设备警告·低',
            value: 1
          },
          {
            name: '设备警告·中',
            value: 1
          },
          {
            name: '设备警告·高',
            value: 2
          }
        ],
        energyTitle: '门店能耗总览',
        energy: {
          item1Name: '今日全店总耗电量',
          item1Num1: '95',
          item1Num2: '150',
          item2Name: '今日全店总用水量',
          item2Num1: '41',
          item2Num2: '70',
          item3Name: '今日全区域节能减排排名',
          item3Num: '53'
        },
        maintenanceTitle: '门店运维总览',
        maintenance: {
          item1Name: '今日待处理设备告警',
          item1Num1: '4',
          item2Name: '今日本店总维修费用',
          item2Num1: '2,000',
          item3Name: '今日全区域优秀运维排名',
          item3Num: '72'
        },
        videoTitle: '视频监控'
      }
    },
    components: {
      RepairApply,
      AreaInfo,
      Overview,
      YFooter
    }
  }
</script>
<style lang="scss">
  .area-view {
    background: #F4F8FB;
    width: 100%;
    min-height: 100%;
    height: auto;
    margin-bottom: 0.59rem;

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
  }
</style>
