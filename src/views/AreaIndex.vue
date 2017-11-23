<template>
  <div class="area-view">
    <div class="title">
      <span>上海地区</span>
    </div>
    <repair-apply></repair-apply>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import YFooter from '@/components/Footer'
  import RepairApply from '@/components/RepairApply'
  export default {
    data () {
      return {
        footerNav: 0
      }
    },
    components: {
      RepairApply,
      YFooter
    }
  }
</script>
<style lang="scss">
  .area-view {
    background: #F4F8FB;
    
    .title {
      font-family: SourceHanSansCN-Normal;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;
      width: 100%;
      text-align: center;
    }
  }
</style>
