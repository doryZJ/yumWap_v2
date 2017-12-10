<template>
  <div class="taskSortList">
    <scroll class="list-wrapper">
      <ul>
        <li v-for="(item, index) in list" :key="index" @click="handleTack">
          <div class="item">
            <div class="item-left">
              <img src="../assets/images/icon_alarm_low_36x33.png" v-show="item.state === 0" alt="">
              <img src="../assets/images/icon_alarm_mid_36x33.png" v-show="item.state === 1" alt="">
              <img src="../assets/images/icon_alarm_high_36x33.png" v-show="item.state === 2" alt="">
              <img src="../assets/images/icon_repair_36x33.png" v-show="item.state === 3" alt="">
              <span class="icon icon-active" v-show="item.state === 4">周</span>
              <span class="icon" v-show="item.state === 5">日</span>
              <div class="product">
                <p>{{item.name}}</p>
                <span>{{item.model}}</span>
              </div>
            </div>
            <div class="item-right">
              <div class="modulus">
                <div class="modulus-name">
                  <span>{{item.modulus}}</span>
                </div>
                <div class="setup" v-show="item.date">
                  {{item.date}}
                </div>
              </div>
              <div class="warning">
                <img src="../assets/images/icon_information_22x22.png" alt="">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>
<script>
  import Scroll from './Scroll'
  export default {
    data () {
      return {
        list: [
          {
            state: 0, // 0: 低，1: 中，2: 高, 3: 周, 4: 日
            name: '肯德基洛川店-冷藏冰箱维修',
            model: 'WL-20171017-8001',
            modulus: '未处理',
            date: '2017/10/16'
          },
          {
            state: 1, // 0: 低，1: 中，2: 高, 3: 周, 4: 日
            name: '肯德基洛川店-空调维修',
            model: 'WL-20171017-8001',
            modulus: '进行中',
            date: '2017/10/16'
          },
          {
            state: 3, // 0: 低，1: 中，2: 高, 3: 周, 4: 日
            name: '肯德基洛川店-空调维修',
            model: 'WL-20171017-8001',
            modulus: '进行中',
            date: '2017/10/16'
          },
          {
            state: 4, // 0: 低，1: 中，2: 高, 3: 周, 4: 日
            name: '肯德基洛川店-空调维修',
            model: 'WL-20171017-8001',
            modulus: '进行中',
            date: '2017/10/16'
          },
          {
            state: 5, // 0: 低，1: 中，2: 高, 3: 周, 4: 日
            name: '肯德基洛川店-空调维修',
            model: 'WL-20171017-8001',
            modulus: '进行中',
            date: '2017/10/16'
          },
          {
            state: 1, // 0: 低，1: 中，2: 高, 3: 周, 4: 日
            name: '肯德基洛川店-空调维修',
            model: 'WL-20171017-8001',
            modulus: '进行中',
            date: '2017/10/16'
          },
          {
            state: 3, // 0: 低，1: 中，2: 高, 3: 周, 4: 日
            name: '肯德基洛川店-空调维修',
            model: 'WL-20171017-8001',
            modulus: '进行中',
            date: '2017/10/16'
          },
          {
            state: 4, // 0: 低，1: 中，2: 高, 3: 周, 4: 日
            name: '肯德基洛川店-空调维修',
            model: 'WL-20171017-8001',
            modulus: '进行中',
            date: '2017/10/16'
          },
          {
            state: 5, // 0: 低，1: 中，2: 高, 3: 周, 4: 日
            name: '肯德基洛川店-空调维修',
            model: 'WL-20171017-8001',
            modulus: '进行中',
            date: '2017/10/16'
          }
        ]
      }
    },
    components: {
      Scroll
    },
    methods: {
      handleTack () {
        this.$router.push('/areaTicketDetail')
      }
    }
  }
</script>
<style lang="scss">
  .taskSortList {
    margin-top: 0.35rem;
    font-size: 0;
    height: calc(100% - 1.63rem);

    .list-wrapper {
      width: 100%;
      height: 100%;
      background: #F4F8FB;
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
              width: 36px;
              height: 33px;
            }

            .icon {
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: #A3B3BF;
              line-height: 36px;
              text-align: center;
              margin-right: 0.1rem;
              display: inline-block;
              font-family: SourceHanSansCN-Bold;
              font-size: 0.18rem;
              color: #FFFFFF;
              letter-spacing: -0.75px;
            }

            .icon-active {
              background: #6FB788;
            }

            .product {
              p {
                font-family: SourceHanSansCN-Bold;
                font-size: 14px;
                color: #707070;
                letter-spacing: -0.58px;
                margin: 0;
              }

              span {
                font-family: HoneywellSans-Light;
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
                display: flex;
                align-items: center;

                span {
                  font-family: PingFangSC-Semibold;
                  font-size: 14px;
                  color: #707070;
                  letter-spacing: -0.58px;
                  display: inline-block;
                  margin-right: 4.3px;
                  width: 100%;
                  text-align: right;
                }

                img {
                  width: 6px;
                  height: 6px;
                  display: inline-block;
                }
              }

              .setup {
                font-family: SourceHanSansCN-Light;
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

        &:hover {
          opacity: 0.2;
          background: #E2742D;
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
