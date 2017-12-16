<template>
  <div class="maintenanceApplication">
    <div class="title">
      <div class="back" @click="goBack"><返回</div>
      <span>创建维修申请</span>
    </div>
    <div class="message">
      <img src="../assets/images/confrim@2x.png" alt="">
      <span>您已成功创建维修申请</span>
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
          <span class="label">紧急程度</span>
          <span class="value">{{urgentSelected}}</span>
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
          <span class="name">维修明细</span>
        </div>
      </div>
      <textarea class="remark" v-model="remark"></textarea>
    </div>
    <div class="btn-wrapper">
      <div class="btn" @click="handleReturn">返回首页</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        store: '52192489475',
        repairType: '冷链系统',
        source: '日检',
        urgentSelected: '一般',
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
      addParts () {
        this.$router.push('/partLibrary')
      },
      handleReturn () {
        this.$router.push('/StoreIndex')
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
  .maintenanceApplication {
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

    .message {
      padding: 28px 0;
      height: 16px;
      background: #00BFB3;
      text-align: center;
      font-size: 12px;

      img {
        width: 16px;
        height: 16px;
        display: inline-block;
        vertical-align: middle;
      }
      span {
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0.08px;
        vertical-align: middle;
        margin-left: 6px;
        display: inline-block;
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

            img {
              margin-left: 5px;
            }
          }
        }
      }
    }

    .fault-wrapper {
      .head {
        font-weight: bold;
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
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
        font-weight: bold;
        margin: 0.28rem 0.16rem 0.16rem 0.16rem;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
        height: 14px;

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
                vertical-align: middle;
                margin-right: 0;
              }

              span {
                font-size: 14px;
                color: #688BA6;
                letter-spacing: -0.58px;
                vertical-align: middle;
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
              vertical-align: middle;
            }

            .addParts {
              font-size: 12px;
              color: #1792E5;
              letter-spacing: -0.5px;
              vertical-align: middle;
            }
          }
        }
      }
    }

    .remark-wrapper {
      .head {
        font-weight: bold;
        margin: 0.28rem 0.16rem 0.16rem 0.16rem;
        height: 16px;

        .name {
          float: left;
          font-size: 14px;
          color: #707070;
          letter-spacing: -0.58px;
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
      height: 0.5rem;
      padding: 0.3rem 0 0.2rem 0;

      &::after {
        content: '';
        clear: both;
      }

      .btn {
        width: 1.37rem;
        height: 0.5rem;
        background: #FFFFFF;
        border: 1px solid #1792E5;
        line-height: 0.5rem;
        text-align: center;
        font-size: 16px;
        color: #1792E5;
        letter-spacing: -0.89px;
        float: right;
        margin: 0 0.2rem 0 0;
      }
    }
  }
</style>
