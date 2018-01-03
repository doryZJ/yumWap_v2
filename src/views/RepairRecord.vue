<template>
  <div class="RepairRecord">
    <div class="title">
      <div class="back" @click="goBack"><返回</div>
      <span>维修记录</span>
    </div>
    <div class="repair-state">
      <div class="head">维修状态</div>
      <div class="repair-select">
        <div class="select-box clearfix">
          <div class="select select1" @click="handleSelect(0)">
            <span class="icon">
              <i v-show="select1 === 0"></i>
            </span>
            <span class="text">全部完成</span>
          </div>
          <div class="select select2" @click="handleSelect(1)">
            <span class="icon">
              <i v-show="select1 === 1"></i>
            </span>
            <span class="text">部分完成</span>
          </div>
          <div class="select select3" @click="handleSelect(2)">
            <span class="icon">
              <i v-show="select1 === 2"></i>
            </span>
            <span class="text">无法完成</span>
          </div>
        </div>
      </div>
    </div>
    <div class="remark-wrapper">
      <div class="head">
        <div class="clearfix">
          <span class="name">文字记录</span>
        </div>
      </div>
      <textarea class="remark" v-model="remark"></textarea>
    </div>
    <div class="photo-wrapper">
      <div class="head">
        <div class="clearfix">
          <span class="name">文字记录</span>
        </div>
      </div>
      <div class="photo clearfix">
        <div class="addPic" @click="loadImageLocal">
          <img src="../assets/images/addphoto@2x.png" alt="">
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <div class="btn">提 交</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        select1: 0,
        remark: '描述...'
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      handleSelect (val) {
        this.select1 = val
      },
      loadImageLocal () {
      /*eslint-disable*/
        navigator.camera.getPicture(this.onLoadImageLocalSuccess, this.onLoadImageFail, {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        })
        /*eslint-enable*/
      },
      onLoadImageLocalSuccess (imageURI) {
        alert(imageURI)
        // "data:image/jpeg;base64,"+imageURI;
      },
      onLoadImageFail (message) {
        navigator.notification.alert('操作失败，原因：' + message, null, '警告')
      }
    }
  }
</script>
<style lang="scss">
  .RepairRecord {
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

    .repair-state {
      .head {
        font-weight: bold;
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
      }

      .repair-select {
        padding: 20px;
        background: #FFFFFF;
        box-shadow: 0 1px 2px 0 rgba(192,192,192,0.20);
      }

      .select-box {
        width: 3.15rem;
        height: 20px;
        margin: 0 auto;

        .select {
          font-size: 12px;
          float: left;

          .icon {
            width: 18px;
            height: 18px;
            border: 1px solid #C7C7CD;
            border-radius: 50%;
            text-align: center;
            line-height: 18px;
            vertical-align: middle;
            font-size: 12px;
            display: inline-block;
            position: relative;

            i {
              width: 8px;
              height: 8px;
              border: 1px solid #168EDF;
              background: #168EDF;
              border-radius: 50%;
              margin-top: 4px;
              display: inline-block;
            }
          }

          .text {
            font-family: SourceHanSansCN-Normal;
            font-size: 12px;
            color: #688BA6;
            letter-spacing: -0.5px;
            vertical-align: middle;
            margin-left: 7px;
          }
        }

        .select2, .select3 {
          margin-left: 0.4rem;
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
        height: 1.89rem;
        padding: 16px 20px;
        font-size: 14px;
        background: #fff;
        box-sizing: border-box;
        resize: none;
        border: 0;
        outline: 0;
        color: #707070;
      }
    }

    .photo-wrapper {
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

      .photo {
        padding: 13px 20px;
        font-size: 12px;
        min-height: 0.48rem;
        height: auto;
        background: #FFFFFF;
        box-shadow: 0 1px 2px 0 rgba(192,192,192,0.20);

        img {
          width: 0.48rem;
          height: 0.48rem;
          margin-right: 8px;
          float: left;
        }

        .addPic {
          width: 0.48rem;
          height: 0.48rem;
          color: #C7C7CD;
          text-align: center;
          float: left;

          img {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
        }
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
