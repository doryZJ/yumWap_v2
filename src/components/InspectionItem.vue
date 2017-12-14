<template>
  <div class="InspectionItem">
    <div class="item">
      <div class="item-left">
        <span class="icon" v-show="item.state === 0">日</span>
        <span class="icon" v-show="item.state === 1">周</span>
        <span class="icon" v-show="item.state === 2">月</span>
        <span class="icon icon-anxious" v-show="item.state === 3">急</span>
        <span class="icon icon-in" v-show="item.state === 4">中</span>
        <span class="icon icon-general" v-show="item.state === 5">普</span>
        <div class="product">
          <p>{{item.name}}</p>
          <span>{{item.store}}</span>
        </div>
      </div>
      <div class="item-right">
        <div class="modulus">
          <div class="setup" v-show="item.date">
            {{item.date}}
          </div>
        </div>
        <div class="warning">
          <img src="../assets/images/Gray Copy 12.png" alt="">
        </div>
      </div>
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
  .InspectionItem {
  }
</style>
