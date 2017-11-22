<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    mounted () {
      setTimeout(() => {
        this.initScroll()
      }, this.refreshDelay)
    },
    methods: {
      initScroll () {
        const elWrapper = this.$refs.wrapper
        if (!elWrapper) {
          return
        }
        this.scroll = new BScroll(elWrapper, {
          probeType: this.probeType
        })
      }
    }
  }
</script>
