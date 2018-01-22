<template>
  <div class="alarmList">
    <div class="head">
      <img src="../assets/images/icon_energy_consumption_18x18@2x.png">
      <span>报警</span>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <alarm-item :item="item"></alarm-item>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import AlarmItem from './AlarmItem'
  export default {
    data () {
      return {
        list: [
          {
            state: 3,
            name: '冷冻库 01 能耗异常',
            model: 'FEME0290',
            date: '2017/12/10  16:00'
          },
          {
            state: 2,
            name: '冷冻库 01 能耗异常',
            model: 'FEME0290',
            date: '2017/12/10  16:00'
          },
          {
            state: 3,
            name: '冷冻库 01 能耗异常',
            model: 'FEME0290',
            date: '2017/12/10  16:00'
          },
          {
            state: 3,
            name: '冷冻库 01 能耗异常',
            model: 'FEME0290',
            date: '2017/12/10  16:00'
          },
          {
            state: 2,
            name: '冷冻库 01 能耗异常',
            model: 'FEME0290',
            date: '2017/12/10  16:00'
          },
          {
            state: 2,
            name: '冷冻库 01 能耗异常',
            model: 'FEME0290',
            date: '2017/12/10  16:00'
          }
        ]
      }
    },
    components: {
      AlarmItem
    }
  }
</script>
<style lang="scss">
  .alarmList {
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

    .list {
      margin-top: 0.2rem;
    }
  }
</style>
