<template>
  <div class="commonProblem">
    <div class="title">
      <div class="back" @click="goBack"><返回</div>
      <span>常见问题</span>
    </div>
    <div class="search-wrapper">
      <input type="text" placeholder="搜索问题关键字...">
      <i class="fa fa-search"></i>
    </div>
    <div class="screen_wrapper clearfix">
      <div class="sort sort1" @click="handleFilter">
        <div class="triangle-down"></div>
        <span class="label">筛选：</span>
        <span class="">{{filterName}}</span>
      </div>
      <mt-actionsheet :actions="filterActions" v-model="filterSheetVisible"></mt-actionsheet>
      <div class="sort sort2" @click="handleSort">
        <div class="triangle-down"></div>
        <span class="label">排序：</span>
        <span class="">{{sortName}}</span>
      </div>
      <mt-actionsheet :actions="sortActions" v-model="sortSheetVisible"></mt-actionsheet>
    </div>
    <ul class="problem-list">
      <li v-for="(item, index) in problemList" :key="index" class="problem-item clearfix">
        <span class="title">{{item}}</span>
        <img src="../assets/images/btn_arrow_right_24x24@2x.png" alt="">
      </li>
    </ul>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import YFooter from '@/components/Footer'
  export default {
    data () {
      return {
        footerNav: 3,
        filterSheetVisible: false,
        sortSheetVisible: false,
        filterActions: [],
        sortActions: [],
        filterName: '全部',
        sortName: '时间',
        problemList: [
          '冷凝风机温度异常的几种常见原因',
          '冷凝风机温度异常的几种常见原因',
          '冷凝风机温度异常的几种常见原因',
          '冷凝风机温度异常的几种常见原因',
          '冷凝风机温度异常的几种常见原因',
          '冷凝风机温度异常的几种常见原因',
          '冷凝风机温度异常的几种常见原因',
          '冷凝风机温度异常的几种常见原因',
          '冷凝风机温度异常的几种常见原因',
          '冷凝风机温度异常的几种常见原因',
          '冷凝风机温度异常的几种常见原因'
        ]
      }
    },
    created () {
      this.filterActions = [
        {
          name: '全部',
          method: this.selectFilter
        },
        {
          name: '部分',
          method: this.selectFilter
        }
      ]
      this.sortActions = [
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
    components: {
      YFooter
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      selectFilter (val) {
        this.filterName = val.name
      },
      selectSort (val) {
        this.sortName = val.name
      },
      handleFilter () {
        this.filterSheetVisible = true
      },
      handleSort () {
        this.sortSheetVisible = true
      }
    }
  }
</script>
<style lang="scss">
  .commonProblem {
    background: #F4F8FB;
    width: 100%;
    min-height: 100%;
    height: auto;
    padding-bottom: 0.59rem;

    .title {
      position: relative;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;
      text-align: center;

      .back {
        font-size: 14px;
        color: #688BA6;
        letter-spacing: 0;
        margin-left: 0.1rem;
        position: absolute;
        left: 0.1rem;
        line-height: 28px;
      }
    }

    .search-wrapper {
      height: 0.45rem;
      background: #FFFFFF;
      border: 1px solid #D0D0D0;
      box-sizing: border-box;
      padding: 0.15rem 0.06rem;
      margin: 0.16rem 8px;
      display: flex;
      align-items: center;

      i {
        font-size: 18px;
        color: #8D8D94;
        display: inline;
        margin-right: 8px;
        float: right;
      }

      input {
        flex: 1;
        font-size: 16px;
        color: #8D8D94;
        letter-spacing: -0.5px;
        border: 0;
        outline: none;
      }
    }

    .screen_wrapper {
      width: 2.5rem;
      height: 0.18rem;
      margin: 20px auto 24.5px;

      .sort {
        font-size: 12px;
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

      .sort1 {
        float: left;
      }

      .sort2 {
        float: right;
      }
    }

    .problem-list {
      background: #fff;
      padding-left: 22px;

      li {
        padding: 18px 22px 18px 0;
        height: 24px;
        border-bottom: 1px solid #C8C7CC;
        font-size: 0;

        .title {
          font-size: 14px;
          color: #707070;
          letter-spacing: -0.58px;
          font-weight: bold;
          float: left;
          padding: 0;
          line-height: 24px;
        }

        img {
          float: right;
          width: 12px;
          height: 14px;
          margin-top: 5px;
        }
      }
    }
  }
</style>
