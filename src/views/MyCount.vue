<template>
  <div class="mycount">
    <div class="title">我的账户</div>
    <div class="basicInfo">
      <div class="head">个人资料</div>
      <div class="info-content">
        <div class="info">
          <span class="label">登录名</span>
          <span class="value">{{info.loginname}}</span>
        </div>
        <div class="info">
          <span class="label">用户名</span>
          <span class="value">{{info.username}}</span>
        </div>
        <div class="info">
          <span class="label">密码</span>
          <span class="value">{{info.password}}
            <img src="../assets/images/Gray Copy 11.png" alt="">
          </span>
        </div>
        <div class="info">
          <span class="label">手机</span>
          <span class="value">{{info.tel}}
            <img src="../assets/images/Gray Copy 11.png" alt="">
          </span>
        </div>
        <div class="info">
          <span class="label">职位</span>
          <span class="value">{{info.position}}
          </span>
        </div>
      </div>
    </div>
    <div class="setting">
      <div class="head">设置</div>
      <div class="info-content">
        <div class="info">
          <span class="label">设置1</span>
          <span class="value">{{setting1}}</span>
        </div>
        <div class="info">
          <span class="label">设置2</span>
          <span class="value">{{setting2}}</span>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <div class="btn" @click="handleExit">退 出</div>
    </div>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import YFooter from '@/components/Footer'
  export default {
    data () {
      return {
        footerNav: 4,
        info: {
          loginname: '王某某',
          username: '王某某',
          password: '******',
          tel: '18627812736',
          position: '维修工程师'
        },
        setting1: 'xxxxxx',
        setting2: 'xxxxxx'
      }
    },
    components: {
      YFooter
    },
    methods: {
      handleExit () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss">
  .mycount {
    background: #F4F8FB;
    width: 100%;
    min-height: 100%;
    height: auto;
    padding-bottom: 0.59rem;
    
    .title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;
    }

    .basicInfo, .setting {
      .head {
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
        font-weight: bold;
      }

      .info-content {
        padding-left: 20px;
        background: #fff;

        .info {
          height: 12px;
          padding: 14px 0;
          border-bottom: 1px solid #C8C7CC;

          &::after {
            content: '';
            clear: both;
          }

          .label {
            font-size: 12px;
            color: #707070;
            letter-spacing: -0.58px;
            line-height: 12px;
            float: left;
          }

          .value {
            font-size: 12px;
            color: #688BA6;
            letter-spacing: -0.58px;
            line-height: 12px;
            float: right;
            margin-right: 20px;

            img {
              margin-left: 5px;
            }
          }
        }
      }
    }

    .btn-wrapper {
      height: 0.5rem;
      padding: 0.7rem 0 0.2rem 0;

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
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.89px;
        float: right;
        margin: 0 0.2rem 0 0;
      }
    }
    @media (min-width: 414px) {
      .btn-wrapper {
        padding: 1.37rem 0 0.2rem 0;
      }
    }
  }
</style>
