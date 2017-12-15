<template>
  <div class="TicketInfo">
    <div class="info-title">
      工单信息
    </div>
    <ul class="list">
      <li>
        <div class="info">
          <span class="label">
            工单名称
          </span>
          <span class="value">
            {{info.name}}
          </span>
        </div>
        <div class="info">
          <span class="label">
            门店名称
          </span>
          <span class="value">
            {{info.storeName}}
          </span>
        </div>
        <div class="info">
          <span class="label">
            工单类型
          </span>
          <span class="value">
            {{info.type}}
          </span>
        </div>
        <div class="info">
          <span class="label">
            紧急程度
          </span>
          <span class="value">
            {{info.emergencyLevel}}
          </span>
        </div>
        <div class="info">
          <span class="label">
            工单状态
          </span>
          <span class="value">
            {{info.state}}
          </span>
        </div>
        <div class="info">
          <span class="label">
            工单编号
          </span>
          <span class="value">
            {{info.no}}
          </span>
        </div>
        <div class="info">
          <span class="label">
            工单描述
          </span>
          <span class="value">
            {{info.description}}
          </span>
        </div>
        <div class="info">
          <span class="label">
            工单创建时间
          </span>
          <span class="value">
            {{info.createTime}}
          </span>
        </div>
        <div class="info">
          <span class="label">
            工单创建者
          </span>
          <span class="value">
            {{info.createBy}}
          </span>
        </div>
        <div class="info">
          <span class="label">
            维保公司
          </span>
          <span class="value">
            {{info.maintenanceCompany}}
          </span>
        </div>
        <div class="info">
          <span class="label">
            维保工程师
          </span>
          <span class="value">
            {{info.maintenanceEngineer}}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: {
        name: '肯德基洛川店-空调维修',
        storeName: '肯德基洛川店',
        type: '维修',
        emergencyLevel: '一般',
        state: '进行中',
        no: 'WL-20171017-9001',
        description: '空调室内机不启动，错误代码：E144972',
        createTime: '2017/10/17    16:30:05',
        createBy: '高大强    ID:1715551',
        maintenanceCompany: '上海维保有限公司',
        maintenanceEngineer: '李建国    ID:361781'
      }
    }
  }
}
</script>
<style lang="scss">
  .TicketInfo {
    .info-title {
      margin: 0.16rem 0;
      padding-left: 20px;
      text-align: left;
      font-size: 12px;
      color: #707070;
      letter-spacing: -0.5px;
    }

    .list {
      background: #fff;
      li {
        list-style: none;
        padding-left: 20px;

        .info {
          padding: 13px 20px 13px 0;
          border-bottom: 1px solid #C8C7CC;
          display: flex;
          justify-content: space-between;

          .label {
            font-size: 12px;
            color: #707070;
            letter-spacing: -0.5px;
          }

          .value {
            font-size: 12px;
            color: #688BA6;
            letter-spacing: -0.5px;
          }
        }
      }
    }
  }
</style>
