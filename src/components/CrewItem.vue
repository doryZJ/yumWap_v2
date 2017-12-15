<template>
  <div class="crewItem">
    <div class="left">
      <span class="name1">{{item.name1}}</span>
      <span class="num1">
        {{item.num1}}
      </span>
      <img src="../assets/images/wran_orange@2x.png" v-show="item.warning1" alt="">
      <img src="../assets/images/warn_red@2x.png" v-show="item.warning2"alt="">
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

      img {
        width: 14px;
        height: 13px;
        display: inline-block;
        margin-left: 5px;
      }
    }

    .right {
      width: 40%;
      float: left;
    }
    .name1, .name2 {
      font-size: 14px;
      color: #707070;
      letter-spacing: -0.58px;
      width: 0.68rem;
      display: inline-block;
    }

    .num1, .num2 {
      font-size: 14px;
      color: #688BA6;
      letter-spacing: -0.58px;
      line-height: 28px;
      margin-left: 0.38rem;
    }
  }
</style>
