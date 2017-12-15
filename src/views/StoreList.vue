<template>
  <div class="storeList">
    <div class="title">门店列表</div>
    <restaurant-list></restaurant-list>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import YFooter from '@/components/Footer'
  import RestaurantList from '@/components/RestaurantList'
  export default {
    data () {
      return {
        footerNav: 2
      }
    },
    components: {
      RestaurantList,
      YFooter
    }
  }
</script>
<style lang="scss">
  .storeList {
    width: 100%;
    height: 100%;
    background: #F4F8FB;

    .title {
      margin-left: .16rem;
      padding-top: .34rem;
      font-size: 34px;
      color: #000000;
      height: .5rem;
      letter-spacing: -1px;
    }
  }
</style>
