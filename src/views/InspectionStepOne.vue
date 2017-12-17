<template>
  <transition name="slide">
    <div class="inspectionStepOne">
      <div class="title">
        <div class="back" @click="goBack"><返回</div>
        <span>巡检工单</span>
      </div>
      <inspection-step></inspection-step>
      <div class="device-wrapper">
        <div class="head">
          低温冷柜
        </div>
        <div class="device-list">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <device-item :item="item"></device-item>
            </li>
          </ul>
        </div>
      </div>
      <div class="device-wrapper">
        <div class="head">
          低温冷柜
        </div>
        <div class="device-list">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <device-item :item="item"></device-item>
            </li>
          </ul>
        </div>
      </div>
      <div class="device-wrapper">
        <div class="head">
          低温冷柜
        </div>
        <div class="device-list">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <device-item :item="item"></device-item>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn-wrapper">
        <div class="btn" @click="handleNext">下一步</div>
      </div>
    </div>
  </transition>
</template>
<script>
  import InspectionStep from '@/components/InspectionStep'
  import DeviceItem from '@/components/DeviceItem'
  export default {
    data () {
      return {
        list: [
          {
            state: 0, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '工作台冷藏冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：4.1℃',
            variety: 1, // 0:上升，1: 下降
            setup: '设定：4.0℃'
          },
          {
            state: 1, // 0: 运行，1: 待机，2: 关闭，3: 低，4: 中，5: 高
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            modulus: '温度：-11.8℃',
            variety: 0, // 0:上升，1: 下降
            setup: '设定：-12.0℃'
          }
        ]
      }
    },
    components: {
      InspectionStep,
      DeviceItem
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      handleNext () {
        this.$router.push('/inspectionStepTwo')
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

    .device-wrapper {
      .head {
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
      }

      .device-list {
        margin: 0;
        padding: 0;
        background: #fff;

        li {
          padding-left: 0.16rem;
          height: 0.6rem;
          position: relative;
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
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.89px;
        float: right;
        margin: 0 0.2rem 0 0;
      }
    }
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter {
    transform: translateX(100%);
    opacity: 1;
  }
</style>
