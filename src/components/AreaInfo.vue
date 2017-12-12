<template>
  <div class="areaInfo">
    <div class="info">
      <span>室外温度 / 湿度</span>
      <span>32ºC / 40%</span>
    </div>
    <div class="info">
      <span v-if="infoType === 0">可指派的维保工程师</span>
      <span v-if="infoType === 1">预留室外机位置温度 / 湿度</span>
      <span v-if="infoType === 0">24 人（共 78 人）</span>
      <span v-if="infoType === 1">32ºC / 40%</span>
    </div>
    <div class="info">
      <span>实时人员数量</span>
      <span>1416 人</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      infoType: { // 0:区域首页， 1: 门店首页
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        obj: {
        }
      }
    }
  }
</script>
<style lang="scss">
  .areaInfo {
    margin: 0.1rem 0.1rem;
    border: 1px solid #D0D0D0;
    padding: 0.1rem;

    .info {
      margin-bottom: 0.07rem;
      height: 18px;
      font-size: 12px;

      span {
        font-family: SourceHanSansCN-Normal;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.25px;
        line-height: 18px;
      }

      span:nth-of-type(1) {
        float: left;
      }

      span:nth-of-type(2) {
        float: right;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
