<template>
  <div class="deviceSortList">
    <!-- <scroll class="list-wrapper"> -->
      <ul v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
        <li v-for="(item, index) in list" :key="index">
          <div class="item">
            <div class="item-left">
              <img src="../assets/images/icon_on_36x36.png" v-show="item.state === 0" alt="">
              <img src="../assets/images/icon_standby_36x36.png" v-show="item.state === 1" alt="">
              <img src="../assets/images/icon_off_36x36.png" v-show="item.state === 2" alt="">
              <img src="../assets/images/icon_alarm_low_36x33.png" v-show="item.state === 3" alt="">
              <img src="../assets/images/icon_alarm_mid_36x33.png" v-show="item.state === 4" alt="">
              <img src="../assets/images/icon_alarm_high_36x33.png" v-show="item.state === 5" alt="">
              <div class="product">
                <p>{{item.name}}</p>
                <span>{{item.model}}</span>
              </div>
            </div>
            <div class="item-right">
              <div class="modulus">
                <div class="modulus-name">
                  <span>{{item.modulus}}</span>
                  <img src="../assets/images/icon_triangle_up_6x6@2x.png" v-show="item.variety === 0" alt="">
                  <img src="../assets/images/icon_triangle_down_6x6.png" v-show="item.variety === 1" alt="">
                </div>
                <div class="setup" v-show="item.setup">
                  {{item.setup}}
                </div>
              </div>
              <div class="warning">
                <img src="../assets/images/icon_information_22x22.png" alt="">
              </div>
            </div>
          </div>
        </li>
      </ul>
    <!-- </scroll> -->
  </div>
</template>
<script>
  // import Scroll from './Scroll'
  export default {
    data () {
      return {
        list: [
          {
            state: 0, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '制冰机',
            model: 'Manitowoc',
            modulus: '制冰量：98%',
            variety: 0 // 0:上升，1: 下降
          },
          {
            state: 0, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '工作台冷藏冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：4.1℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：4.0℃'
          },
          {
            state: 1, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：-11.8℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：-12.0℃'
          },
          {
            state: 2, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：-11.8℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：-12.0℃'
          },
          {
            state: 3, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：-11.8℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：-12.0℃'
          },
          {
            state: 4, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：-11.8℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：-12.0℃'
          },
          {
            state: 5, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：-11.8℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：-12.0℃'
          },
          {
            state: 0, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '制冰机',
            model: 'Manitowoc',
            modulus: '制冰量：98%',
            variety: 0 // 0:上升，1: 下降
          },
          {
            state: 0, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '工作台冷藏冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：4.1℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：4.0℃'
          },
          {
            state: 1, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：-11.8℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：-12.0℃'
          },
          {
            state: 2, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：-11.8℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：-12.0℃'
          },
          {
            state: 3, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：-11.8℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：-12.0℃'
          },
          {
            state: 4, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：-11.8℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：-12.0℃'
          },
          {
            state: 5, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：-11.8℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：-12.0℃'
          }
        ],
        loading: false
      }
    },
    components: {
      // Scroll
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          let last = this.list[this.list.length - 1]
          for (let i = 1; i <= 10; i++) {
            this.list.push(last)
          }
          this.loading = false
        }, 2500)
      }
    }
  }
</script>
<style lang="scss">
  .deviceSortList {
    margin-top: 0.35rem;
    font-size: 0;
    height: calc(100% - 1.63rem);
    overflow: scroll;

    .list-wrapper {
      width: 100%;
      height: 100%;
      background: #fff;
      position: relative;
      overflow: hidden;
    }

    ul {
      margin: 0;
      padding: 0;
      li {
        padding-left: 0.16rem;
        height: 0.6rem;
        position: relative;

        .item {
          padding: 0.12rem 0;
          border-bottom: 1px solid #C8C7CC;
          display: flex;
          height: 0.36rem;
          justify-content: space-between;
          font-size: 0;

          .item-left {
            display: flex;

            img {
              margin-right: 0.1rem;
            }

            .product {
              p {
                font-size: 14px;
                line-height: 18px;
                margin-bottom: 3px;
                color: #707070;
                letter-spacing: -0.58px;
              }

              span {
                font-size: 12px;
                color: #707070;
                letter-spacing: -0.5px;
              }
            }
          }

          .item-right {
            margin-right: 0.16rem;
            display: flex;

            .modulus {
              .modulus-name {

                span {
                  font-size: 14px;
                  line-height: 18px;
                  margin-bottom: 2px;
                  color: #707070;
                  letter-spacing: -0.58px;
                  display: inline-block;
                  margin-right: 4.3px;
                  vertical-align: middle;
                }

                img {
                  width: 6px;
                  height: 6px;
                  display: inline-block;
                  vertical-align: middle;
                }
              }

              .setup {
                font-size: 12px;
                color: #698CA7;
                letter-spacing: -0.5px;
                text-align: right;
              }
            }

            .warning {
              margin-left: 0.2rem;
              display: flex;
              align-items: center;
            }
          }
        }

        &:last-child {
          .item {
            border-bottom: 0;
          }
        }
      }
    }
  }
</style>
