<template>
  <div class="InspectionItem">
    <div class="item">
      <div class="item-left">
        <span class="icon" v-show="item.state === 0">日</span>
        <span class="icon" v-show="item.state === 1">周</span>
        <span class="icon" v-show="item.state === 2">月</span>
        <span class="icon icon-anxious" v-show="item.state === 3">急</span>
        <span class="icon icon-in" v-show="item.state === 4">中</span>
        <span class="icon icon-general" v-show="item.state === 5">普</span>
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

        .modulus {
          float: left;
          .setup {
            font-size: 12px;
            color: #698CA7;
            letter-spacing: -0.5px;
            line-height: 0.36rem;
          }
        }

        .warning {
          margin-left: 0.2rem;
          margin-top: 0.11rem;
          align-items: center;
          float: left;
        }
      }
    }
  }
</style>
