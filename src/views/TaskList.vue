<template>
  <div class="taskList">
    <div class="title">任务列表</div>
    <div class="sort-wrapper">
      <div class="sort" @click="handleSort">
        <div class="triangle-down"></div>
        <span class="label">排序：</span>
        <span class="">{{sortName}}</span>
      </div>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <task-sortList></task-sortList>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import YFooter from '@/components/Footer'
  import TaskSortList from '@/components/TaskSortList'
  export default {
    data () {
      return {
        footerNav: 1,
        sortName: '全部',
        sheetVisible: false,
        closeOnClickModal: true,
        actions: []
      }
    },
    components: {
      YFooter,
      TaskSortList
    },
    methods: {
      handleSort () {
        this.sheetVisible = true
      },
      selectSort (val) {
        this.sortName = val.name
      }
    },
    mounted () {
      this.actions = [
        {
          name: '全部',
          method: this.selectSort
        },
        {
          name: '部分',
          method: this.selectSort
        }
      ]
    }
  }
</script>
<style lang="scss">
  @import url("//unpkg.com/mint-ui/lib/style.css"); 
  .taskList {
    background: #F4F8FB;
    width: 100%;
    height: 100%;

    .title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #000000;
      padding: 0.12rem 0;
    }

    .sort-wrapper {
      margin-top: 0.1rem;
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
  }
</style>
