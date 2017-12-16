<template>
  <div class="partsList">
    <!-- <scroll class="list-wrapper"> -->
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <span class="name">{{item.name}}</span>
          <div class="count">
            <img src="../assets/images/minus@2x.png" v-show="item.count > 0" :class="{'minus': item.count === 1}" @click="handleReduce(index)" alt="">
            <span class="num" v-show="item.count > 0">x{{item.count}}</span>
            <img src="../assets/images/Add@2x.png" alt="" @click="handleAdd(index)">
          </div>
        </li>
      </ul>
    <!-- </scroll> -->
  </div>
</template>
<script>
  // import Scroll from './Scroll'
  export default {
    data () {
      return {
        list: [
          {
            name: '气缸阀板密封垫床',
            count: 1
          },
          {
            name: '制冷剂',
            count: 0
          },
          {
            name: '气缸阀板密封垫床',
            count: 0
          },
          {
            name: '制冷剂',
            count: 0
          },
          {
            name: '气缸阀板密封垫床',
            count: 0
          },
          {
            name: '制冷剂',
            count: 0
          },
          {
            name: '气缸阀板密封垫床',
            count: 0
          },
          {
            name: '制冷剂',
            count: 0
          },
          {
            name: '气缸阀板密封垫床',
            count: 0
          },
          {
            name: '制冷剂',
            count: 0
          },
          {
            name: '气缸阀板密封垫床',
            count: 0
          },
          {
            name: '制冷剂',
            count: 0
          },
          {
            name: '气缸阀板密封垫床',
            count: 0
          },
          {
            name: '制冷剂',
            count: 0
          }
        ]
      }
    },
    components: {
      // Scroll
    },
    methods: {
      handleAdd (index) {
        this.list[index].count++
      },
      handleReduce (index) {
        this.list[index].count--
      }
    }
  }
</script>
<style lang="scss">
  .partsList {
    margin-top: 0.35rem;
    font-size: 0;
    height: calc(100% - 1.82rem);
    overflow: hidden;

    .list-wrapper {
      width: 100%;
      height: 100%;
      background: #F4F8FB;
      position: relative;
      overflow: hidden;
    }

    ul {
      background: #fff;
      padding-left: 0.16rem;
      height: 100%;
      overflow: auto;
      
      li {
        padding: 0.2rem 0;
        border-bottom: 1px solid #C8C7CC;
        height: 0.2rem;
        justify-content: space-between;
        font-size: 0;

        &::after {
          content: '';
          clear: both;
        }

        .name {
          font-size: 14px;
          color: #707070;
          letter-spacing: -0.58px;
          line-height: 0.2rem;
          float: left;
        }

        .count {
          float: right;
          margin-right: 0.23rem;

          img {
            width: 20px;
            height: 20px;
            display: inline-block;
            vertical-align: middle;
          }

          .num {
            font-size: 14px;
            color: #688BA6;
            letter-spacing: -0.58px;
            line-height: 0.2rem;
            margin: 0 0.13rem;
            vertical-align: middle;
          }

          .minus {
            opacity: 0.5;
          }
        }
      }
    }
  }
</style>
