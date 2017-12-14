<template>
  <div class="inspectionStepThree">
    <div class="title">
      <div class="back" @click="goBack"><返回</div>
      <span>巡检工单</span>
    </div>
    <inspection-step :step="step"></inspection-step>
    <div class="outer-wrapper">
      <div class="head">
        冷凝风机
      </div>
      <div class="outer-content">
        <div class="evaluate">
          <p>1. 确认风机是否正常工作，有无异常声音和振动</p>
          <div class="select-box clearfix">
            <div class="select select1" @click="handleSelect('select1', 0)">
              <span class="icon">
                <i v-show="select1 === 0"></i>
              </span>
              <span class="text">通过</span>
            </div>
            <div class="select select2" @click="handleSelect('select1', 1)">
              <span class="icon">
                <i v-show="select1 === 1"></i>
              </span>
              <span class="text">不通过</span>
            </div>
          </div>
        </div>
        <div class="evaluate">
          <p>2. 确认外部金属网的固定螺丝有无松动脱落</p>
          <div class="select-box clearfix">
            <div class="select select1" @click="handleSelect('select2', 0)">
              <span class="icon">
                <i v-show="select2 === 0" ></i>
              </span>
              <span class="text">通过</span>
            </div>
            <div class="select select2" @click="handleSelect('select2', 1)">
              <span class="icon">
                <i v-show="select2 === 1"></i>
              </span>
              <span class="text">不通过</span>
            </div>
          </div>
          <div class="desc-wrapper">
            <textarea name="" id="desc">描述（可选）</textarea>
            <img src="../assets/images/camera@2x.png" alt="" @click="handleCamera">
          </div>
        </div>
      </div>
    </div>
    <div class="outer-wrapper">
      <div class="head">
        冷凝风机
      </div>
      <div class="outer-content">
        <div class="evaluate">
          <p>1. 确认风机是否正常工作，有无异常声音和振动</p>
          <div class="select-box clearfix">
            <div class="select select1" @click="handleSelect('select3', 0)">
              <span class="icon">
                <i v-show="select3 === 0"></i>
              </span>
              <span class="text">通过</span>
            </div>
            <div class="select select2" @click="handleSelect('select3', 1)">
              <span class="icon">
                <i v-show="select3 === 1"></i>
              </span>
              <span class="text">不通过</span>
            </div>
          </div>
        </div>
        <div class="evaluate">
          <p>2. 确认外部金属网的固定螺丝有无松动脱落</p>
          <div class="select-box clearfix">
            <div class="select select1" @click="handleSelect('select4', 0)">
              <span class="icon">
                <i v-show="select4 === 0"></i>
              </span>
              <span class="text">通过</span>
            </div>
            <div class="select select2" @click="handleSelect('select4', 0)">
              <span class="icon">
                <i v-show="select4 === 1"></i>
              </span>
              <span class="text">不通过</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="outer-wrapper">
      <div class="head">
        电磁开关
      </div>
      <div class="outer-content">
        <div class="evaluate">
          <p>1. 目测有无异常变色损伤</p>
          <div class="select-box clearfix">
            <div class="select select1"  @click="handleSelect('select5', 0)">
              <span class="icon">
                <i v-show="select5 === 0"></i>
              </span>
              <span class="text">通过</span>
            </div>
            <div class="select select2"  @click="handleSelect('select5', 0)">
              <span class="icon">
                <i v-show="select5 === 1"></i>
              </span>
              <span class="text">不通过</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <div class="btn btn-prev" @click="handlePrev">上一步</div>
      <div class="btn btn-next" @click="handleNext">下一步</div>
    </div>
  </div>
