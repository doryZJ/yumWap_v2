<template>
  <div class="scanQRcode">
    <div class="title">
      <div class="back"><返回</div>
      <span>扫描二维码签到</span>
    </div>
    <div class="scan-content">
      <div class="scan-wrapper">
        <div class="scan-box" id="myImage">
        </div>
        <p>对准签到处的二维码</p>
      </div>
    </div>
    <!-- <video src=""></video> -->
  </div>
</template>
<script>
export default {
  mounted () {
    // navigator.getUserMedia = navigator.getUserMedia ||
    //                      navigator.webkitGetUserMedia ||
    //                      navigator.mozGetUserMedia
    // if (navigator.getUserMedia) {
    //   navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
    //       function (stream) {
    //         var video = document.querySelector('video')
    //         video.srcObject = stream
    //         video.onloadedmetadata = function (e) {
    //           video.play()
    //         }
    //       },
    //       function (err) {
    //         console.log('The following error occurred: ' + err.name)
    //       }
    //   )
    // } else {
    //   console.log('getUserMedia not supported')
    // }
    this.scanCode()
  },
  methods: {
    scanCode () {
      /* eslint-disable */
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          alert('We got a barcode\n' +
            'Result: ' + result.text + '\n' +
            'Format: ' + result.format + '\n' +
            'Cancelled: ' + result.cancelled)
        },
        function (error) {
          alert('Scanning failed: ' + error)
        }
      )
    }
  }
}
</script>
<style lang="scss">
  .scanQRcode {
    background: rgba(0,0,0,0.50);
    width: 100%;
    height: 100%;

    .title {
      background: #000;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #FFFFFF;
      padding: 0.12rem 0;

      .back {
        font-size: 14px;
        color: #fff;
        letter-spacing: 0;
        margin-left: 0.1rem;
        position: absolute;
        left: 0.1rem;
      }
    }

    .scan-content {
      width: 100%;
      height: calc(100% - 0.05rem);
      display: flex;
      justify-content: center;
      align-items: center;

      .scan-wrapper {
        text-align: center;
        
        .scan-box {
          width: 2.79rem;
          height: 2.79rem;
          background: #fff;
        }

        p {
          font-size: 0.18rem;
          margin-top: 10px;
          color: #FFFFFF;
          letter-spacing: -1px;
        }
      }
    }
  }
</style>
