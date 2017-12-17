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
          <div class="evaluate-content clearfix">
            <div class="evaluate-select-box">
              <img src="../assets/images/status_green@2x.png" v-show="select1 === '正常'" class="icon-status" alt="">
              <img src="../assets/images/status_orange@2x.png" v-show="select1 === '松动'" class="icon-status" alt="">
              <el-select v-model="select1" placeholder="请选择">
                <el-option
                  v-for="(item, index) in evaluateOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                  <img :src="item.icon" alt="">
                  <span>{{item.label}}</span>
                </el-option>
              </el-select>
            </div>
            <div class="addDesc" >
              <img src="../assets/images/edit@2x.png" @click="editDesc(1)" class="icon_edit" alt="">
              <img src="../assets/images/camera@2x.png" @click="handleCamera" class="icon_camera" alt="">
            </div>
          </div>
          <div class="desc-wrapper" v-show="desc1Visible">
            <div class="desc-text">
              <textarea name="" id="desc" v-model="desc1"></textarea>
              <div class="dsecClose" @click="deleteDesc(1)">
                X
              </div>
            </div>
            <div class="desc-pic clearfix">
              <img src="../assets/images/desc.png" alt="">
              <div class="addPic" @click="loadImageLocal">
                <img src="../assets/images/addphoto@2x.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="evaluate">
          <p>2. 确认外部金属网的固定螺丝有无松动脱落</p>
          <div class="evaluate-content clearfix">
            <div class="evaluate-select-box">
              <img src="../assets/images/status_green@2x.png" v-show="select2 === '正常'" class="icon-status" alt="">
              <img src="../assets/images/status_orange@2x.png" v-show="select2 === '松动'" class="icon-status" alt="">
              <el-select v-model="select2" placeholder="请选择">
                <el-option
                  v-for="(item, index) in evaluateOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                  <img :src="item.icon" alt="">
                  <span>{{item.label}}</span>
                </el-option>
              </el-select>
            </div>
            <div class="addDesc">
              <img src="../assets/images/edit@2x.png" @click="editDesc(2)" class="icon_edit" alt="">
              <img src="../assets/images/camera@2x.png" @click="handleCamera" class="icon_camera" alt="">
            </div>
          </div>
          <div class="desc-wrapper" v-show="desc2Visible">
            <div class="desc-text">
              <textarea name="" id="desc" v-model="desc2"></textarea>
              <div class="dsecClose" @click="deleteDesc(2)">
                X
              </div>
            </div>
            <div class="desc-pic clearfix">
              <img src="../assets/images/desc.png" alt="">
              <div class="addPic" @click="loadImageLocal">
                <img src="../assets/images/addphoto@2x.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="outer-wrapper">
      <div class="head">
        冷却风机
      </div>
      <div class="outer-content">
        <div class="evaluate">
          <p>1. 机头、陈列柜内风机（是否正常工作，有无异常声音和振动）</p>
          <div class="evaluate-content clearfix">
            <div class="evaluate-select-box">
              <img src="../assets/images/status_green@2x.png" v-show="select3 === '正常'" class="icon-status" alt="">
              <img src="../assets/images/status_orange@2x.png" v-show="select3 === '松动'" class="icon-status" alt="">
              <el-select v-model="select3" placeholder="请选择">
                <el-option
                  v-for="(item, index) in evaluateOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                  <img :src="item.icon" alt="">
                  <span>{{item.label}}</span>
                </el-option>
              </el-select>
            </div>
            <div class="addDesc" >
              <img src="../assets/images/edit@2x.png" @click="editDesc(3)" class="icon_edit" alt="">
              <img src="../assets/images/camera@2x.png" @click="handleCamera" class="icon_camera" alt="">
            </div>
          </div>
          <div class="desc-wrapper" v-show="desc3Visible">
            <div class="desc-text">
              <textarea name="" id="desc" v-model="desc3"></textarea>
              <div class="dsecClose" @click="deleteDesc(3)">
                X
              </div>
            </div>
            <div class="desc-pic clearfix">
              <img src="../assets/images/desc.png" alt="">
              <div class="addPic" @click="loadImageLocal">
                <img src="../assets/images/addphoto@2x.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="evaluate">
          <p>2. 确认外部金属网的固定螺丝有无松动脱落</p>
          <div class="evaluate-content clearfix">
            <div class="evaluate-select-box">
              <img src="../assets/images/status_green@2x.png" v-show="select4 === '正常'" class="icon-status" alt="">
              <img src="../assets/images/status_orange@2x.png" v-show="select4 === '松动'" class="icon-status" alt="">
              <el-select v-model="select4" placeholder="请选择">
                <el-option
                  v-for="(item, index) in evaluateOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                  <img :src="item.icon" alt="">
                  <span>{{item.label}}</span>
                </el-option>
              </el-select>
            </div>
            <div class="addDesc">
              <img src="../assets/images/edit@2x.png" @click="editDesc(4)" class="icon_edit" alt="">
              <img src="../assets/images/camera@2x.png" @click="handleCamera" class="icon_camera" alt="">
            </div>
          </div>
          <div class="desc-wrapper" v-show="desc4Visible">
            <div class="desc-text">
              <textarea name="" id="desc" v-model="desc4"></textarea>
              <div class="dsecClose" @click="deleteDesc(4)">
                X
              </div>
            </div>
            <div class="desc-pic clearfix">
              <img src="../assets/images/desc.png" alt="">
              <div class="addPic" @click="loadImageLocal">
                <img src="../assets/images/addphoto@2x.png" alt="">
              </div>
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
          <p>1. 电磁开关主体（目测有无异常变色损伤）</p>
          <div class="evaluate-content clearfix">
            <div class="evaluate-select-box">
              <img src="../assets/images/status_green@2x.png" v-show="select5 === '正常'" class="icon-status" alt="">
              <img src="../assets/images/status_orange@2x.png" v-show="select5 === '松动'" class="icon-status" alt="">
              <el-select v-model="select5" placeholder="请选择">
                <el-option
                  v-for="(item, index) in evaluateOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                  <img :src="item.icon" alt="">
                  <span>{{item.label}}</span>
                </el-option>
              </el-select>
            </div>
            <div class="addDesc">
              <img src="../assets/images/edit@2x.png" @click="editDesc(5)" class="icon_edit" alt="">
              <img src="../assets/images/camera@2x.png" @click="handleCamera" class="icon_camera" alt="">
            </div>
          </div>
          <div class="desc-wrapper" v-show="desc5Visible">
            <div class="desc-text">
              <textarea name="" id="desc" v-model="desc5"></textarea>
              <div class="dsecClose" @click="deleteDesc(5)">
                X
              </div>
            </div>
            <div class="desc-pic clearfix">
              <img src="../assets/images/desc.png" alt="">
              <div class="addPic" @click="loadImageLocal">
                <img src="../assets/images/addphoto@2x.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <div class="btn btn-prev" @click="handlePrev">上一步</div>
      <div class="btn btn-next" :class="{'active': btnStatus}" @click="handleNext">下一步</div>
    </div>
  </div>
