<template>
  <div class="performance">
    <div class="performance-head clearfix">
      <span class="number">单数</span>
      <span class="score">评分</span>
    </div>
    <ul class="performance-list">
      <li v-for="(item, index) in list" :key="index">
        <span class="count">{{item.count}}单</span>
        <div class="level">
          <span class="level3" v-show="item.count === 3"></span>
          <span class="level4" v-show="item.count === 4"></span>
          <span class="level5" v-show="item.count === 5"></span>
        </div>
        <span class="staff">{{item.staff}}</span>
        <div class="star-wrap">
          <el-rate v-model="item.star" void-color="#D8D8D8"></el-rate>
        </div>
        <span class="score">{{item.score}}星</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        default: () => {
          return []
        }
      }
    }
  }
</script>
<style lang="scss">
  .performance {
    margin: 0 0.1rem;

    .performance-head {
      margin-top: 0.2rem;
      height: 25px;

      span {
        font-size: 12px;
        color: #707070;
        letter-spacing: -0.43px;
        line-height: 25px;
      }

      .number {
        float: left;
      }

      .score {
        float: right;
      }
    }

    .performance-list {
      font-size: 0;

      li {
        height: 10px;
        padding: 8px 0;
        font-size: 0;

        span {
          font-size: 12px;
          color: #707070;
          letter-spacing: -0.43px;
          line-height: 10px;
          display: inline-block;
        }

        .count {
          width: 10%;
          float: left;
        }

        .level {
          width: 32%;
          height: 10px;
          display: inline-block;
          font-size: 0;
          text-align: right;
          padding: 0 10px;
          float: left;
        }

        .staff {
          width: 10%;
          float: left;
          text-align: center;
        }

        .level3 {
          display: inline-block;
          width: 60%;
          height: 10px;
          background: #6FB788;
        }

        .level4 {
          display: inline-block;
          width: 80%;
          height: 10px;
          background: #E6B634;
        }

        .level5 {
          display: inline-block;
          width: 100%;
          height: 10px;
          background: #DE6C60;
        }

        .star-wrap {
          display: inline-block;
          height: 10px;
          font-size: 0;
          padding: 0 0 0 10px;
          float: left;

          .el-rate {
            float: right;

            .el-rate__icon {
              font-size: 12px;
            }

            .el-icon-star-on {
              color: #6FB788!important;
            }

            .el-icon-star-off {
              color: #D8D8D8!important;

              &::before {
                content: "\E637";
              }
            }
          }
        }

        .score {
          width: 10%;
          display: inline-block;
          text-align: right;
          float: right;
        }
      }
    }
  }
</style>
