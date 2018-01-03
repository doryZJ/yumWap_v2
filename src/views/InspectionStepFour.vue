<template>
  <div class="inspectionStepFour">
    <div class="title">
      <div class="back" @click="goBack"><返回</div>
      <span>巡检工单</span>
    </div>
    <inspection-step :step="step"></inspection-step>
    <div class="basicInfo">
      <div class="head">基本信息</div>
      <div class="info-content">
        <div class="info">
          <span class="label">门店</span>
          <span class="value">永辉1店</span>
        </div>
        <div class="info">
          <span class="label">维修类型</span>
          <span class="value">冷链系统日检</span>
        </div>
        <div class="info">
          <span class="label">负责部门</span>
          <span class="value">工程一部</span>
        </div>
        <div class="info">
          <span class="label">巡检人</span>
          <span class="value">高大强</span>
        </div>
        <div class="info">
          <span class="label">电话</span>
          <span class="value">18627364937</span>
        </div>
      </div>
    </div>
    <div class="fault-wrapper">
      <div class="head">故障明细</div>
      <div class="fault">
        <p>1， 制冷剂水温异常，当前水温24，设定温度48；</p>
        <p>2，进水水温异常，当前水温20，设定温度48；</p>
        <p>3，机组覆盖物未通过检查。</p>
      </div>
    </div>
    <div class="btn-wrapper">
      <div class="btn btn-prev" @click="handlePrev">上一步</div>
      <div class="btn btn-next" @click="handleNext">提 交</div>
    </div>
  </div>
</template>
<script>
  import InspectionStep from '@/components/InspectionStep'
  export default {
    data () {
      return {
        step: 4
      }
    },
    components: {
      InspectionStep
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      handlePrev () {
        this.$router.go(-1)
      },
      handleNext () {
        this.$router.push('/inspectionSubmit')
      }
    }
  }
</script>
<style lang="scss">
  .inspectionStepFour {
    background: #F4F8FB;
    width: 100%;
    min-height: 100%;
    height: auto;
    padding-bottom: 0.5rem;

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

    .basicInfo {
      .head {
        font-weight: bold;
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
      }

      .info-content {
        padding: 18px;
        background: #fff;

        .info {
          height: 28px;

          &::after {
            content: '';
            clear: both;
          }

          .label {
            font-size: 14px;
            color: #707070;
            letter-spacing: -0.58px;
            line-height: 28px;
            float: left;
          }

          .value {
            font-size: 14px;
            color: #688BA6;
            letter-spacing: -0.58px;
            line-height: 28px;
            float: right;
          }

        }
      }
    }

    .fault-wrapper {
      .head {
        font-weight: bold;
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
      }

      .fault {
        padding: 12px;
        background: #fff;

        p {
          font-size: 14px;
          color: #707070;
          letter-spacing: -0.58px;
          line-height: 28px;
          margin: 0;
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
        width: 1.37rem;
        height: 0.5rem;
      }

      .btn-prev {
        float: left;
        background: #FFFFFF;
        border: 1px solid #1792E5;
        line-height: 0.5rem;
        text-align: center;
        font-size: 16px;
        color: #1792E5;
        letter-spacing: -0.89px;
      }

      .btn-next {
        float: right;
        background: #1792E5;
        border: 1px solid #1792E5;
        line-height: 0.5rem;
        text-align: center;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.89px;
      }
    }
  }
</style>
