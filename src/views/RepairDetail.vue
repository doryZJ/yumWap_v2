<template>
  <transition name="slide">
    <div class="RepairDetail">
      <div class="title">
        <div class="back" @click="goBack"><返回</div>
        <span>维修工单</span>
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
          <div class="head-right">{{distance}}m</div>
        </div>
        <div class="store-info clearfix">
          <div class="store-tel">
            <img src="../assets/images/tel@2x.png" alt="">
            <span>{{tel}}</span>
          </div>
          <div class="store-place">
            <img src="../assets/images/place@2x.png" alt="">
            <span>查看门店位置</span>
          </div>
        </div>
      </div>
      <div class="basicInfo">
        <div class="head">基本信息</div>
        <div class="info-content">
          <div class="info">
            <span class="label">门店</span>
            <span class="value">{{store}}</span>
          </div>
          <div class="info">
            <span class="label">维修类型</span>
            <span class="value">{{repairType}}</span>
          </div>
          <div class="info">
            <span class="label">来源</span>
            <span class="value">{{source}}</span>
          </div>
          <div class="info">
            <span class="label">创建时间</span>
            <span class="value">{{createTime}}</span>
          </div>
          <div class="info">
            <span class="label">工单号</span>
            <span class="value">{{no}}</span>
          </div>
          <div class="info">
            <span class="label">状态</span>
            <span class="value">{{state}}</span>
          </div>
          <div class="info">
            <span class="label">图片</span>
            <p class="value">
              <span>{{urgentSelected}}</span>
              <img src="../assets/images/Gray Copy 11.png" alt="">
            </p>
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
            <span class="name">备注</span>
          </div>
        </div>
        <textarea class="remark" v-model="remark"></textarea>
      </div>
      <div class="btn-wrapper">
        <div class="btn" @click="handleCreate">填写维修记录</div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data () {
      return {
        orderTitle: 'LED灯安装',
        orderStore: '永辉超市（张江店）',
        distance: 500,
        tel: '021-92873652',
        store: '52192489475',
        repairType: '冷链系统',
        source: '日检',
        createTime: '2017/10/17    16:30:05',
        no: 'AKDOF7934600',
        state: '待维修',
        urgentSelected: '查看',
        sheetVisible: false,
        actions: [],
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
        remark: '更换气缸阀板密封垫床；更换制冷剂'
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
    padding-bottom: 0.9rem;

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
        padding: 20px 26px;
        height: 36px;

        .head-left {
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
          margin-top: 16px;
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
        height: 1.08rem;
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

