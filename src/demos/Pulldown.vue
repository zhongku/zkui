<template>
  <div>
    <m-divider>Pull Down to Refresh</m-divider>
    <m-scroller lock-x scrollbar-y use-pulldown height="200px" @on-pulldown-loading="load1" ref="demo1">
      <div class="box2">
        <p v-for="i in n1" :key="i">placeholder {{i}}</p>
      </div>
    </m-scroller>

    <m-divider>Chinese: 下拉刷新</m-divider>
    <m-scroller lock-x scrollbar-y use-pulldown :pulldown-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}" height="200px" @on-pulldown-loading="load2" v-model="status1">
      <div class="box2">
        <p v-for="i in 80" :key="i">占位 {{i}}</p>
      </div>
    </m-scroller>

    <m-divider>custom pulldown html template</m-divider>
    <m-scroller lock-x scrollbar-y use-pulldown height="200px" @on-pulldown-loading="load3" ref="demo3" v-model="status2">
      <!--content slot-->
      <div class="box2">
        <p v-for="i in 80" :key="i">placeholder {{i}}</p>
      </div>

      <!--pulldown slot-->
      <div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pulldown-down" style="position: absolute; width: 100%; height: 60px; line-height: 60px; top: -60px; text-align: center;">
        <span v-show="status2.pulldownStatus === 'default'"></span>
        <span class="pulldown-arrow" v-show="status2.pulldownStatus === 'down' || status2.pulldownStatus === 'up'" :class="{'rotate': status2.pulldownStatus === 'up'}">↓</span>
        <span v-show="status2.pulldownStatus === 'loading'"><spinner type="ios-small"></spinner></span>
      </div>
    </m-scroller>


  </div>
</template>

<script>
import { MScroller, MDivider, MSpinner } from 'src/widgets'

export default {
  components: {
    MScroller,
    MDivider,
    MSpinner
  },
  methods: {
    load1 () {
      this.n1 += 10
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.demo1.donePulldown()
        }, 1000)
      })
    },
    load2 () {
      setTimeout(() => {
        this.status1.pulldownStatus = 'default'
      }, 2000)
    },
    load3 () {
      setTimeout(() => {
        this.$refs.demo3.donePulldown()
      }, 2000)
    }
  },
  data () {
    return {
      n1: 10,
      status: {
        pulldownStatus: 'default'
      },
      status1: {
        pulldownStatus: 'default'
      },
      status2: {
        pulldownStatus: 'default'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
.rotate {
  transform: rotate(-180deg);
}
.pulldown-arrow {
  display: inline-block;
  transition: all linear 0.2s;
  color: #666;
  font-size: 25px;
}
</style>
