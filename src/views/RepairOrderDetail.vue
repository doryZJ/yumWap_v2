
<template>
  <div class="RepairDetail">
    <div class="title">
      <div class="back" @click="goBack"><返回</div>
      <span>工单详情</span>
    </div>
    <div class="orderInfo">
      <div class="head clearfix">
        <div class="head-left clearfix">
          <div class="orderState">急</div>
          <div class="order-content">
            <p class="order-title">{{orderTitle}}</p>
            <p class="store">{{orderStore}}</p>
          </div>
        </div>
        <div class="head-right">
          <mt-swipe :show-indicators="false">
            <mt-swipe-item>
              <img src="../assets/images/lightBulb@2x.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/images/lightBulb@2x.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/images/lightBulb@2x.png" alt="">
            </mt-swipe-item>
          </mt-swipe>
          <div class="swipe-count">
            <span>共{{orderImageCount}}张</span>
          </div>
        </div>
      </div>
    </div>
    <div class="basicInfo">
      <div class="info-content">
        <div class="info">
          <span class="label">类型</span>
          <span class="value">{{repairType}}</span>
        </div>
        <div class="info">
          <span class="label">来源</span>
          <span class="value">{{source}}</span>
        </div>
        <div class="info">
          <span class="label">维修工</span>
          <span class="value">{{repairWorker}}</span>
        </div>
        <div class="info">
          <span class="label">完成时间</span>
          <span class="value">{{completeTime}}</span>
        </div>
      </div>
    </div>
    <div class="customer-review">
      <div class="head">客户评价</div>
      <div class="review-content">
        <div class="review">
          <span class="label">总体评分</span>
          <el-rate v-model="reviewRate" void-color="#D8D8D8"></el-rate>
        </div>
        <div class="review">
          <span class="label">具体描述</span>
          <span class="value">{{reviewDesc}}</span>
        </div>
      </div>
    </div>
    <div class="fault-wrapper">
      <div class="head">故障明细</div>
      <div class="fault">
        <p>1， 制冷剂水温异常，当前水温24，设定温度48；</p>
        <p>2，进水水温异常，当前水温20，设定温度48；</p>
        <p>3，机组覆盖物未通过检查。</p>
      </div>
    </div>
    <div class="repair-wrapper">
      <div class="head">
        <div class="clearfix">
          <span class="name">维修明细</span>
        </div>
      </div>
      <div class="repair-list">
        <ul>
          <li class="clearfix" v-for="(item, index) in repairList" :key="index">
            <span class="name">{{item.name}}</span>
            <div class="count">
              <span class="price">{{item.price}}元/个</span>
              <span class="number" v-show="item.count">  x {{item.count}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="remark-wrapper">
      <div class="head">
        <div class="clearfix">
          <span class="name">维修备注</span>
        </div>
      </div>
      <textarea class="remark" v-model="remark"></textarea>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        orderTitle: '冷链系统维修',
        orderStore: '永辉超市（张江店）',
        orderImageCount: 5,
        tel: '021-92873652',
        store: '52192489475',
        repairType: '冷链系统',
        source: '日检',
        repairWorker: '李工',
        completeTime: '2017/10/17  16:30',
        urgentSelected: '查看',
        sheetVisible: false,
        actions: [],
        reviewDesc: '响应速度很快，半小时搞定问题',
        repairList: [
          {
            name: '气缸阀板密封垫床',
            price: 100,
            count: 1
          },
          {
            name: '气缸阀板密封垫床',
            price: 10,
            count: 2
          }
        ],
        remark: '更换气缸阀板密封垫床；更换制冷剂',
        reviewRate: 4
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      handleCreate () {
        this.$router.push('/repairRecord')
      },
      handleCamera () {
        /*eslint-disable*/
        navigator.camera.getPicture(this.onSuccess, this.onFail, {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          encodingType: Camera.EncodingType.JPEG,
          sourceType: this.mySourceType
        })
        /*eslint-enable*/
      },
      onSuccess (val) {
        alert(val)
      },
      onFail () {
      }
    }
  }
