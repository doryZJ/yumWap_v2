<template>
  <div class="inspectionStepOne">
    <div class="title">
      <div class="back" @click="goBack"><返回</div>
      <span>巡检工单</span>
    </div>
    <inspection-step></inspection-step>
  </div>
</template>
<script>
  import InspectionStep from '@/components/InspectionStep'
  export default {
    components: {
      InspectionStep
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss">
  .inspectionStepOne{
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
  }
</style>
