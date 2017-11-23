<template>
  <div class="repairApply">
    <div class="circle-wrapper"></div>
    <div class="repairList">
      <ul>
        <li v-for="(item, index) in list">
          <span class="state"></span>
          <span class="repairName">{{item.name}}</span>
          <span class="repairCount">{{item.count}}件</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '常规维修申请',
            count: '14'
          },
          {
            name: '较紧急维修申请',
            count: '6'
          },
          {
            name: '紧急维修申请',
            count: '4'
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  .repairApply {
    margin: 0.1rem 0.1rem;
    background: #FFFFFF;
    box-shadow: 0 0 6px 0 rgba(53,64,77,0.10);
    padding: 0.1rem;
    box-sizing: border-box;
    display: flex;

    .circle-wrapper {
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0.16rem;
    }

    .repairList {
      margin: 0.08rem 0;
      flex: 1;

      ul {
        margin: 0;
        padding: 0;

        li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.16rem;

          .state {
            width: 6px;
            height: 24px;
            margin-right: 0.14rem;
          }

          .repairName {
            height: 24px;
            line-height: 24px;
            font-family: SourceHanSansCN-Normal;
            font-size: 14px;
            color: #707070;
            letter-spacing: -0.25px;
          }

          .repairCount {
            height: 24px;
            line-height: 24px;
            font-family: SourceHanSansCN-Normal;
            font-size: 14px;
            color: #707070;
            letter-spacing: -0.22px;
          }

          &:nth-of-type(1) {
            .state {
              background: #6FB788;
            }
          }

          &:nth-of-type(2) {
            .state {
              background: #E6B634;
            }
          }

          &:nth-of-type(3) {
            margin-bottom: 0;
            .state {
              background: #DE6C60;
            }
          }
        }
      }
    }
  }
</style>
