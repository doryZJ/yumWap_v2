
<template>
  <div class="repairOrders">
    <div class="title">
      <div class="overview">
        <img src="../assets/images/icon_overview.png" alt="">
        <span>总览</span>
      </div>
      <span>工单</span>
      <div class="create">
        <img src="../assets/images/Add@2x.png" alt="">
        <span>创建</span>
      </div>
    </div>
    <div class="tab-wrapper">
      <div class="tab" :class='{"active": tabActive === 0}' @click="handleTab(0)">
        待审批
        <span class="badge">3</span>
      </div>
      <div class="tab" :class='{"active": tabActive === 1}' @click="handleTab(1)">待检</div>
      <div class="tab tab-last" :class='{"active": tabActive === 2}' @click="handleTab(2)">已检</div>
    </div>
    <div class="sort-wrapper">
      <div class="sort" @click="handleSort">
        <div class="triangle-down"></div>
        <span class="label">排序：</span>
        <span class="">{{sortName}}</span>
      </div>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <div class="vueCalendar-wrapper">
      <calendar :view="view" :decorate="decorate" :sub="sub" 
      :current-view.sync="currentView" 
      :start-date.sync="startDate" 
      :indicator="indicator" :start-monday="true" 
      @prev="prev" @next="next" @today="today"
      @selectDay="selectDay"
      :selected="selected"
      @handleStartDate="handleStartDate">
      </calendar>
    </div>
    <order-sortList></order-sortList>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import OrderSortList from '@/components/OrderSortList'
  import YFooter from '@/components/Footer'
  import moment from 'moment'
  import calendar from '@/components/calendar'
  export default {
    data () {
      return {
        footerNav: 1,
        tabActive: 0,
        sortName: '时间',
        sheetVisible: false,
        actions: [],
        selectdate: '2018-1-08',
        view: 'week',
        decorate: {},
        sub: {
          '2016-12-22': {
            content: '休',
            color: '#31b29c'
          },
          '2016-12-27': {
            content: '班',
            color: '#eb4f04'
          }
        },
        currentView: {},
        indicator: {},
        startDate: new Date(),
        selected: new Date()
      }
    },
    components: {
      OrderSortList,
      YFooter,
      calendar
    },
    mounted () {
      this.actions = [
        {
          name: '时间',
          method: this.selectSort
        },
        {
          name: '空间',
          method: this.selectSort
        }
      ]
    },
    created () {
      this.dealWithIndicator(this.startDate)
    },
    methods: {
      handleTab (val) {
        this.tabActive = val
      },
      handleSort () {
        this.sheetVisible = true
      },
      selectSort (val) {
        this.sortName = val.name
      },
      callback (i) {
        console.log(i)
      },
      selectDay (day) {
        this.selected = day
        alert(day)
        console.log('day', day)
      },
      handleStartDate (date) {
        this.startDate = date
      },
      dealWithIndicator (startDate) {
        let indicator = {}
        if (startDate.getMonth() <= 6) {
          indicator.title = startDate.getFullYear() + '上学期'
        } else {
          indicator.title = startDate.getFullYear() + '下学期'
        }
        this.indicator = indicator
      },
      changeView () {
        if (this.view === 'week') {
          this.view = 'month'
        } else if (this.view === 'month') {
          this.view = 'week'
        }
      },
      addEvent () {
        let flag = window.confirm('是否给明天添加一条事件')
        // let today = new Date()
        if (flag) {
          this.decorate = Object.assign({}, this.decorate, {
            [moment(new Date()).add(1, 'day').format('YYYY-MM-DD')]: true
          })
        }
      },
      prev () {
        console.log('prev clicked')
      },
      next () {
        console.log('next clicked')
      },
      today () {
        console.log('today clicked')
      }
    }
  }
</script>
<style lang="scss">
  .repairOrders {
    width: 100%;
    height: 100%;
    background: #F4F8FB;
    padding-bottom: 0.59rem;

    .title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;

      .overview {
        position: absolute;
        left: 15px;
        top: 0.12rem;
        height: 16px;

        img {
          width: 16px;
          height: 16px;
          display: inline-block;
          margin-right: 3px;
          vertical-align: middle;
        }

        span {
          font-size: 14px;
          color: #698CA7;
          letter-spacing: -0.78px;
          vertical-align: middle;
        }
      }

      .create {
        position: absolute;
        right: 15px;
        top: 0.12rem;
        height: 16px;

        img {
          width: 16px;
          height: 16px;
          display: inline-block;
          margin-right: 3px;
          vertical-align: middle;
        }

        span {
          font-size: 14px;
          color: #698CA7;
          letter-spacing: -0.78px;
          vertical-align: middle;
        }
      }
    }

    .tab-wrapper {
      margin: 0.2rem 16px 0;
      height: 0.3rem;
      border: 1px solid #00BFB3;
      border-radius: 4px;
      box-sizing: content-box;
      background: #fff;

      &:after {
        content: '';
        clear: both;
      }

      .tab {
        width: 33.333333333333333333333333%;
        font-size: 13px;
        color: #00BFB3;
        letter-spacing: -0.08px;
        text-align: center;
        height: 0.3rem;
        line-height: 0.3rem;
        float: left;
        position: relative;

        .badge {
          width: 16px;
          height: 16px;
          background: #FF8041;
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          line-height: 16px;
          font-size: 10px;
          color: #FFFFFF;
          letter-spacing: 0;
          position: absolute;
          top: 2px;
        }
      }

      .tab-last {
        float: right;
      }

      .active {
        background: #00BFB3;
        font-size: 13px;
        color: #FFFFFF;
        letter-spacing: -0.08px;
      }
    }

    .sort-wrapper {
      margin: 0.2rem 0 0.1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0;

      .triangle-down {
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 8px solid #D0D0D0;
        display: inline-block;
        margin-right: 5px;
      }

      span {
        font-size: 12px;
        color: #707070;
      }
    }

    .vueCalendar-wrapper {
      font-size: 14px;

      .vue-calendar {
        background: #fff;
      }

      .vue-calendar-week {
        background-color: #fff;
      }

      .vue-calendar-days {
        background-color: #fff;
      }

      .vue-calendar-days .select {
        color: #707070!important;
      }

      .vue-calendar-days .select.on {
        background-color: #698CA7!important;
        border-color: #698CA7!important;
        font-size: 12px;
        color: #FFFFFF!important;
      }

      .vue-calendar-week .week-day {
        color: #707070!important;
      }
    }
  }
</style>
