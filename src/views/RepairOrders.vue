<template>
  <div class="repairOrders">
    <div class="title">
      <span>维修工单</span>
    </div>
    <div class="tab-wrapper">
      <div class="tab" :class='{"active": tabActive === 0}' @click="handleTab(0)">待确认</div>
      <div class="tab" :class='{"active": tabActive === 1}' @click="handleTab(1)">待维修</div>
      <div class="tab" :class='{"active": tabActive === 2}' @click="handleTab(2)">已完成</div>
    </div>
    <inspection-List></inspection-List>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import InspectionList from '@/components/InspectionList'
  import YFooter from '@/components/Footer'
  export default {
    data () {
      return {
        footerNav: 2,
        tabActive: 0
      }
    },
    components: {
      InspectionList,
      YFooter
    },
    methods: {
      handleTab (val) {
        this.tabActive = val
      }
    }
  }
</script>
<style lang="scss">
  .repairOrders {
    width: 100%;
    height: 100%;
    background: #F4F8FB;
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
    }

    .tab-wrapper {
      margin: 0.2rem 16px 0;
      height: 0.3rem;
      border: 1px solid #00BFB3;
      border-radius: 4px;
      box-sizing: border-box;

      &:after {
        content: '';
        clear: both;
      }

      .tab {
        width: 33.33333%;
        font-family: SourceHanSansCN-Medium;
        font-size: 13px;
        color: #00BFB3;
        letter-spacing: -0.08px;
        text-align: center;
        height: 0.3rem;
        line-height: 0.3rem;
        float: left;
      }

      .active {
        background: #00BFB3;
        font-family: SourceHanSansCN-Medium;
        font-size: 13px;
        color: #FFFFFF;
        letter-spacing: -0.08px;
      }
    }
  }
</style>
