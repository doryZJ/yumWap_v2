<template>
  <div class="deviceDetail">
    <div class="title">
      <div class="back"><返回</div>
      <span>冷冻冰箱</span>
    </div>
    <div class="deviceInfo">
      <div class="info-title">
        设备信息
      </div>
      <ul class="list">
        <li>
          <div class="info">
            <span class="label">
              设备名称
            </span>
            <span class="value">
              {{deviceInfo.name}}
            </span>
          </div>
          <div class="info">
            <span class="label">
              当前状态
            </span>
            <span class="value state">
              {{deviceInfo.state}}
            </span>
          </div>
          <div class="info">
            <span class="label">
              当前温度
            </span>
            <span class="value">
              {{deviceInfo.CurrentTemperature}}
            </span>
          </div>
          <div class="info">
            <span class="label">
              设定温度
            </span>
            <span class="value">
              {{deviceInfo.setTemperature}}
            </span>
          </div>
          <div class="powerInfo">
            <div class="info-head">
                <span class="label">
                今日耗电量
              </span>
              <span class="value">
                <em>{{deviceInfo.powerConsumption}}</em> 度
              </span>
            </div>
            <div class="info-chart" id="infoChart" ref="chart">
            </div>
          </div>
          <div class="info">
            <span class="label">
              今日预计总耗电量
            </span>
            <span class="value">
              {{deviceInfo.expectedPowerConsumption}} 度
            </span>
          </div>
          <div class="info">
            <span class="label">
              设备编号
            </span>
            <span class="value">
              {{deviceInfo.no}}
            </span>
          </div>
          <div class="info">
            <span class="label">
              所属系统
            </span>
            <span class="value">
              {{deviceInfo.ownSystem}}
            </span>
          </div>
          <div class="info">
            <span class="label">
              制造商
            </span>
            <span class="value">
              {{deviceInfo.manufacturer}}
            </span>
          </div>
          <div class="info">
            <span class="label">
              设备型号
            </span>
            <span class="value">
              {{deviceInfo.model}}
            </span>
          </div>
          <div class="info">
            <span class="label">
              备注
            </span>
            <span class="value">
              {{deviceInfo.remark}}
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="maintenanceInfo">
      <div class="info-title">
        运维信息
      </div>
      <ul class="list">
        <li>
          <div class="info">
            <span class="label">
              开始运行日期
            </span>
            <span class="value">
              {{operateInfo.startTime}}
            </span>
          </div>
          <div class="info">
            <span class="label">
              质保周期
            </span>
            <span class="value state">
              {{operateInfo.warrantyCycle}}
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="btn-wrapper">
      <span class="btn">申请维修</span>
    </div>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import chartBg from '@/assets/images/chartBg.png'
  import YFooter from '@/components/Footer'
  export default {
    data () {
      const echartBg = chartBg
      return {
        footerNav: 2,
        deviceInfo: {
          name: '冷冻冰箱',
          state: '待机',
          CurrentTemperature: '-11.8 ℃',
          setTemperature: '-12.0 ℃',
          powerConsumption: '12.1',
          expectedPowerConsumption: '18.7',
          no: 'WTC-CS-800',
          ownSystem: '冷冻冷藏',
          manufacturer: 'HONEYWELL',
          model: 'WTC-CS-800',
          remark: '厨房东南角',
          powerData: [1.2, 2.4, 3.5, 4.5, 3.4, 2.5, 1.5, 1.2, 2.4, 3.5, 4.5, 3.4, 2.5, 1.5]
        },
        operateInfo: {
          startTime: '2017/01/01',
          warrantyCycle: '2017/01/01 - 2021/12/31'
        },
        echartBg
      }
    },
    components: {
      YFooter
    },
    mounted () {
      this.initChart()
    },
    methods: {
      initChart () {
        const elChart = this.$refs.chart
        let chart = echarts.init(elChart)
        const options = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '0',
            right: '0',
            top: '20px',
            bottom: '0px',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00'],
              interval: 2
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '运维申请',
              type: 'bar',
              data: this.deviceInfo.powerData,
              itemStyle: {
                normal: {
                  opacity: '0.9',
                  color: '#698CA7'
                }
              }
            }
          ],
          backgroundColor: {
            color: {
              image: this.echartBg,
              repeat: 'repeat-x'
            }
          }
        }
        chart.setOption(options)
      }
    }
  }
</script>
<style lang="scss">
  .deviceDetail {
    background: #F4F8FB;
    width: 100%;
    min-height: 100%;
    height: auto;
    margin-bottom: 0.5rem;

    .title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;

      .back {
        font-size: 14px;
        color: #688BA6;
        letter-spacing: 0;
        margin-left: 0.1rem;
        position: absolute;
        left: 0.1rem;
      }
    }

    .deviceInfo {
      .info-title {
        margin: 0.16rem 0;
        padding-left: 20px;
        text-align: left;
        font-size: 12px;
        color: #707070;
        letter-spacing: -0.5px;
      }

      .list {
        background: #fff;
        li {
          list-style: none;
          padding-left: 20px;

          .info {
            padding: 13px 20px 13px 0;
            border-bottom: 1px solid #C8C7CC;
            display: flex;
            justify-content: space-between;

            .label {
              font-size: 12px;
              color: #707070;
              letter-spacing: -0.5px;
            }

            .value {
              font-size: 12px;
              color: #688BA6;
              letter-spacing: -0.5px;

              em {
                color: #E26A3A;
                font-style: normal;
              }
            }

            .state {
              color: #D7AA31;
            }
          }

          .powerInfo {
            padding: 13px 20px 13px 0;
            border-bottom: 1px solid #C8C7CC;

            .info-head {
              padding: 0px 0px 0px 0;
              display: flex;
              justify-content: space-between;

              .label {
                font-size: 12px;
                color: #707070;
                letter-spacing: -0.5px;
              }

              .value {
                font-size: 12px;
                color: #688BA6;
                letter-spacing: -0.5px;

                em {
                  color: #E26A3A;
                  font-style: normal;
                }
              }
            }

            .info-chart {
              width: 3.43rem;
              height: 1.7rem;
            }
          }
        }
      }
    }

    .maintenanceInfo {
      .info-title {
        margin: 0.16rem 0;
        padding-left: 20px;
        text-align: left;
        font-size: 12px;
        color: #707070;
        letter-spacing: -0.5px;
      }

      .list {
        background: #fff;
        li {
          list-style: none;
          padding-left: 20px;

          .info {
            padding: 13px 20px 13px 0;
            border-bottom: 1px solid #C8C7CC;
            display: flex;
            justify-content: space-between;

            .label {
              font-size: 12px;
              color: #707070;
              letter-spacing: -0.5px;
            }

            .value {
              font-size: 12px;
              color: #688BA6;
              letter-spacing: -0.5px;
            }
          }
        }
      }
    }

    .btn-wrapper {
      width: 100%;
      padding: 0.6rem 0;
      height: 0.46rem;
      font-size: 0;

      .btn {
        width: 2.56rem;
        height: 100%;
        background: #A8B3C3;
        font-size: 0.18rem;
        margin: 0 auto;
        color: #FFFFFF;
        letter-spacing: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
