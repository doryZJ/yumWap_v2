<template>
  <div class="inspectionList">
    <!-- <scroll class="list-wrapper"> -->
      <div class="list-date">{{date[0]}}</div>
      <ul>
        <li v-for="(item, index) in list" :key="index" @click.prevent="handleItem">
          <inspection-item :item="item"></inspection-item>
        </li>
      </ul>
      <div class="list-date">{{date[1]}}</div>
      <ul>
        <li v-for="(item, index) in list" :key="index" @click.prevent="handleItem">
          <inspection-item :item="item"></inspection-item>
        </li>
      </ul>
    <!-- </scroll> -->
  </div>
</template>
<script>
  // import Scroll from './Scroll'
  import InspectionItem from './InspectionItem'
  export default {
    data () {
      return {
        date: [
          '12月10日 (今天）',
          '12月11日'
        ],
        list: [
          {
            state: 0, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 1, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          },
          {
            state: 2, // 0: 日，1: 周，2: 月
            name: '冷链系统日检',
            store: '永辉1店',
            date: '2017/10/16'
          }
        ]
      }
    },
    components: {
      // Scroll,
      InspectionItem
    },
    methods: {
      handleItem () {
        this.$router.push('/inspectionStepOne')
      }
    }
  }
</script>
<style lang="scss">
  .inspectionList {
    margin-top: 0.11rem;
    font-size: 0;
    height: calc(100% - 1.9rem);

    .list-wrapper {
      width: 100%;
      height: 100%;
      background: #F4F8FB;
      position: relative;
      overflow: hidden;
    }

    .list-date {
      padding: 13px 0 13px 18px;
      font-size: 14px;
      color: #707070;
      letter-spacing: -0.58px;
    }

    ul {
      margin: 0;
      padding: 0;
      background: #fff;

      li {
        padding-left: 0.16rem;
        height: 0.6rem;
        position: relative;

        // &:last-child {
        //   .item {
        //     border-bottom: 0;
        //   }
        // }
      }
    }
  }
</style>
