<template>
  <div>
    <m-group>
      <m-cell is-link title="pullup" link="/component/pullup">Pullup</m-cell>
      <m-cell is-link title="pulldown" link="/component/pulldown">Pulldown</m-cell>
      <m-cell is-link title="pulldownpullup" link="/component/pulldown-pullup">PulldownPullup</m-cell>
    </m-group>

    <m-divider>{{ $t('A Horizontal MScroller without Scrollbar') }}</m-divider>
    <m-scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7" :key="i"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </m-scroller>

    <m-divider>{{ $t('A Horizontal MScroller with Scrollbar') }}</m-divider>
    <m-scroller lock-y scrollbar-x>
      <div class="box1">
        <div class="box1-item" v-for="i in 7" :key="i"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </m-scroller>

    <m-divider>{{ $t('A Horizontal MScroller without bounce effect') }}</m-divider>
    <m-scroller lock-y scrollbar-x :bounce=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7" :key="i"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </m-scroller>

    <m-divider>{{ $t('A Vertical MScroller') }} scrollTop: {{scrollTop}}</m-divider>
    <m-scroller lock-x height="200px" @on-scroll="onScroll" ref="scrollerEvent">
      <div class="box2">
        <p v-for="i in 80" :key="i">placeholder {{i}}</p>
      </div>
    </m-scroller>

    <m-button type="primary" @click.native="$refs.scrollerEvent.reset({top:0})">reset</m-button>

    <m-divider>{{ $t('event:on-scroll-bottom') }} </m-divider>
    <m-scroller lock-x height="200px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div class="box2">
        <p v-for="i in bottomCount" :key="i">placeholder {{i}}</p>
        <load-more tip="loading"></load-more>
      </div>
    </m-scroller>

    <m-divider>{{ $t('A Vertical MScroller with scrollbar') }}</m-divider>
    <m-scroller lock-x scrollbar-y height="200px" ref="scroller">
      <div class="box2">
        <p v-for="i in 20" v-if="showList1" :key="i">placeholder {{ i + '' + i }}</p>
        <p v-for="i in 10" v-if="!showList1" :key="i">placeholder {{ i }}</p>
        <m-button style="margin:10px 0;" type="primary" @click.native="onClickButton">{{ $t('Button') }}</m-button>
        <m-group>
          <m-cell @click.native="onCellClick" title="Title" value="Value"></m-cell>
        </m-group>
      </div>
    </m-scroller>
    <m-button @click.native="changeList" type="primary">{{ $t('show another list') }}</m-button>
  </div>
</template>

<i18n>
A Horizontal MScroller without Scrollbar:
  zh-CN: 不带滚动条的水平 scroller
A Horizontal MScroller with Scrollbar:
  zh-CN: 显示滚动条的水平 scroller
A Horizontal MScroller without bounce effect:
  zh-CN: 没有边缘回滚效果的水平 scroller
A Vertical MScroller:
  zh-CN: 竖向 scroller
A Vertical MScroller with scrollbar:
  zh-CN: 显示滚动条的竖向 scroller
show another list:
  zh-CN: 改变显示的内容
Button:
  zh-CN: 按钮
event:on-scroll-bottom:
  zh-CN: 检查是否滚动到底部
</i18n>

<script>
import { MScroller, MDivider, MSpinner, MButton, MGroup, MCell, MLoadmore } from 'src/widgets'

export default {
  components: {
    MScroller,
    MDivider,
    MSpinner,
    MButton,
    MGroup,
    MCell,
    MLoadmore
  },
  data () {
    return {
      showList1: true,
      scrollTop: 0,
      onFetching: false,
      bottomCount: 20
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scrollerEvent.reset({top: 0})
    })
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset({top: 0})
    })
  },
  methods: {
    onScrollBottom () {
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        setTimeout(() => {
          this.bottomCount += 10
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          this.onFetching = false
        }, 2000)
      }
    },
    onScroll (pos) {
      this.scrollTop = pos.top
    },
    onCellClick () {
      window.alert('cell click')
    },
    onClickButton () {
      window.alert('click')
    },
    changeList () {
      this.showList1 = false
      this.$nextTick(() => {
        this.$refs.scroller.reset({
          top: 0
        })
      })
    }
  }
}
</script>

<style scoped>
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
</style>