</template>
<script>
import InspectionStep from '@/components/InspectionStep'
export default {
  data () {
    return {
      step: 3,
      select1: 0, // 0:通过，1:不通过
      select2: 0, // 0:通过，1:不通过
      select3: 0, // 0:通过，1:不通过
      select4: 0, // 0:通过，1:不通过
      select5: 0, // 0:通过，1:不通过
      // PHOTOLIBRARY 或 0 打开照片库
      // CAMERA 或 1 打开本机相机
      // SAVEDPHOTOALBUM 或 2 打开已保存的相册e
      mySourceType: 1
    }
  },
  components: {
    InspectionStep
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    handlePrev () {
      this.$router.go(-1)
    },
    handleNext () {
      this.$router.push('/inspectionStepFour')
    },
    handleSelect (select, val) {
      switch (select) {
        case 'select1' :
          this.select1 = val
          break
        case 'select2' :
          this.select2 = val
          break
        case 'select3' :
          this.select3 = val
          break
        case 'select4' :
          this.select4 = val
          break
        case 'select5' :
          this.select5 = val
          break
      }
    },
    handleCamera () {
      /*eslint-disable*/
      navigator.camera.getPicture(this.onSuccess, this.onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        sourceType: this.mySourceType
      })
      /*eslint-enable*/
    },
    onSuccess (val) {
      alert(val)
    },
    onFail () {
    }
  }
}
</script>
<style lang="scss">
  .inspectionStepThree {
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
    }

    .outer-wrapper {
      .head {
        margin: 0.28rem 0 0.16rem 0.16rem;
        font-family: SourceHanSansCN-Bold;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
      }

      .outer-content {
        background: #fff;
        padding-left: 20px;

        .evaluate {
          padding: 0.15rem 0;
          border-bottom: 1px solid #C8C7CC;

          p {
            padding: 0rem 0 0.13rem 0;
            font-family: SourceHanSansCN-Normal;
            font-size: 12px;
            color: #707070;
            letter-spacing: -0.5px;
          }

          .select-box {
            height: 20px;
            .select {
              font-size: 12px;
              float: left;

              .icon {
                width: 18px;
                height: 18px;
                border: 1px solid #C7C7CD;
                border-radius: 50%;
                text-align: center;
                line-height: 18px;
                vertical-align: middle;
                font-size: 12px;
                display: inline-block;
                position: relative;

                i {
                  width: 8px;
                  height: 8px;
                  border: 1px solid #168EDF;
                  background: #168EDF;
                  border-radius: 50%;
                  margin-top: 4px;
                  display: inline-block;
                }
              }

              .text {
                font-family: SourceHanSansCN-Normal;
                font-size: 12px;
                color: #688BA6;
                letter-spacing: -0.5px;
                vertical-align: middle;
                margin-left: 7px;
              }
            }

            .select1 {
              margin-left: 0.1rem;
            }

            .select2 {
              margin-left: 0.63rem;
            }
          }

          .desc-wrapper {
            width: 3.1rem;
            height: 0.6rem;
            border: 1px solid #C7C7CD;
            padding: 0.05rem 0.1rem;
            position: relative;
            box-sizing: border-box;
            font-size: 12px;
            margin: 0.16rem 0 0 0.1rem;

            textarea {
              width: 2.38rem;
              height: 0.45rem;
              display: inline-block;
              resize: none;
              font-family: SourceHanSansCN-Normal;
              font-size: 12px;
              color: #BDBDBD;
              letter-spacing: -0.5px;
              border: 0;
              outline: 0;
            }

            img {
              width: 0.32rem;
              height: 0.32rem;
              display: inline-block;
              position: absolute;
              top: 0.14rem;
              right: 0.2rem;
            }
          }
        }
      }
    }

    .btn-wrapper {
      height: 0.5rem;
      padding: 0.46rem 0 0.2rem 0;

      &::after {
        content: '';
        clear: both;
      }

      .btn {
        width: 1.37rem;
        height: 0.5rem;
      }

      .btn-prev {
        float: left;
        margin: 0 0rem 0 0.2rem;
        background: #FFFFFF;
        border: 1px solid #1792E5;
        line-height: 0.5rem;
        text-align: center;
        font-family: SourceHanSansCN-Regular;
        font-size: 16px;
        color: #1792E5;
        letter-spacing: -0.89px;
      }

      .btn-next {
        float: right;
        margin: 0 0.2rem 0 0;
        background: #1792E5;
        line-height: 0.5rem;
        text-align: center;
        font-family: SourceHanSansCN-Regular;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.89px;
      }
    }
  }
</style>