</script>
<style lang="scss">
  .RepairDetail {
    background: #F4F8FB;
    width: 100%;
    min-height: 100%;
    height: auto;

    .title {
      position: relative;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;
      text-align: center;

      .back {
        font-size: 14px;
        color: #688BA6;
        letter-spacing: 0;
        margin-left: 0.1rem;
        position: absolute;
        left: 0.1rem;
        line-height: 28px;
      }
    }

    .orderInfo {
      background: #FFFFFF;
      box-shadow: 0 1px 2px 0 rgba(192,192,192,0.20);

      .head {
        height: .8rem;

        .head-left {
          padding: 20px 0 20px 26px;
          float: left;

          .orderState {
            width: 36px;
            height: 36px;
            background: #E2742D;
            float: left;
            text-align: center;
            line-height: 36px;
            font-size: 18px;
            color: #FFFFFF;
            border-radius: 50%;
            margin-right: 12px;
          }

          .order-content {
            float: left;

            .order-title {
              font-size: 18px;
              line-height: 18px;
              color: #505050;
              letter-spacing: 0.09px;
              padding: 0;
              margin-bottom: 3px;
            }

            .store {
              font-size: 14px;
              color: #9B9B9B;
              letter-spacing: -0.58px;
            }
          }
        }

        .head-right {
          float: right;
          font-size: 14px;
          color: #9B9B9B;
          letter-spacing: -0.58px;
          width: 1.05rem;
          height: 100%;
          position: relative;

          img {
            width: 100%;
            height: 100%;
          }

          .swipe-count {
            width: 64px;
            height: 20px;
            border-radius: 20px;
            background: rgba(0,0,0,0.50);
            position: absolute;
            left: 50%;
            margin-left: -32px;
            bottom: 7px;
            text-align: center;
            line-height: 20px;
            font-size: 12px;
            color: #FFFFFF;
          }
        }
      }

      .store-info {
        border-top: 1px solid #F7F7F7;
        height: 45px;

        .store-tel {
          width: 50%;
          border-right: 1px solid #F7F7F7;
          text-align: center;
          line-height: 45px;
          font-size: 14px;
          color: #1792E5;
          box-sizing: border-box;
          float: left;

          img {
            width: 18px;
            height: 18px;
            vertical-align: middle;
          }

          span {
            vertical-align: middle;
          }
        }

        .store-place {
          width: 50%;
          text-align: center;
          line-height: 45px;
          font-size: 14px;
          color: #1792E5;
          float: left;

          img {
            width: 12px;
            height: 20px;
            vertical-align: middle;
          }

          span {
            vertical-align: middle;
          }
        }
      }
    }

    .basicInfo {
      border-top: 1px solid #C8C7CC;

      .head {
        font-weight: bold;
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
      }

      .info-content {
        padding: 18px;
        background: #fff;

        .info {
          height: 28px;

          &::after {
            content: '';
            clear: both;
          }

          .label {
            font-size: 14px;
            color: #707070;
            letter-spacing: -0.58px;
            line-height: 28px;
            float: left;
          }

          .value {
            font-size: 14px;
            color: #688BA6;
            letter-spacing: -0.58px;
            line-height: 28px;
            float: right;
            margin: 0;

            span {
              float: left;
            }

            img {
              float: left;
              margin-left: 10px;
              margin-top: 8px;
            }
          }
        }
      }
    }

    .customer-review {
      .head {
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
        font-weight: bold;
      }

      .review-content {
        padding: 18px;
        background: #fff;

        .review {
          height: 28px;
          font-size: 0;

          &::after {
            content: '';
            clear: both;
          }

          .label {
            font-size: 14px;
            color: #707070;
            letter-spacing: -0.58px;
            line-height: 28px;
            float: left;
          }

          .value {
            font-size: 14px;
            color: #688BA6;
            letter-spacing: -0.58px;
            line-height: 28px;
            float: right;
            margin: 0;

            span {
              float: left;
            }

            img {
              float: left;
              margin-left: 10px;
              margin-top: 8px;
            }
          }

          .el-rate {
            float: right;
            margin-top: 4px;

            .el-icon-star-on {
              color: #6FB788!important;
            }

            .el-icon-star-off {
              color: #D8D8D8!important;

              &::before {
                content: "\E637";
              }
            }
          }
        }
      }
    }

    .fault-wrapper {
      .head {
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
        font-weight: bold;
      }

      .fault {
        padding: 12px;
        background: #fff;

        p {
          font-size: 14px;
          color: #707070;
          letter-spacing: -0.58px;
          line-height: 28px;
          margin: 0;
        }
      }
    }

    .repair-wrapper {
      .head {
        margin: 0.28rem 0.16rem 0.16rem 0.16rem;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
        height: 14px;
        font-weight: bold;

        .name {
          font-size: 14px;
          color: #707070;
          letter-spacing: -0.58px;
          float: left;
        }

        .edit {
          font-size: 12px;
          color: #1792E5;
          letter-spacing: -0.5px;
          float: right;
        }
      }

      .repair-list {
        background: #fff;

        ul {
          padding-left: 20px;

          li {
            padding: 13px;
            border-bottom: 1px solid #C8C7CC;
            font-size: 12px;
            height: 16px;
            .name {
              float: left;
              font-size: 14px;
              color: #707070;
              letter-spacing: -0.58px;
            }

            .count {
              float: right;

              img {
                width: 20px;
                height: 20px;
                display: inline-block;
                margin-right: 0;
              }

              span {
                font-size: 14px;
                color: #688BA6;
                letter-spacing: -0.58px;
              }

              .pricePadding {
                margin-right: 10px;
              }

              .btn-minus {
                margin-right: 12px;
              }

              .btn-add {
                margin-left: 12px;
              }

              .minus {
                opacity: 0.5;
              }
            }

            img {
              width: 14px;
              height: 14px;
              display: inline-block;
              margin-right: 6px;
            }

            .addParts {
              font-size: 12px;
              color: #1792E5;
              letter-spacing: -0.5px;
            }
          }
        }
      }
    }

    .remark-wrapper {
      .head {
        margin: 0.28rem 0.16rem 0.16rem 0.16rem;
        height: 16px;

        .name {
          float: left;
          font-size: 14px;
          color: #707070;
          letter-spacing: -0.58px;
          font-weight: bold;
        }

        img {
          float: right;
          width: 22px;
          height: 16px;
        }
      }

      .remark {
        width: 100%;
        height: 0.6rem;
        padding: 10px 20px;
        font-size: 14px;
        background: #fff;
        box-sizing: border-box;
        resize: none;
        border: 0;
        outline: 0;
        color: #707070;
      }
    }

    .btn-wrapper {
      height: 0.9rem;
      padding: 0.2rem 30px 0.2rem 30px;
      width: 100%;
      background: #fff;
      box-sizing: border-box;
      position: fixed;
      bottom: 0;

      &::after {
        content: '';
        clear: both;
      }

      .btn {
        width: 100%;
        height: 0.5rem;
        background: #1792E5;
        line-height: 0.5rem;
        text-align: center;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.89px;
      }
    }
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter {
    transform: translateX(100%);
    opacity: 1;
  }
</style>

