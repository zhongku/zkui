<template>
  <div>
    <m-divider>{{ $t('Pull Up to Refresh') }}</m-divider>
    <m-scroller lock-x scrollbar-y use-pullup height="200px" @on-pullup-loading="load1" ref="demo1"
    :pullup-config="{loadingContent: $t('MLoading...')}">
      <div class="box2">
        <p v-for="i in n1" :key="i">{{ $t('placeholder') }} {{i}}</p>
      </div>
    </m-scroller>

    <m-divider>Chinese: 上拉刷新</m-divider>
    <m-scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig2" height="200px" ref="demo2" @on-pullup-loading="load2">
      <div class="box2">
        <p v-for="i in n2" :key="i">占位 {{i}}</p>
      </div>
    </m-scroller>

    <m-divider>使用v-model改变pullup状态</m-divider>
    <m-scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig2" height="200px" ref="demo3" @on-pullup-loading="load3" v-model="demo3Value">
      <div class="box2">
        <p v-for="i in n3" :key="i">占位 {{i}}</p>
      </div>
    </m-scroller>

    <p @click="demo3Value.pullupStatus='enabled'" v-show="n3 === 30">重新启用pullup</p>

    <m-divider>custom pullup html template</m-divider>
    <m-scroller lock-x scrollbar-y use-pullup height="200px" v-model="demo4Value" @on-pullup-loading="load4">
      <!--content slot-->
      <div class="box2">
        <p v-for="i in n4" :key="i">placeholder {{i}}</p>
      </div>

      <!--pullup slot-->
      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
        <span v-show="demo4Value.pullupStatus === 'default'"></span>
        <span class="pullup-arrow" v-show="demo4Value.pullupStatus === 'default' || demo4Value.pullupStatus === 'up' || demo4Value.pullupStatus === 'down'" :class="{'rotate': demo4Value.pullupStatus === 'down'}">↑</span>
        <span v-show="demo4Value.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
      </div>
    </m-scroller>

  </div>
</template>

<i18n>
Pull Up to Refresh:
  zh-CN: 上拉刷新
placeholder:
  zh-CN: 占位
'MLoading...':
  zh-CN: 努力加载中
</i18n>

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
      setTimeout(() => {
        this.n1 += 10
        setTimeout(() => {
          this.$refs.demo1.donePullup()
        }, 100)
      }, 2000)
    },
    load2 () {
      setTimeout(() => {
        this.n2 += 10
        setTimeout(() => {
          this.$refs.demo2.donePullup()
        }, 100)
        if (this.n2 === 30) { // unload plugin
          setTimeout(() => {
            this.$refs.demo2.disablePullup()
          }, 100)
        }
      }, 2000)
    },
    load3 () {
      setTimeout(() => {
        this.n3 += 10
        setTimeout(() => {
          this.demo3Value.pullupStatus = 'default'
        }, 100)
        console.log('demo3value', JSON.stringify(this.demo3Value))
        if (this.n3 === 30) { // unload plugin
          setTimeout(() => {
            this.demo3Value.pullupStatus = 'disabled'
          }, 100)
        }
      }, 2000)
    },
    load4 () {
      setTimeout(() => {
        this.n4 += 10
        setTimeout(() => {
          this.demo4Value.pullupStatus = 'default'
        }, 10)
      }, 2000)
    }
  },
  data () {
    return {
      demo4Value: {
        pullupStatus: 'default'
      },
      n1: 10,
      n2: 10,
      n3: 10,
      n4: 10,
      demo3Value: {
        pullupStatus: ''
      },
      pullupConfig2: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
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
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.pullup-arrow {
  display: block;
  transition: all linear 0.2s;
  -webkit-transition: all linear 0.2s;
  color: #666;
  font-size: 25px;
}
</style>
