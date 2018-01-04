<template>
  <div class="StoreRanking">
    <div class="head">
      <img src="../assets/images/icon_energy_consumption_18x18@2x.png">
      <span>{{title}}</span>
    </div>
    <div class="rank-content clearfix">
      <div class="list">
        <p v-show="type === 0">能耗最高</p>
        <p v-show="type === 1">特级报警最多</p>
        <ul class="superList" :class="listSuperCls">
          <li v-for="(item, index) in superList" :key="index">
            <span class="rank">{{index+1}}</span>
            <span class="storename">{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="list" >
        <p v-show="type === 0">能耗最低</p>
        <p v-show="type === 1">报警总数最多</p>
        <ul class="totalList" :class="listTotalCls">
          <li v-for="(item, index) in totalList" :key="index">
            <span class="rank">{{index+1}}</span>
            <span class="storename">{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '门店排名'
      },
      type: {
        type: Number, // 0: 能量，1: 报警
        default: 0
      },
      superList: {
        type: Array,
        defalut: () => {
          return []
        }
      },
      totalList: {
        type: Array,
        defalut: () => {
          return []
        }
      }
    },
    computed: {
      listTotalCls () {
        return this.type === 0 ? 'energyListTotal' : 'alarmListTotal'
      },
      listSuperCls () {
        return this.type === 0 ? 'energyListSuper' : 'alarmListSuper'
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style lang="scss">
  .StoreRanking {
    margin: 0.1rem 0.1rem;
    padding: 0.1rem;
    background: #FFFFFF;
    box-shadow: 0 0 6px 0 rgba(53,64,77,0.10);

    .head {
      position: relative;
      align-items: center;
      height: 18px;
      font-size: 12px;

      img {
        width: 18px;
        margin: 0;
        padding: 0;
        vertical-align: middle;
      }

      span {
        font-size: 18px;
        color: #707070;
        margin-left: 5px;
        display: inline-block;
        vertical-align: middle;
      }
    }

    .rank-content {
      height: 1.8rem;
      margin-top: 0.2rem;

      .list {
        margin-left: 0.6rem;
        float: left;

        p {
          font-size: 14px;
          color: #707070;
          letter-spacing: -0.5px;
          line-height: 25px;
          margin-bottom: 5px;
        }

        ul {
          font-size: 0;

          li {
            .rank {
              width: 16px;
              height: 16px;
              border-radius: 50%;
              display: inline-block;
              text-align: center;
              line-height: 16px;
              font-size: 10px;
              color: #FFFFFF;
              margin-right: 0.1rem;
            }

            .storename {
              font-size: 12px;
              color: #707070;
              letter-spacing: -0.43px;
              line-height: 25px;
            }
          }
        }

        .alarmListSuper {
          li {
            .rank {
              background: #EE3124;
            }
          }
        }

        .alarmListTotal {
          li {
            .rank {
              background: #E56C1E;
            }
          }
        }

        .energyListSuper {
          li {
            .rank {
              background: #DE6C60;
            }
          }
        }

        .energyListTotal {
          li {
            .rank {
              background: #6FB788;
            }
          }
        }
      }
    }
  }
</style>
