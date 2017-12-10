
<template>
  <div class="TicketDetail">
    <div class="title">
      <div class="back"><返回</div>
      <span>肯德基洛川店-日常保养</span>
    </div>
    <ticket-info></ticket-info>
    <div class="btn-wrapper">
      <span class="btn">保养确认</span>
    </div>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import TicketInfo from '@/components/TicketInfo'
  import YFooter from '@/components/Footer'
  export default {
    data () {
      return {
        footerNav: 1
      }
    },
    components: {
      TicketInfo,
      YFooter
    }
  }
</script>
<style lang="scss">
  .TicketDetail {
    background: #F4F8FB;
    width: 100%;
    min-height: 100%;
    height: auto;
    margin-bottom: 0.5rem;

    .title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: SourceHanSansCN-Normal;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;

      .back {
        font-family: SourceHanSansCN-Normal;
        font-size: 14px;
        color: #688BA6;
        letter-spacing: 0;
        margin-left: 0.1rem;
        position: absolute;
        left: 0.1rem;
      }
    }

    .btn-wrapper {
      width: 100%;
      padding: 0.6rem 0;
      height: 0.46rem;
      font-size: 0;

      .btn {
        width: 2.56rem;
        height: 100%;
        background: #A8B3C3;
        font-family: SourceHanSansCN-Light;
        font-size: 0.18rem;
        margin: 0 auto;
        color: #FFFFFF;
        letter-spacing: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
