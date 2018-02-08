<template>
  <div>
    <m-divider>下拉刷新和上拉加载更多组合</m-divider>
    <m-scroller lock-x scrollbar-y use-pullup use-pulldown height="200px" @on-pullup-loading="loadMore" @on-pulldown-loading="refresh" v-model="status" ref="scroller">
      <div class="box2">
        <p v-for="i in n" :key="i">placeholder {{i}}</p>
      </div>
      <!--pullup slot-->
      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
        <span v-show="status.pullupStatus === 'default'"></span>
        <span class="pullup-arrow" v-show="status.pullupStatus === 'down' || status.pullupStatus === 'up'" :class="{'rotate': status.pullupStatus === 'up'}">↑</span>
        <span v-show="status.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
      </div>
    </m-scroller>
    <m-group>
      <m-switch :title="pullupEnabled ? '禁用Pullup' : '启用Pullup'" :value="true" @on-change="changePullupStatus"></m-switch>
    </m-group>

    <m-divider>上拉加载重置</m-divider>
    <m-scroller lock-x scrollbar-y use-pullup height="200px" @on-pullup-loading="loadMore1" ref="scroller1">
      <div class="box2">
        <p v-for="j in n1" :key="j">placeholder {{j}}</p>
      </div>
    </m-scroller>
  </div>
</template>

<script>
import { MScroller, MDivider, MSwitch, MGroup, MSpinner } from 'src/widgets'

export default {
  components: {
    MScroller,
    MDivider,
    MSwitch,
    MGroup,
    MSpinner
  },
  methods: {
    loadMore () {
      setTimeout(() => {
        this.n += 10
        setTimeout(() => {
          this.$refs.scroller.donePullup()
        }, 10)
      }, 2000)
    },
    refresh () {
      setTimeout(() => {
        this.n = 10
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.scroller.donePulldown()
            this.pullupEnabled && this.$refs.scroller.enablePullup()
          }, 10)
        })
      }, 2000)
    },
    changePullupStatus (enabled) {
      if (enabled) {
        this.$refs.scroller.enablePullup()
        this.pullupEnabled = true
      } else {
        this.$refs.scroller.disablePullup()
        this.pullupEnabled = false
      }
    },
    loadMore1 () {
      setTimeout(() => {
        this.n1 += 10
        this.$nextTick(() => {
          this.$refs.scroller1.donePullup()
          if (this.n1 >= 30) {
            this.$refs.scroller1.disablePullup()
            console.log('No more data, Pullup disabled!')
          }
        })
      }, 2000)
    }
  },
  data () {
    return {
      n: 10,
      n1: 10,
      pullupEnabled: true,
      status: {
        pullupStatus: 'default',
        pulldownStatus: 'default'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
.rotate {
  display: inline-block;
  transform: rotate(-180deg);
}
.pullup-arrow {
  transition: all linear 0.2s;
  color: #666;
  font-size: 25px;
}
</style>
