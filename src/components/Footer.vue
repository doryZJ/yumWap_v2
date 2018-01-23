<template>
  <div class="footer">
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
  import iconHomeOff from '@/assets/images/icon_home_off_24x23@2x.png'
  import iconTargetOff from '@/assets/images/icon_target_off_24x24@2x.png'
  import iconEquipmentOff from '@/assets/images/icon_equipment_off_24x22@2x.png'
  import iconMyaccountOff from '@/assets/images/icon_myaccount_off_24x23@2x.png'
  import iconHomeOn from '@/assets/images/icon_home_on_24x23@2x.png'
  import iconTargetOn from '@/assets/images/icon_target_on_24x24@2x.png'
  import iconEquipmentOn from '@/assets/images/icon_equipment_on_24x22@2x.png'
  import iconMyaccountOn from '@/assets/images/icon_myaccount_on_24x23@2x.png'
  import iconRepairOff from '@/assets/images/icon_repair_off@2x.png'
  import iconRepairOn from '@/assets/images/icon_repair_on@2x.png'
  export default {
    data () {
      const iconHome = this.nav === 0 ? iconHomeOn : iconHomeOff
      const iconTarget = this.nav === 1 ? iconTargetOn : iconTargetOff
      const iconRepair = this.nav === 2 ? iconRepairOn : iconRepairOff
      const iconEquipment = this.nav === 3 ? iconEquipmentOn : iconEquipmentOff
      const iconMyaccount = this.nav === 4 ? iconMyaccountOn : iconMyaccountOff
      return {
        navList: [
          {
            icon: iconHome,
            name: '总览',
            url: '/overview'
          },
          {
            icon: iconTarget,
            name: '工单',
            url: '/ordersList'
          },
          {
            icon: iconRepair,
            name: '工单总览',
            url: '/orderOverview'
          },
          {
            icon: iconEquipment,
            name: '常见问题',
            url: '/commonProblem'
          },
          {
            icon: iconMyaccount,
            name: '门店',
            url: '/store'
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
  .footer {
    width: 100%;
    height: 0.49rem;
    background: #35404D;
    position: fixed;
    bottom: 0;

    .box {
      width: 20%;
      padding-top: 0.05rem;
      text-align: center;
      display: block;
      float: left;

      img {
        height: 22px;
        display: block;
        margin: 0 auto;
      }

      span {
        flex: 1;
        opacity: 0.5;
        font-size: 10px;
        color: #FFFFFF;
        margin-top: 3px;
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

