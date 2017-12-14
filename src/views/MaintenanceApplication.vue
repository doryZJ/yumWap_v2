<template>
  <div class="maintenanceApplication">
    <div class="title">
      <div class="back" @click="goBack"><返回</div>
      <span>创建维修申请</span>
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
          <span class="value" @click="handleUrgent">{{urgentSelected}}
            <img src="../assets/images/Gray Copy 11.png" alt="">
          </span>
        </div>
      </div>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
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
          <span class="edit">编辑</span>
        </div>
      </div>
      <div class="repair-list">
        <ul>
          <li class="clearfix" v-for="(item, index) in repairList" :key="index">
            <span class="name">{{item.name}}</span>
            <span class="count">{{item.price}}元/个  x {{item.count}}</span>
          </li>
          <li>
            <img src="../assets/images/add_small@2x.png" alt="">
            <span class="addParts" @click="addParts">新增零件</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="remark-wrapper">
      <div class="head">备注</div>
      <textarea class="remark"></textarea>
    </div>
    <div class="btn-wrapper">
      <div class="btn">创 建</div>
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
        ]
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      handleUrgent () {
        this.sheetVisible = true
      },
      selectSort (val) {
        this.urgentSelected = val.name
      },
      addParts () {
        this.$router.push('/partLibrary')
      }
    },
    mounted () {
      this.actions = [
        {
          name: '一般',
          method: this.selectSort
        },
        {
          name: '紧急',
          method: this.selectSort
        }
      ]
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
      font-family: SourceHanSansCN-Normal;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;
      text-align: center;

      .back {
        font-family: SourceHanSansCN-Normal;
        font-size: 14px;
        color: #688BA6;
        letter-spacing: 0;
        margin-left: 0.1rem;
        position: absolute;
        left: 0.1rem;
        line-height: 28px;
      }
    }

    .basicInfo {
      .head {
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-family: SourceHanSansCN-Bold;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
      }

      .info-content {
        padding: 18px;
        background: #fff;

        .info {
          margin-bottom: 12px;
          height: 28px;;

          &::after {
            content: '';
            clear: both;
          }

          .label {
            font-family: SourceHanSansCN-Light;
            font-size: 14px;
            color: #707070;
            letter-spacing: -0.58px;
            line-height: 28px;
            float: left;
          }

          .value {
            font-family: SourceHanSansCN-Regular;
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
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-family: SourceHanSansCN-Bold;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
      }

      .fault {
        padding: 12px;
        background: #fff;

        p {
          font-family: SourceHanSansCN-Light;
          font-size: 14px;
          color: #707070;
          letter-spacing: -0.58px;
          line-height: 28px;
        }
      }
    }

    .repair-wrapper {
      .head {
        margin: 0.28rem 0.16rem 0.16rem 0.16rem;
        font-family: SourceHanSansCN-Bold;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
        height: 14px;

        .name {
          font-family: SourceHanSansCN-Bold;
          font-size: 14px;
          color: #707070;
          letter-spacing: -0.58px;
          float: left;
        }

        .edit {
          font-family: SourceHanSansCN-Normal;
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
              font-family: SourceHanSansCN-Normal;
              font-size: 14px;
              color: #707070;
              letter-spacing: -0.58px;
            }

            .count {
              float: right;
              font-family: SourceHanSansCN-Normal;
              font-size: 14px;
              color: #688BA6;
              letter-spacing: -0.58px;
            }

            img {
              width: 14px;
              height: 14px;
              display: inline-block;
              margin-right: 6px;
              vertical-align: middle;
            }

            .addParts {
              font-family: SourceHanSansCN-Normal;
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
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-family: SourceHanSansCN-Bold;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
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
        background: #1792E5;
        line-height: 0.5rem;
        text-align: center;
        font-family: SourceHanSansCN-Regular;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.89px;
        float: right;
        margin: 0 0.2rem 0 0;
      }
    }
  }
</style>
