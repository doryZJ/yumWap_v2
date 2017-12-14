<template>
  <div class="InspectionStep">
    <div class="step-wrapper step1-wrapper" :class="{'step-wrapper-active': step === 1}">
      <div class="step-num">1</div>
      <div class="step-name">检查冷柜</div>
    </div>
    <div class="step-separation step-separation1"></div>
    <div class="step-wrapper" :class="{'step-wrapper-active': step === 2}">
      <div class="step-num">2</div>
      <div class="step-name">检查机组</div>
    </div>
    <div class="step-separation step-separation2"></div>
    <div class="step-wrapper" :class="{'step-wrapper-active': step === 3}">
      <div class="step-num">3</div>
      <div class="step-name">外围设备</div>
    </div>
    <div class="step-separation step-separation3"></div>
    <div class="step-wrapper" :class="{'step-wrapper-active': step === 4}">
      <div class="step-num">4</div>
      <div class="step-name">生成报告</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      step: {
        type: Number,
        default: 1
      }
    }
  }
</script>
<style lang="scss">
  .InspectionStep {
    width: 3.05rem;
    margin: 0.2rem auto;
    height: 0.54rem;
    position: relative;

    &::after {
      content: '';
      clear: both;
    }

    .step-wrapper {
      width: 0.56rem;
      margin-left: 0.26rem;
      float: left;

      .step-num {
        width: 0.24rem;
        height: 0.24rem;
        text-align: center;
        line-height: 0.24rem;
        border: 1px solid #00BFB3;
        border-radius: 50%;
        font-family: HoneywellSans-Medium;
        font-size: 16px;
        color: #00BFB3;
        letter-spacing: -0.05px;
        margin-left: 0.15rem;
      }

      .step-name {
        font-family: SourceHanSansCN-Light;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
        line-height: 28px;
      }
    }

    .step1-wrapper {
      margin-left: 0;
    }

    .step-wrapper-active {
      .step-num {
        background: #00BFB3;
        font-family: HoneywellSans-Medium;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.05px;
      }

      .step-name {
        font-family: SourceHanSansCN-Medium;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
        line-height: 28px;
      }
    }

    .step-separation {
      width: 0.44rem;
      border: 1px dashed #00BFB3;
      float: left;
      position: absolute;
      top: 0.1rem;
    }

    .step-separation1 {
      left: 0.46rem;
    }

    .step-separation2 {
      left: 1.28rem;
    }

    .step-separation3 {
      left: 2.1rem;
    }
  }
</style>
