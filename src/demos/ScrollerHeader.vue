<template>
  <div class="vux-scroller-header-box">
    <div style="height:46px;">
     <m-header class="vux-scroller-header">I'm header</m-header>
    </div>
    <m-scroller lock-x ref="scroller" :height="-108+'px'">
      <div class="box2">
        <p v-for="i in 80" :key="i">placeholder {{i}}</p>
      </div>
    </m-scroller>
  </div>
</template>

<script>
import { MScroller, MHeader } from 'src/widgets'

export default {
  components: {
    MScroller,
    MHeader
  },
  ready () {
    this.$nextTick(() => {
      this.$refs.scroller.reset()
    })
  }
}
</script>
