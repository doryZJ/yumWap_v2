<template>
  <div class="Overview">
    <div class="head">
      <img src="../assets/images/icon_energy_consumption_18x18@2x.png">
      <span>{{title}}</span>
    </div>
    <div class="polyline-wrapper">
      <div class="polyline" ref="polyline"></div>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    props: {
      title: {
        type: String,
        default: '趋势分析'
      },
      yAxisData: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    computed: {
    },
    mounted () {
      this.initEcharts()
    },
    methods: {
      initEcharts () {
        console.log(this.yAxisData)
        const elPolyline = this.$refs.polyline
        let polylineChart = echarts.init(elPolyline)
        const option = {
          grid: {
            show: true,
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12月'],
              axisLine: {
                lineStyle: {
                  color: '#707070'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#707070'
                }
              },
              name: this.yAxisData.name,
              nameTextStyle: {
                color: '#707070',
                fontSize: 12,
                align: 'left'
              },
              nameLocation: 'end',
              nameGap: 5
            }
          ],
          series: [
            {
              type: 'line',
              data: this.yAxisData.data
            }
          ],
          color: ['#6FB788']
        }
        polylineChart.setOption(option, true)
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
        margin-left: 5px;
        display: inline-block;
        vertical-align: middle;
      }
    }

    .polyline-wrapper {
      width: 100%;
      height: 210px;
      padding: 0.1rem;
      position: relative;
      box-sizing: border-box;
      margin-top: -35px;

      .polyline {
        width: 100%;
        height: 250px;
      }
    }
  }
</style>
