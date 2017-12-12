<template>
  <div class="login-view">
    <div class="logo">
      <span>设备智能管理平台</span>
    </div>
    <div class="login-wrapper">
      <div class="login">
        <div class="username">
          <img src="../assets/images/icon_id_9x20 copy 2.png" alt="">
          <input type="text" placeholder="用户名" value="" v-model="username">
        </div>
        <div class="password">
          <img src="../assets/images/icon_password_11x19 copy 2.png" alt="">
          <input type="password" placeholder="密码" value="" v-model="password">
        </div>
        <div class="btn" @click="handleLogin">
          登录
        </div>
        <span class="label">忘记密码?</span>
      </div>
    </div>
    <div class="copyright">
      <p>Powered by</p>
      <img src="../assets/images/logo_honeywell_white_120x23.png" alt="">
    </div>
  </div>
</template>
<script>
  // import $ from 'jquery'
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    mounted () {
    },
    methods: {
      handleLogin () {
        if (this.checkLogin()) {
          this.$router.push('/areaIndex')
        }
      },
      checkLogin () {
        if (!this.username) {
          Toast({
            message: '请输入用户名！',
            duration: 2000
          })
          return false
        }
        if (!this.password) {
          Toast({
            message: '请输入密码！',
            duration: 2000
          })
          return false
        }
        return true
      }
    }
  }
</script>
 
<style lang="scss">
  @import '../assets/styles/variable';
  // eslint-disable
  .login-view {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    display: block;
    background: url('../assets/images/bg_app_login_1080x1920.png') no-repeat;
    background-size: 100% 100%;

    .logo {
      padding-top: 1rem;
      margin: 0 auto;
      width: 1.92rem;
      height: 1.56rem;

      span {
        font-family: SourceHanSansCN-Medium;
        font-size: 0.24rem;
        color: #FFFFFF;
        letter-spacing: 0;
      }
    }

    .login-wrapper {
      margin-top: 0.45rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .login {
        width: 2.56rem;
        height: auto;
        text-align: center;

        .username, .password {
          width: 100%;
          border-bottom: 1px solid #D0D0D0;
          display: box;
          display: flex;
          height: 0.46rem;
          align-items: center;
          box-pack: center;
          box-align: center;

          input {
            margin-left: 0.275rem;
            flex: 1;
            height: 0.2rem;
            line-height: 0.2rem;
            font-size: $font-size-medium;
            background-color: transparent!important;
            color: #fff;
            border: 0;
            outline: none;
          }
        }

        .btn {
          width: 2.56rem;
          height: 0.46rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #D53A2A;
          font-family: SourceHanSansCN-Light;
          font-size: 18px;
          color: #FFFFFF!important;
          letter-spacing: 3px;
          margin-top: 0.23rem;
        }

        .label {
          margin: 0.12rem auto 0;
          font-family: SourceHanSansCN-Light;
          font-size: 12px;
          color: #FFFFFF;
          letter-spacing: 0;
          display: block;
          text-decoration: underline;
        }

      }
    }

    .copyright {
      position: absolute;
      bottom: 0.21rem;
      text-align: center;
      width: 100%;
      font-size: 12px;

      p {
        font-family: SourceHanSansCN-Light;
        font-size: 12px;
        color: #FFFFFF;
        letter-spacing: 0;
        margin: 0;
        display: block;
      }

      span {
        font-family: HoneywellSans-Medium;
        font-size: 10px;
        color: #FFFFFF;
        letter-spacing: 0;
        display: block;
      }

      img {
        width: 0.9rem;
        height: 0.17rem;
        font-size: 0;
        margin-top: 8px;
        display: inline-block;
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-transition-delay: 9999s;
        -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
        color: #fff!important;
    }

    ::-webkit-input-placeholder {
      color: #fff!important;
    }
　　:-moz-placeholder {
      color: #fff!important;
    }
　　::-moz-placeholder {
      color: #fff!important;
    }
　　:-ms-input-placeholder {
      color: #fff!important;
    }
  }
</style>
