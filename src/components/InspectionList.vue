<template>
  <div class="inspectionList">
    <scroll class="list-wrapper">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div class="item">
            <div class="item-left">
              <span class="icon" v-show="item.state === 0">日</span>
              <span class="icon" v-show="item.state === 1">周</span>
              <span class="icon" v-show="item.state === 2">月</span>
              <div class="product">
                <p>{{item.name}}</p>
                <span>{{item.store}}</span>
              </div>
            </div>
            <div class="item-right">
              <div class="modulus">
                <div class="setup" v-show="item.date">
                  {{item.date}}
                </div>
              </div>
              <div class="warning">
                <img src="../assets/images/Gray Copy 12.png" alt="">
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
            state: 0, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 1, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 2, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 0, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 1, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 0, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 0, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 0, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 0, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 0, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 0, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 0, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          }
        ]
      }
    },
    components: {
      Scroll
    },
    methods: {
    }
  }
</script>
<style lang="scss">
  .inspectionList {
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
              background: #6FB788;
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

              .setup {
                font-family: SourceHanSansCN-Light;
                font-size: 12px;
                color: #698CA7;
                letter-spacing: -0.5px;
                line-height: 0.36rem;
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
