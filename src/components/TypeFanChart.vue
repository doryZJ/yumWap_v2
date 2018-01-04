<template>
  <div class="Overview">
    <div class="head">
      <img src="../assets/images/icon_energy_consumption_18x18@2x.png">
      <span>{{title}}</span>
    </div>
    <div class="repairApply">
      <div class="circle-wrapper" id="circleWrapper">
        <div id="circle" class="circle" ref="circle"></div>
        <div class="content" :class="chartContentCls">
          <span class="text" >{{chartInfo.title}}</span>
          <span class="chartCount">{{chartInfo.count}}</span>
          <span class="chartUnit">{{chartInfo.unit}}</span>
        </div>
      </div>
      <div class="repairList">
        <ul :class="listCls">
          <li v-for="(item, index) in list" :key="index" v-if="pageType === 0 || pageType === 2">
            <div class="name-wrapper">
              <span class="state"></span>
              <span class="repairName">{{item.name}}</span>
            </div>
            <span class="repairCount">{{item.value}}万元</span>
          </li>
          <li v-for="(item, index) in list" :key="index" v-if="pageType === 1">
            <div class="name-wrapper">
              <span class="state"></span>
              <span class="repairName">{{item.name}}</span>
            </div>
            <span class="repairCount">{{item.value}}个</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    props: {
      title: {
        type: String,
        default: '类型分析'
      },
      pageType: { // 0: 类型分析，1: 报警级别，2: 报警类型
        type: Number,
        default: 0
      },
      list: {
        type: Array,
        default: []
      },
      chartInfo: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    computed: {
      listCls () {
        let listCls = ''
        switch (this.pageType) {
          case 0:
            listCls = 'areaList'
            break
          case 1:
            listCls = 'storeList'
            break
          case 2:
            listCls = 'areaList'
            break
        }
        return listCls
      },
      circleColor () {
        let circleColor = ''
        switch (this.pageType) {
          case 0:
            circleColor = ['#6FB788', '#E6B634', '#DE6C60', '#957DAC']
            break
          case 1:
            circleColor = ['#EE3124', '#E56C1E', '#E5B430', '#FFD76C']
            break
          case 2:
            circleColor = ['#6FB788', '#E6B634', '#DE6C60', '#957DAC']
            break
        }
        return circleColor
      },
      chartContentCls () {
        let chartContentCls = ''
        switch (this.pageType) {
          case 0:
            chartContentCls = 'energyChartContent'
            break
          case 1:
            chartContentCls = 'levelChartContent'
            break
          case 2:
            chartContentCls = 'typeChartContent'
            break
        }
        return chartContentCls
      }
    },
    mounted () {
      this.initEcharts()
    },
    methods: {
      initEcharts () {
        const elCircle = this.$refs.circle
        let circleChart = echarts.init(elCircle)
        circleChart.setOption({
          series: [
            {
              type: 'pie',
              radius: ['70%', '90%'],
              label: {
                normal: {
                  show: false,
                  position: 'center'
                }
              },
              data: this.list
            }
          ],
          color: this.circleColor
        })
      }
    }
  }
</script>
<style lang="scss">
  .Overview {
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

    .repairApply {
      margin: 0.1rem 0 0 0;
      background: #FFFFFF;
      padding: 0.1rem 0.1rem 0 0.1rem;
      box-sizing: border-box;
      display: flex;

      .circle-wrapper {
        width: 1.3rem;
        height: 1.3rem;
        margin-right: 0.16rem;
        position: relative;

        .circle {
          width: 100%;
          height: 100%;
        }
        .content {
          position: absolute;
          width: 0.6rem;
          top: 0.32rem;
          left: 0.35rem;
          text-align: center;

          .text {
            font-size: 12px;
            color: #303030;
            letter-spacing: -0.25px;
            line-height: 18px;
            display: block;
          }

          .chartCount {
            font-size: 36px;
            color: #303030;
            letter-spacing: -0.56px;
            line-height: 36px;
            display: block;
          }

          .chartUnit {
            font-size: 10px;
            color: #707070;
            letter-spacing: -0.42px;
            line-height: 10px;
            display: block;
          }
        }

        .energyChartContent {
          top: 0.32rem;
        }

        .levelChartContent, .typeChartContent {
          top: 0.4rem;
        }
      }

      .repairList {
        margin: 0.08rem 0;
        flex: 1;

        ul {
          margin: 0;
          padding: 0;

          li {
            margin-bottom: 0.08rem;
            height: 20px;

            &::after {
              clear: both;
            }

            .name-wrapper {
              height: 20px;
              line-height: 20px;
              position: relative;
              font-size: 0;
              float: left;
            }

            .state {
              width: 6px;
              height: 20px;
              margin-right: 0.14rem;
              display: inline-block;
              vertical-align: middle;
            }

            .repairName {
              height: 20px;
              line-height: 20px;
              font-size: 14px;
              color: #707070;
              line-height: 20px;
              letter-spacing: -0.25px;
              display: inline-block;
              vertical-align: middle;
            }

            .repairCount {
              height: 20px;
              line-height: 20px;
              font-size: 14px;
              color: #707070;
              letter-spacing: -0.22px;
              float: right;
            }
          }
        }

        .areaList {
          li {
            &:nth-of-type(1) {
              .state {
                background: #6FB788;
              }
            }

            &:nth-of-type(2) {
              .state {
                background: #E6B634;
              }
            }

            &:nth-of-type(3) {
              .state {
                background: #DE6C60;
              }
            }

            &:nth-of-type(4) {
              margin-bottom: 0;
              .state {
                background: #957DAC;
              }
            }
          }
        }

        .storeList {
          background: #fff;

          li {
            &:nth-of-type(1) {
              .state {
                background: #EE3124;
              }
            }

            &:nth-of-type(2) {
              .state {
                background: #E56C1E;
              }
            }

            &:nth-of-type(3) {
              .state {
                background: #E5B430;
              }
            }

            &:nth-of-type(4) {
              margin-bottom: 0;
              .state {
                background: #FFD76C;
              }
            }
          }
        }
      }
    }
  }
</style>
