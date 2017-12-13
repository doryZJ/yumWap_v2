<template>
  <div class="inspectionStepTwo">
    <div class="title">
      <div class="back" @click="goBack"><返回</div>
      <span>巡检工单</span>
    </div>
    <inspection-step :step="step"></inspection-step>
    <div class="crew-wrapper">
      <div class="head">
        低温机组
      </div>
      <div class="crew-list">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <crew-item :item="item"></crew-item>
          </li>
        </ul>
      </div>
    </div>
    <div class="crew-wrapper">
      <div class="head">
        中温机组
      </div>
      <div class="crew-list">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <crew-item :item="item"></crew-item>
          </li>
        </ul>
      </div>
    </div>
    <div class="btn-wrapper">
      <div class="btn" @click="handleNext">下一步</div>
    </div>
  </div>
</template>
<script>
  import InspectionStep from '@/components/InspectionStep'
  import CrewItem from '@/components/CrewItem'
  export default {
    data () {
      return {
        step: 2,
        list: [
          {
            name1: '吸气压力',
            num1: 56,
            name2: '排气温度-2',
            num2: 56,
            warning1: false,
            warning2: false
          },
          {
            name1: '排气压力',
            num1: 7,
            name2: '排气温度-3',
            num2: 7,
            warning1: false,
            warning2: false
          },
          {
            name1: '吸气温度',
            num1: 12,
            name2: '过冷温度',
            num2: 12,
            warning1: true,
            warning2: false
          },
          {
            name1: '排气温度-1',
            num1: 34,
            name2: '出液温度',
            num2: 34,
            warning1: false,
            warning2: true
          }
        ]
      }
    },
    components: {
      InspectionStep,
      CrewItem
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      handleNext () {
        this.$router.push('./inspectionStepThree')
      }
    }
  }
</script>
<style lang="scss">
  .inspectionStepTwo {
    background: #F4F8FB;
    width: 100%;
    min-height: 100%;
    height: auto;

    .title {
      position: relative;
      font-family: SourceHanSansCN-Normal;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;
      text-align: center;

      .back {
        font-family: SourceHanSansCN-Normal;
        font-size: 14px;
        color: #688BA6;
        letter-spacing: 0;
        margin-left: 0.1rem;
        position: absolute;
        left: 0.1rem;
        line-height: 28px;
      }
    }

    .crew-wrapper {
      .head {
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-family: SourceHanSansCN-Bold;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
      }

      .crew-list {
        ul {
          padding: 6px 18px;
          background-color: #fff;

          li {
            margin-bottom: 8px;
            font-size: 12px;
          }
        }
      }
    }

    .btn-wrapper {
      height: 0.5rem;
      padding: 0.46rem 0 0.2rem 0;

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
        font-family: SourceHanSansCN-Regular;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.89px;
        float: right;
        margin: 0 0.2rem 0 0;
      }
    }
  }
</style>
