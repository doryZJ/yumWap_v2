<template>
  <div class="deviceItem">
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
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      item: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>
<style lang="scss">
  .deviceItem {
    .item {
      padding: 0.12rem 0;
      border-bottom: 1px solid #C8C7CC;
      height: 0.36rem;
      font-size: 0;

      &::after {
        content: '';
        clear: both;
      }

      .item-left {
        float: left;

        &::after {
          content: '';
          clear: both;
        }

        img {
          margin-right: 0.1rem;
          float: left;
        }

        .product {
          float: left;

          p {
            font-size: 14px;
            line-height: 18px;
            color: #707070;
            letter-spacing: -0.58px;
            margin: 0;
            margin-bottom: 3px;
          }

          span {
            font-size: 12px;
            color: #707070;
            letter-spacing: -0.5px;
            margin-top: 3px;
            display: inline-block;
          }
        }
      }

      .item-right {
        margin-right: 0.16rem;
        float: right;

        .modulus {
          .modulus-name {
            height: 20px;
            
            span {
              font-size: 14px;
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
  }
</style>
