<template>
  <div class="maintenanceFooter">
      <div v-for="(item, index) in navList" :key="index">
        <router-link :to="item.url">
            <div class="box" :class="{'active': nav === index}">
                <img :src="item.icon" alt="">
                <span>{{item.name}}</span>
            </div>
        </router-link>
      </div>
  </div>
</template>
<script>
  import iconTargetOff from '@/assets/images/icon_target_off_24x24.png'
  import iconTargetOn from '@/assets/images/icon_target_on_24x24.png'
  import iconAccountOff from '@/assets/images/icon_myaccount_off_24x23.png'
  import iconAccountOn from '@/assets/images/icon_myaccount_on_24x23.png'
  
  export default {
    data () {
      const iconTarget = this.nav === 0 ? iconTargetOn : iconTargetOff
      const iconAccount = this.nav === 1 ? iconAccountOn : iconAccountOff
      return {
        navList: [
          {
            icon: iconTarget,
            name: '任务列表',
            url: '/taskList/store'
          },
          {
            icon: iconAccount,
            name: '我的账户',
            url: '/index'
          }
        ]
      }
    },
    props: {
      nav: {
        type: Number,
        default: 0
      }
    }
  }
</script>
<style lang="scss">
  .maintenanceFooter {
    width: 100%;
    height: 0.49rem;
    background: #35404D;
    position: fixed;
    bottom: 0;

    .box {
      width: 50%;
      padding-top: 0.05rem;
      text-align: center;
      display: block;
      float: left;

      img {
        display: block;
        margin: 0 auto;
      }

      span {
        flex: 1;
        opacity: 0.5;
        font-family: SourceHanSansCN-Normal;
        font-size: 10px;
        color: #FFFFFF;
        display: block;
      }
    }

    .active {
      span {
        color: #00BFB3;
      }
    }
  }
</style>

