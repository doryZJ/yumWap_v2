<template>
  <div class="repairApply">
    <div class="circle-wrapper" id="circleWrapper">
      <div id="circle" class="circle"></div>
      <div class="content">
        <span class="count">{{listCount}}</span>
        <span class="text" v-show="pageType === 0">维修申请</span>
        <span class="text" v-show="pageType === 1">设备告警</span>
      </div>
    </div>
    <div class="repairList">
      <ul :class="listCls">
        <li v-for="(item, index) in list" :key="index" v-if="pageType === 0">
          <div class="name-wrapper">
            <span class="state"></span>
            <span class="repairName">{{item.name}}</span>
          </div>
          <span class="repairCount">{{item.value}}件</span>
        </li>
        <li v-for="(item, index) in list" :key="index" v-if="pageType === 1">
          <div class="name-wrapper">
            <span class="state"></span>
            <span class="repairName">{{item.name}}</span>
          </div>
          <span class="repairCount">{{item.value}}件</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    props: {
      pageType: { // 0: 区域首页，1: 门店首页
        type: Number,
        default: 0
      },
      list: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
      }
    },
    computed: {
      listCount () {
        let count = 0
        this.list.forEach((item) => {
          count += item.value
        })
        return count
      },
      listCls () {
        return this.pageType === 0 ? 'areaList' : 'storeList'
      },
      circleColor () {
        return this.pageType === 0 ? ['#6FB788', '#E6B634', '#DE6C60'] : ['#F8E71C', '#F68B44', '#EE3124']
      }
    },
    mounted () {
      this.initEcharts()
    },
    methods: {
      initEcharts () {
        const elCircle = document.getElementById('circle')
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
  .repairApply {
    margin: 0.1rem 0.1rem;
    background: #FFFFFF;
    box-shadow: 0 0 6px 0 rgba(53,64,77,0.10);
    padding: 0.1rem;
    box-sizing: border-box;
    display: flex;

    .circle-wrapper {
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0.16rem;
      position: relative;

      .circle {
        width: 100%;
        height: 100%;
      }
      .content {
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        top: 0.3rem;
        left: 0.3rem;
        text-align: center;

        .count {
          font-size: 36px;
          color: #303030;
          letter-spacing: -0.56px;
          line-height: 36px;
          display: block;
        }

        .text {
          font-size: 12px;
          color: #303030;
          letter-spacing: -0.25px;
          line-height: 18px;
          display: block;
        }
      }
    }

    .repairList {
      margin: 0.08rem 0;
      flex: 1;

      ul {
        margin: 0;
        padding: 0;

        li {
          margin-bottom: 0.16rem;
          height: 24px;

          &::after {
            clear: both;
          }

          .name-wrapper {
            height: 24px;
            line-height: 24px;
            position: relative;
            font-size: 0;
            float: left;
          }

          .state {
            width: 6px;
            height: 24px;
            margin-right: 0.14rem;
            display: inline-block;
            vertical-align: middle;
          }

          .repairName {
            height: 24px;
            line-height: 24px;
            font-size: 14px;
            color: #707070;
            line-height: 24px;
            letter-spacing: -0.25px;
            display: inline-block;
            vertical-align: middle;
          }

          .repairCount {
            height: 24px;
            line-height: 24px;
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
            margin-bottom: 0;
            .state {
              background: #DE6C60;
            }
          }
        }
      }

      .storeList {
        background: #fff;
        
        li {
          &:nth-of-type(1) {
            .state {
              background: #F8E71C;
            }
          }

          &:nth-of-type(2) {
            .state {
              background: #F68B44;
            }
          }

          &:nth-of-type(3) {
            margin-bottom: 0;
            .state {
              background: #EE3124;
            }
          }
        }
      }
    }
  }
</style>
