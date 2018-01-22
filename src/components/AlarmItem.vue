<template>
  <div class="InspectionItem">
    <div class="item">
      <div class="item-left">
        <img src="../assets/images/icon_alarm_offline_36x33@2x.png" v-show="item.state === 1" alt="">
        <img src="../assets/images/icon_alarm_mid_36x33@2x.png" v-show="item.state === 2" alt="">
        <img src="../assets/images/icon_alarm_high_36x33@2x.png" v-show="item.state === 3" alt="">
        <div class="product">
          <p>{{item.name}}</p>
          <span>{{item.model}}</span>
        </div>
      </div>
      <div class="item-right">
        <div class="modulus">
          {{item.date}}
        </div>
        <div class="warning">
          <img src="../assets/images/Gray Copy 12.png" alt="">
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
  .InspectionItem {
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
            line-height: 18px;
            color: #707070;
            letter-spacing: -0.58px;
            margin: 0;
            margin-bottom: 3px;
            font-weight: bold;
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

        .modulus {
          float: left;
          text-align: right;
          font-size: 12px;
          color: #707070;
          letter-spacing: -0.5px;
          line-height: 36px;
          margin-bottom: 2px;
        }

        .warning {
          margin-left: 0.1rem;
          margin-top: 0.11rem;
          align-items: center;
          float: left;
        }
      }
    }
  }
</style>
