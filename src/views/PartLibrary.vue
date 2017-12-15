<template>
  <div class="partLibrary">
    <div class="title">
      <div class="back" @click="goBack"><返回</div>
      <span>零件库</span>
      <img src="../assets/images/icon_search_18x18 copy 2.png" class="icon_search" alt="">
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
    <parts-list></parts-list>
  </div>
</template>
<script>
  import PartsList from '@/components/PartsList'
  export default {
    data () {
      return {
        filterSheetVisible: false,
        sortSheetVisible: false,
        filterActions: [],
        sortActions: [],
        filterName: '全部',
        sortName: '类别'
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
          name: '类别1',
          method: this.selectSort
        },
        {
          name: '类别2',
          method: this.selectSort
        }
      ]
    },
    components: {
      PartsList
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
  .partLibrary {
    background: #F4F8FB;
    width: 100%;
    min-height: 100%;
    height: auto;

    .title {
      position: relative;
      font-family: SourceHanSansCN-Normal;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;
      text-align: center;

      .back {
        font-family: SourceHanSansCN-Normal;
        font-size: 14px;
        color: #688BA6;
        letter-spacing: 0;
        margin-left: 0.1rem;
        position: absolute;
        left: 0.1rem;
        line-height: 28px;
      }

      .icon_search {
        position: absolute;
        width: 24px;
        height: 24px;
        right: 0.2rem;
        top: 0.12rem;
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
          font-family: SourceHanSansCN-Normal;
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
  }
</style>
