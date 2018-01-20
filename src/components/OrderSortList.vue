<template>
  <div class="orderSortList">
      <ul>
        <li v-for="(item, index) in list" :key="index" @click.prevent="handleItem">
          <order-item :item="item"></order-item>
        </li>
      </ul>
  </div>
</template>
<script>
  import OrderItem from './OrderItem'
  export default {
    data () {
      return {
        date: [
          '12月10日 (今天）',
          '12月11日'
        ],
        list: [
          {
            state: 3,
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/12/10  16:00',
            worker: '吴工'
          },
          {
            state: 4,
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/12/10  16:00',
            worker: '吴工'
          },
          {
            state: 5,
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/12/10  16:00',
            worker: '吴工'
          },
          {
            state: 4,
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/12/10  16:00',
            worker: '吴工'
          },
          {
            state: 5,
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/12/10  16:00',
            worker: '吴工'
          },
          {
            state: 3,
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/12/10  16:00',
            worker: '吴工'
          },
          {
            state: 4,
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/12/10  16:00',
            worker: '吴工'
          },
          {
            state: 5,
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/12/10  16:00',
            worker: '吴工'
          },
          {
            state: 4,
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/12/10  16:00',
            worker: '吴工'
          },
          {
            state: 5,
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/12/10  16:00',
            worker: '吴工'
          }
        ]
      }
    },
    components: {
      OrderItem
    },
    methods: {
      handleItem () {
        this.$router.push('/repairOrderDetail')
      }
    }
  }
</script>
<style lang="scss">
  .orderSortList {
    font-size: 0;
    height: calc(100% - 1.9rem);

    .list-wrapper {
      width: 100%;
      height: 100%;
      background: #F4F8FB;
      position: relative;
      overflow: hidden;
    }

    .list-date {
      padding: 13px 0 13px 18px;
      font-size: 14px;
      color: #707070;
      letter-spacing: -0.58px;
    }

    ul {
      margin: 0;
      padding: 0;
      background: #fff;

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
              font-size: 0.18rem;
              color: #FFFFFF;
              letter-spacing: -0.75px;
            }

            .icon-active {
              background: #6FB788;
            }

            .icon-anxious {
              background: #E2742D;
            }

            .icon-in {
              background: #D7AA31;
            }

            .icon-general {
              background: #6FB788;
            }

            .product {
              p {
                font-size: 14px;
                color: #707070;
                letter-spacing: -0.58px;
                margin: 0;
                margin-bottom: 2px;
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

              .setup {
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
      }
    }
  }
</style>
