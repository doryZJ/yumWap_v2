<template>
  <div class="area-view">
    <div class="title">
      <span>上海地区</span>
    </div>
    <repair-apply :pageType="pageType" :list="areaList"></repair-apply>
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
        pageType: 0,
        footerNav: 0,
        energyType: 0,
        infoType: 0,
        maintenanceType: 1,
        areaList: [
          {
            name: '常规维修申请',
            value: 14
          },
          {
            name: '较紧急维修申请',
            value: 6
          },
          {
            name: '紧急维修申请',
            value: 4
          }
        ],
        energyTitle: '区域能耗总览',
        energy: {
          item1Name: '今日全区域总耗电量',
          item1Num1: '15,123',
          item1Num2: '25,131',
          item2Name: '今日全区域总用水量',
          item2Num1: '1,631',
          item2Num2: '2,131',
          item3Name: '今日全区域能耗超标店铺',
          item3Num: '3'
        },
        maintenanceTitle: '区域运维总览',
        maintenance: {
          item1Name: '今日全区域已维修店铺',
          item1Num1: '8',
          item1Num2: '17',
          item2Name: '今日全区域总维修费用',
          item2Num1: '1,631',
          item2Num2: '2,131',
          item3Name: '今日待处理运维申请',
          item3Num: '12'
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
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;
      width: 100%;
      text-align: center;
    }
  }
</style>
