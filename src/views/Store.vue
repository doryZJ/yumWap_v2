<template>
  <div class="store-view">
    <div class="title">
      <span>门店</span>
    </div>
    <div class="sort-wrapper">
      <div class="sort" @click="handleSort">
        <div class="triangle-down"></div>
        <span class="label">排序：</span>
        <span class="">{{sortName}}</span>
      </div>
    </div>
    <ul class="storeList">
      <li v-for="(item, index) in storeList" :key="index" class="clearfix">
        <div class="title-wrap">
          <span class="icon">{{index + 1}}</span>
          <span class="title">{{item.name}}</span>
        </div>
        <span class="price">{{item.price}}万元</span>
      </li>
    </ul>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <y-footer :nav="footerNav"></y-footer>
  </div>
</template>
<script>
  import YFooter from '@/components/Footer'
  export default {
    data () {
      return {
        footerNav: 4,
        sortName: '由高到低',
        sheetVisible: false,
        actions: [],
        storeList: [
          {
            name: '浦东一号',
            price: '2.4'
          },
          {
            name: '浦东二号',
            price: '2.4'
          },
          {
            name: '浦东号',
            price: '2.4'
          },
          {
            name: '浦东一号',
            price: '2.4'
          },
          {
            name: '浦东一号',
            price: '2.4'
          },
          {
            name: '浦东一号',
            price: '2.4'
          },
          {
            name: '浦东一号',
            price: '2.4'
          },
          {
            name: '浦东一号',
            price: '2.4'
          },
          {
            name: '浦东一号',
            price: '2.4'
          },
          {
            name: '浦东一号',
            price: '2.4'
          },
          {
            name: '浦东一号',
            price: '2.4'
          },
          {
            name: '浦东一号',
            price: '2.4'
          },
          {
            name: '浦东一号',
            price: '2.4'
          },
          {
            name: '浦东一号',
            price: '2.4'
          }
        ]
      }
    },
    mounted () {
      this.actions = [
        {
          name: '由高到低',
          method: this.selectSort
        },
        {
          name: '由低到高',
          method: this.selectSort
        }
      ]
    },
    components: {
      YFooter
    },
    methods: {
      handleSort () {
        this.sheetVisible = true
      },
      selectSort (val) {
        this.sortName = val.name
      }
    }
  }
</script>
<style lang="scss">
  .store-view {
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

    .storeList {
      padding: 20px;
      background: #FFFFFF;
      box-shadow: 0 0 6px 0 rgba(53,64,77,0.10);
      font-size: 0;

      li {
        margin-top: 10px;
        height: 16px;

        .title-wrap {
          float: left;

          .icon {
            width: 16px;
            height: 16px;
            text-align: center;
            line-height: 16px;
            background: #707070;
            color: #fff;
            margin-right: 10px;
            display: inline-block;
            border-radius: 50%;
            font-size: 12px;
          }

          .title {
            font-size: 14px;
            color: #707070;
          }
        }

        .price {
          float: right;
          font-size: 14px;
          color: #707070;
        }
      }
    }
  }
</style>
