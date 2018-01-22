<template>
  <div class="workOrder">
    <div class="head">
      <img src="../assets/images/icon_energy_consumption_18x18@2x.png">
      <span>工单</span>
    </div>
    <div class="chart-list">
      <ul>
        <li>
          <div class="item inspection">
            <circle-chart :list="inspectionList" :color="inspectionColor"></circle-chart>
            <span class="count">5</span>
            <div class="text">今日巡检</div>
          </div>
        </li>
        <li>
          <div class="item maintain">
            <circle-chart :list="maintainList" :color="maintainColor"></circle-chart>
            <span class="count">6</span>
            <div class="text">今日维修</div>
          </div>
        </li>
        <li>
          <div class="item approved">
            <circle-chart :list="approvedList" :color="approvedColor"></circle-chart>
            <span class="count">1</span>
            <div class="text">待审批</div>
          </div>
        </li>
        <li>
          <div class="item reimbursement">
            <circle-chart :list="reimbursementList" :color="reimbursementColor"></circle-chart>
            <span class="count">2</span>
            <div class="text">待报销</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import CircleChart from './CircleChart'
  export default {
    data () {
      return {
        inspectionList: [5],
        inspectionColor: ['#698CA7'],
        maintainList: [4, 1, 1],
        maintainColor: ['#6FB788', '#E6B634', '#DE6C60'],
        approvedList: [1],
        approvedColor: ['#D7AA31'],
        reimbursementList: [2],
        reimbursementColor: ['#957DAC']
      }
    },
    components: {
      CircleChart
    },
    mounted () {
      // this.initEcharts()
    },
    methods: {
      // initEcharts () {
      //   const elInspectionChart = this.$refs.inspectionChart
      //   let inspectionChart = echarts.init(elInspectionChart)
      //   inspectionChart.setOption({
      //     series: [
      //       {
      //         type: 'pie',
      //         radius: ['70%', '90%'],
      //         label: {
      //           normal: {
      //             show: false,
      //             position: 'center'
      //           }
      //         },
      //         data: this.inspection
      //       }
      //     ],
      //     color: ['#698CA7']
      //   })
      // }
    }
  }
</script>
<style lang="scss">
  .workOrder {
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

    .chart-list {
      padding: 0.24rem 0.17rem 0.14rem 0.17rem;
      height: 0.9rem;

      ul {
        font-size: 0;

        li {
          float: left;

          .item {
            width: 0.6rem;
            margin-right: 0.2rem;
            position: relative;

            .chart{
              width: 0.6rem;
              height: 0.6rem;
              text-align: center;
              line-height: 0.6rem;
            }

            .count {
              position: absolute;
              font-size: 32px;
              color: #303030;
              letter-spacing: -0.39px;
              top: 0.1rem;
              left: 0.22rem;
            }

            .text {
              width: 0.6rem;
              text-align: center;
              font-size: 12px;
              color: #303030;
              letter-spacing: -0.25px;
              line-height: 18px;
              margin-top: 5px;
            }
          }

          &:last-child {
            .item {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
</style>
