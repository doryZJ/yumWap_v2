<template>
  <div class="rest-list">
    <div class="search-wrapper">
      <i class="fa fa-search"></i>
      <input type="text" placeholder="搜索">
    </div>
    <div class="rest">
      <scroll class="list-wrapper">
        <ul class="list" ref="list">
          <li v-for="i in 20" :key="i">肯德基崇明崇明餐厅</li>
        </ul>
      </scroll>
      <div class="list-shortcut">
        <ul>
          <li v-for="(item, index) in shortcutList" :key="index">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Scroll from './Scroll'
  export default {
    data () {
      return {
        shortcutList: [
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'
        ]
      }
    },
    components: {
      Scroll
    },
    mounted () {
      // const elList = this.$refs.listWrapper
      // console.log(elList)
      // let scroll = new BScroll(elList, {
      //   probeType: 1
      // })
    }
  }
</script>
<style lang="scss">
  .rest-list {
    height: calc(100% - 1rem);
    overflow: hidden;

    .search-wrapper {
      height: 0.36rem;
      background: #FFFFFF;
      border: 1px solid #D0D0D0;
      box-sizing: border-box;
      padding: 0.06rem;
      margin: 0.16rem 8px;
      display: flex;
      align-items: center;

      i {
        font-size: 18px;
        color: #8D8D94;
        display: inline;
        margin-right: 8px;
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

    .rest {
      width: 100%;
      height: calc(100% - 1rem);
      position: relative;
    }

    .list-wrapper {
      width: 100%;
      height: 100%;
      border-top: 1px solid #AAAAAA;
      background: #fff;
      position: relative;
      overflow: hidden;

      ul.list {
        width: 100%;
        height: auto;
        margin: 0 auto;
        padding: 0 16px;
        box-sizing: border-box;

        li {
          width: 100%;
          height: 0.44rem;
          border-bottom: 1px solid #AAAAAA;
          font-size: 17px;
          color: #000000;
          letter-spacing: -0.3px;
          list-style: none;
          display: flex;
          align-items: center;

          &:last-child {
            border-bottom: 0px;
          }
        }
      }
    }

    .list-shortcut {
        position: absolute;
        top: 10px;
        width: 10px;
        right: 3px;
        text-align: center;
        z-index: 30;

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          font-size: 0;

          li {
            font-size: 12px;
            line-height: 15px;
            color: #00BFB3;
          }
        }
      }
  }
</style>


