<template>
  <div class="crewItem">
    <div class="left">
      <span class="name1">{{item.name1}}</span>
      <span class="num1">
        {{item.num1}}
      </span>
      <img src="../assets/images/icon_triangle_up_6x6.png" v-show="item.warning1" alt="">
      <img src="../assets/images/icon_triangle_down_6x6.png" v-show="item.warning2"alt="">
    </div>
    <div class="right">
      <span class="name2">{{item.name2}}</span>
      <span class="num2">{{item.num2}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      item: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>
<style lang="scss">
  .crewItem {
    width: 100%;
    height: 20px;

    &::after {
      content: '';
      clear: both;
    }
    .left {
      width: 60%;
      float: left;
    }

    .right {
      width: 40%;
      float: left;
    }
    .name1, .name2 {
      font-family: SourceHanSansCN-Light;
      font-size: 14px;
      color: #707070;
      letter-spacing: -0.58px;
      width: 0.68rem;
      display: inline-block;
    }

    .num1, .num2 {
      font-family: SourceHanSansCN-Regular;
      font-size: 14px;
      color: #688BA6;
      letter-spacing: -0.58px;
      line-height: 28px;
      margin-left: 0.38rem;
    }
  }
</style>