</template>
<script>
import InspectionStep from '@/components/InspectionStep'
import statusGreen from '@/assets/images/status_green@2x.png'
import statusOrange from '@/assets/images/status_orange@2x.png'
export default {
  data () {
    return {
      step: 3,
      select1: '正常',
      select2: '正常',
      select3: '正常',
      select4: '正常',
      select5: '正常',
      // PHOTOLIBRARY 或 0 打开照片库
      // CAMERA 或 1 打开本机相机
      // SAVEDPHOTOALBUM 或 2 打开已保存的相册e
      mySourceType: 1,
      evaluateOptions: [
        {
          icon: statusGreen,
          value: '正常',
          label: '正常'
        }, {
          icon: statusOrange,
          value: '松动',
          label: '松动'
        }
      ],
      desc1: '',
      desc2: '',
      desc3: '',
      desc4: '',
      desc5: '',
      desc1Visible: false,
      desc2Visible: false,
      desc3Visible: false,
      desc4Visible: false,
      desc5Visible: false,
      btnStatus: false
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
    editDesc (val) {
      switch (val) {
        case 1 :
          this.desc1Visible = !this.desc1Visible
          break
        case 2 :
          this.desc2Visible = !this.desc2Visible
          break
        case 3 :
          this.desc3Visible = !this.desc3Visible
          break
        case 4 :
          this.desc4Visible = !this.desc4Visible
          break
        case 5 :
          this.desc5Visible = !this.desc5Visible
          break
      }
    },
    deleteDesc (val) {
      switch (val) {
        case 1 :
          this.desc1 = ''
          break
        case 2 :
          this.desc2 = ''
          break
        case 3 :
          this.desc3 = ''
          break
        case 4 :
          this.desc4 = ''
          break
        case 5 :
          this.desc5 = ''
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
    onFail (message) {
      navigator.notification.alert('操作失败，原因：' + message, null, '警告')
    },
    loadImageLocal () {
      /*eslint-disable*/
      navigator.camera.getPicture(onLoadImageLocalSuccess, onLoadImageFail, {
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      })
      /*eslint-enable*/
    },
    onLoadImageLocalSuccess (imageURI) {
      alert(imageURI)
      // "data:image/jpeg;base64,"+imageURI;
    },
    onLoadImageFail (message) {
      navigator.notification.alert('操作失败，原因：' + message, null, '警告')
    }
  },
  watch: {
    desc1: {
      handler (val, oldVal) {
        if (val && this.desc2 && this.desc3 && this.desc4 && this.desc5) {
          this.btnStatus = true
        } else {
          this.btnStatus = false
        }
      }
    },
    desc2: {
      handler (val, oldVal) {
        if (val && this.desc1 && this.desc3 && this.desc4 && this.desc5) {
          this.btnStatus = true
        } else {
          this.btnStatus = false
        }
      }
    },
    desc3: {
      handler (val, oldVal) {
        if (val && this.desc1 && this.desc2 && this.desc4 && this.desc5) {
          this.btnStatus = true
        } else {
          this.btnStatus = false
        }
      }
    },
    desc4: {
      handler (val, oldVal) {
        if (val && this.desc1 && this.desc2 && this.desc3 && this.desc5) {
          this.btnStatus = true
        } else {
          this.btnStatus = false
        }
      }
    },
    desc5: {
      handler (val, oldVal) {
        if (val && this.desc1 && this.desc2 && this.desc3 && this.desc4) {
          this.btnStatus = true
        } else {
          this.btnStatus = false
        }
      }
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

    .outer-wrapper {
      .head {
        margin: 0.28rem 0 0.16rem 0.16rem;
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
            padding: 0rem 0 0.02rem 0;
            font-size: 12px;
            color: #707070;
            letter-spacing: -0.5px;
          }

          .evaluate-content {
            font-size: 12px;
            position: relative;
            height: 0.32rem;

            .evaluate-select-box {
              float: left;

              .icon-status {
                width: 10px;
                height: 10px;
                position: absolute;
                left: 10px;
                top: 10px;
                z-index: 99;
              }

              .el-select {
                width: 2.5rem;
                height: 0.3rem;
                border: 1px solid #C7C7CD;
                outline: 0;

                .el-input__inner {
                  border: 0;
                  padding-left: 25px;
                  height: 0.3rem;
                }
              }
            }

            .addDesc {
              float: right;
              margin-right: 20px;

              .icon_edit {
                width: 18px;
                height: 18px;
                margin-top: 7px;
                vertical-align: middle;
                margin-right: 15px;
              }

              .icon_camera {
                width: 22px;
                height: 16px;
                margin-top: 8px;
                vertical-align: middle;
              }

              span {
                font-size: 12px;
                color: #698CA7;
                letter-spacing: -0.5px;
                vertical-align: middle;
                line-height: 32px;
              }
            }
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
            .desc-text {
              height: 0.6rem;
              border: 1px solid #C7C7CD;
              padding: 0.05rem 0.1rem;
              position: relative;
              box-sizing: border-box;
              font-size: 12px;
              margin: 0.16rem 20px 0 0;

              textarea {
                width: 2.88rem;
                height: 0.45rem;
                display: inline-block;
                resize: none;
                font-size: 12px;
                color: #707070;
                letter-spacing: -0.5px;
                border: 0;
                outline: 0;
              }

              .dsecClose {
                position: absolute;
                width: 18px;
                height: 18px;
                border: 1px solid #C7C7CD;
                border-radius: 50%;
                font-size: 12px;
                line-height: 18px;
                text-align: center;
                color: #C7C7CD;
                top: 5px;
                right: 5px;
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

            .desc-pic {
              margin-top: 9px;
              font-size: 12px;
              min-height: 0.48rem;
              height: auto;

              img {
                width: 0.48rem;
                height: 0.48rem;
                margin-right: 8px;
                float: left;
              }

              .addPic {
                width: 0.48rem;
                height: 0.48rem;
                color: #C7C7CD;
                text-align: center;
                float: left;

                img {
                  width: 100%;
                  height: 100%;
                  display: inline-block;
                }
              }
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
        font-size: 16px;
        color: #1792E5;
        letter-spacing: -0.89px;
      }

      .btn-next {
        float: right;
        margin: 0 0.2rem 0 0;
        background: #ABABAB;
        border: 1px solid #ABABAB;
        line-height: 0.5rem;
        text-align: center;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.89px;
      }

      .active {
        background: #1792E5;
        border: 1px solid #1792E5;
      }
    }
  }

  .el-select-dropdown__item {
      img {
        width: 10px;
        height: 10px;
        vertical-align: middle;
      }

      span {
        font-size: 12px;
        color: #707070;
        letter-spacing: -0.5px;
        vertical-align: middle;
      }
    }
</style>


