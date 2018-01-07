
<template>
  <div class="repairOrders">
    <div class="title">
      <div class="overview">
        <img src="../assets/images/icon_overview.png" alt="">
        <span>总览</span>
      </div>
      <span>工单</span>
      <div class="create">
        <img src="../assets/images/Add@2x.png" alt="">
        <span>创建</span>
      </div>
    </div>
    <div class="tab-wrapper">
      <div class="tab" :class='{"active": tabActive === 0}' @click="handleTab(0)">
        待审批
        <span class="badge">3</span>
      </div>
      <div class="tab" :class='{"active": tabActive === 1}' @click="handleTab(1)">待检</div>
      <div class="tab tab-last" :class='{"active": tabActive === 2}' @click="handleTab(2)">已检</div>
    </div>
    <div class="sort-wrapper">
      <div class="sort" @click="handleSort">
        <div class="triangle-down"></div>
        <span class="label">排序：</span>
        <span class="">{{sortName}}</span>
      </div>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <order-sortList></order-sortList>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import OrderSortList from '@/components/OrderSortList'
  import YFooter from '@/components/Footer'
  export default {
    data () {
      return {
        footerNav: 1,
        tabActive: 0,
        sortName: '时间',
        sheetVisible: false,
        actions: []
      }
    },
    components: {
      OrderSortList,
      YFooter
    },
    mounted () {
      this.actions = [
        {
          name: '时间',
          method: this.selectSort
        },
        {
          name: '空间',
          method: this.selectSort
        }
      ]
    },
    methods: {
      handleTab (val) {
        this.tabActive = val
      },
      handleSort () {
        this.sheetVisible = true
      },
      selectSort (val) {
        this.sortName = val.name
      }
    }
  }
</script>
<style lang="scss">
  .repairOrders {
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

      .overview {
        position: absolute;
        left: 15px;
        top: 0.12rem;
        height: 16px;

        img {
          width: 16px;
          height: 16px;
          display: inline-block;
          margin-right: 3px;
          vertical-align: middle;
        }

        span {
          font-size: 14px;
          color: #698CA7;
          letter-spacing: -0.78px;
          vertical-align: middle;
        }
      }

      .create {
        position: absolute;
        right: 15px;
        top: 0.12rem;
        height: 16px;

        img {
          width: 16px;
          height: 16px;
          display: inline-block;
          margin-right: 3px;
          vertical-align: middle;
        }

        span {
          font-size: 14px;
          color: #698CA7;
          letter-spacing: -0.78px;
          vertical-align: middle;
        }
      }
    }

    .tab-wrapper {
      margin: 0.2rem 16px 0;
      height: 0.3rem;
      border: 1px solid #00BFB3;
      border-radius: 4px;
      box-sizing: content-box;
      background: #fff;

      &:after {
        content: '';
        clear: both;
      }

      .tab {
        width: 33.333333333333333333333333%;
        font-size: 13px;
        color: #00BFB3;
        letter-spacing: -0.08px;
        text-align: center;
        height: 0.3rem;
        line-height: 0.3rem;
        float: left;
        position: relative;

        .badge {
          width: 16px;
          height: 16px;
          background: #FF8041;
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          line-height: 16px;
          font-size: 10px;
          color: #FFFFFF;
          letter-spacing: 0;
          position: absolute;
          top: 2px;
        }
      }

      .tab-last {
        float: right;
      }

      .active {
        background: #00BFB3;
        font-size: 13px;
        color: #FFFFFF;
        letter-spacing: -0.08px;
      }
    }

    .sort-wrapper {
      margin: 0.2rem 0 0.1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0;

      .triangle-down {
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 8px solid #D0D0D0;
        display: inline-block;
        margin-right: 5px;
      }

      span {
        font-size: 12px;
        color: #707070;
      }
    }
  }
</style>
