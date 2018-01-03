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
          <p class="value" @click="handleUrgent">
            <span>{{urgentSelected}}</span>
            <img src="../assets/images/Gray Copy 11.png" alt="">
          </p>
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
          <span class="edit" v-show="!isEdit" @click="handleEdit">编辑</span>
          <span class="edit" v-show="isEdit" @click="handleComplete">完成</span>
        </div>
      </div>
      <div class="repair-list">
        <ul>
          <li class="clearfix" v-for="(item, index) in repairList" :key="index">
            <span class="name">{{item.name}}</span>
            <div class="count">
              <span class="price" :class="{'pricePadding': isEdit}">{{item.price}}元/个</span>
              <img src="../assets/images/minus@2x.png" @click="handleReduce(index)" class="btn-minus" :class="{'minus': item.count === 1}" v-show="item.count && isEdit" alt="">
              <span class="number" v-show="item.count">  x {{item.count}}</span>
              <img src="../assets/images/Add@2x.png" @click="handleAdd(index)" class="btn-add" v-show="isEdit" alt="">
            </div>
          </li>
          <li @click="addParts">
            <img src="../assets/images/add_small@2x.png" alt="">
            <span class="addParts">新增零件</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="remark-wrapper">
      <div class="head">
        <div class="clearfix">
          <span class="name">维修明细</span>
          <img src="../assets/images/camera@2x.png" @click="handleCamera" alt="">
        </div>
      </div>
      <textarea class="remark" v-model="remark"></textarea>
    </div>
    <div class="btn-wrapper">
      <div class="btn" @click="handleCreate">创 建</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      const route = this.$route
      const routePath = route.path
      let isEdit = false
      if (routePath.indexOf('edit') >= 0) {
        isEdit = true
      }
      return {
        isEdit,
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
        ],
        remark: '更换气缸阀板密封垫床；更换制冷剂'
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
      },
      handleEdit () {
        this.$router.push('/MaintenanceApplication/edit')
      },
      handleComplete () {
        this.$router.push('/MaintenanceApplication')
      },
      handleAdd (index) {
        this.repairList[index].count++
      },
      handleReduce (index) {
        this.repairList[index].count--
      },
      handleCreate () {
        this.$router.push('/mainApplicationSuccess')
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
    },
    watch: {
      $route: {
        handler: function (val, oldVal) {
          if (val) {
            const path = val.path
            if (path.indexOf('edit') >= 0) {
              this.isEdit = true
            } else {
              this.isEdit = false
            }
          }
        }
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
</style>
