<template>
  <div class="circleChart">
    <div class="chart" ref="chart">
    </div>       
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    props: {
      list: {
        type: Array,
        default: () => {
          return []
        }
      },
      color: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data () {
      return {
      }
    },
    mounted () {
      this.initEcharts()
    },
    methods: {
      initEcharts () {
        const elChart = this.$refs.chart
        let chart = echarts.init(elChart)
        chart.setOption({
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
          color: this.color
        })
      }
    }
  }
</script>
<style lang="scss">

</style>
