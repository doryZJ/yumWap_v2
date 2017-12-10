<template>
  <div class="maintenanceInfo">
    <div class="head-title">
      {{title}}
    </div>
    <div class="maintenance-content">
      <ul>
        <li>
          <div class="content-title content-check">
            <i class="fa fa-check"></i>
            <span>{{params.title1}}</span>
          </div>
          <div class="content-r">
            <div class="content-state">
              <span class="state">{{params.state1}}</span>
              <span class="time">{{params.time1}}</span>
            </div>
            <img src="../assets/images/btn_arrow_right_24x24@2x.png" alt="">
          </div>
        </li>
        <li>
          <div class="content-title content-clock">
            <i class="fa fa-clock-o"></i>
            <span>{{params.title2}}</span>
          </div>
          <div class="content-r">
            <img src="../assets/images/btn_arrow_right_24x24.png" alt="">
          </div>
        </li>
        <li>
          <div class="content-title content-clock">
            <i class="fa fa-clock-o"></i>
            <span>{{params.title3}}</span>
          </div>
          <div class="content-r">
            <img src="../assets/images/btn_arrow_right_24x24.png" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '火警系统'
      },
      params: {
        type: Object,
        default: {
          title1: '视觉检查污垢、破损、锈蚀和固定的状态',
          state1: '良好',
          time1: '2017/10/17    16:33:21',
          title2: '视觉检查污垢、破损、锈蚀和固定的状态',
          title3: '视觉检查污垢、破损、锈蚀和固定的状态'
        }
      }
    }
  }
</script>
<style lang="scss">
  .maintenanceInfo {
    .head-title {
      margin: 0.16rem 0;
      padding-left: 20px;
      text-align: left;
      font-family: SourceHanSansCN-Bold;
      font-size: 12px;
      color: #707070;
      letter-spacing: -0.5px;
    }

    .maintenance-content {
      background: #fff;
      ul {
        padding-left: 20px;

        li {
          padding: 0.24rem 0 .12rem 0;
          border-bottom: 1px solid #C8C7CC;
          display: flex;
          justify-content: space-between;

          .content-title {
            min-height: 0.32rem;
            font-size: 12px;
            display: flex;

            i {
              font-size: 14px;
              margin-top: 3px;
            }

            span {
              font-family: SourceHanSansCN-Normal;
              font-size: 12px;
              color: #707070;
              letter-spacing: -0.5px;
              display: inline-block;
              margin-left: 0.08rem;
            }
          }

          .content-check {
            i {
              color: #6FB788;
            }
          }

          .content-clock {
            i {
              color: #A8B3C3;
            }
          }

          .content-r {
            font-size: 12px;
            display: flex;
            margin-right: 5px;

            .content-state {
              text-align: right;

              .state {
                font-family: SourceHanSansCN-Bold;
                font-size: 14px;
                color: #6FB788;
                letter-spacing: -0.58px;
              }

              .time {
                font-family: HoneywellSans-Light;
                font-size: 10px;
                color: #707070;
                letter-spacing: -0.42px;
                display: block;
              }
            }

            img {
              width: 16px;
              height: 16px;
              display: inline-block;
              margin-left: 3px;
              margin-top: 3px;
            }
          }
        }
      }
    }
  }
</style>
