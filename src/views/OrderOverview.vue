<template>
  <div class="orderOverview">
    <div class="title">
      <div class="back" @click="goBack"><返回</div>
      <span>工单总数</span>
    </div>
    <div class="sort-wrapper">
      <div class="sort" @click="handleSort">
        <div class="triangle-down"></div>
        <span class="label">排序：</span>
        <span class="">{{sortName}}</span>
      </div>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <type-fanChart :pageType="orderPageType" :list="orderList" :chartInfo="typeChartInfo"></type-fanChart>
    <div class="person-performance">
      <div class="head">
        <img src="../assets/images/icon_energy_consumption_18x18@2x.png">
        <span>人员绩效</span>
      </div>
      <performance :list="list"></performance>
    </div>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import YFooter from '@/components/Footer'
  import TypeFanChart from '@/components/TypeFanChart'
  import Performance from '@/components/Performance'
  export default {
    data () {
      return {
        footerNav: 2,
        sortName: '本月',
        actions: [],
        sheetVisible: false,
        orderPageType: 3,
        orderList: [
          {
            name: '维修工单(急)：',
            value: '20'
          },
          {
            name: '维修工单(中):',
            value: '10'
          },
          {
            name: '维修工单(普):',
            value: '4'
          },
          {
            name: '巡检工单:',
            value: '4'
          }
        ],
        typeChartInfo: {
          title: '全月总计',
          count: 24
        },
        list: [
          {
            count: 3,
            staff: '吴工',
            star: 5,
            score: 4.9
          },
          {
            count: 4,
            staff: '张工',
            star: 4,
            score: 4
          },
          {
            count: 5,
            staff: '吴工',
            star: 3,
            score: 3.5
          },
          {
            count: 4,
            staff: '张工',
            star: 4,
            score: 4
          },
          {
            count: 5,
            staff: '吴工',
            star: 3,
            score: 3.5
          },
          {
            count: 3,
            staff: '吴工',
            star: 5,
            score: 4.9
          },
          {
            count: 4,
            staff: '张工',
            star: 4,
            score: 4
          },
          {
            count: 5,
            staff: '吴工',
            star: 3,
            score: 3.5
          }
        ]
      }
    },
    mounted () {
      this.actions = [
        {
          name: '本周',
          method: this.selectSort
        },
        {
          name: '本月',
          method: this.selectSort
        }
      ]
    },
    components: {
      YFooter,
      TypeFanChart,
      Performance
    },
    methods: {
      goBack () {
        this.$router.go(-1)
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
  .orderOverview {
    background: #F4F8FB;
    width: 100%;
    min-height: 100%;
    height: auto;
    padding-bottom: 0.59rem;

    .title {
      position: relative;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;
      text-align: center;

      .back {
        font-size: 14px;
        color: #688BA6;
        letter-spacing: 0;
        margin-left: 0.1rem;
        position: absolute;
        left: 0.1rem;
        line-height: 28px;
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

    .person-performance {
      margin: 0.1rem 0.1rem;
      padding: 0.1rem;
      background: #FFFFFF;
      box-shadow: 0 0 6px 0 rgba(53,64,77,0.10);

      .head {
        position: relative;
        align-items: center;
        height: 18px;
        font-size: 12px;

        img {
          width: 18px;
          margin: 0;
          padding: 0;
          vertical-align: middle;
        }

        span {
          font-size: 18px;
          color: #707070;
          margin-left: 5px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
</style>
