<template>
  <div>
    <m-tab>
      <m-tab-item selected @on-item-click="onItemClick">已发货</m-tab-item>
      <m-tab-item @on-item-click="onItemClick">未发货</m-tab-item>
      <m-tab-item @on-item-click="onItemClick">全部订单</m-tab-item>
    </m-tab>
    <br/>
    <br/>
    <m-divider>手动切换</m-divider>
    <m-tab v-model="index01" prevent-default @on-before-index-change="switchTabItem">
      <m-tab-item selected>已发货</m-tab-item>
      <m-tab-item>未发货</m-tab-item>
      <m-tab-item>全部订单</m-tab-item>
    </m-tab>
    <br/>
    <br/>
    <m-divider>定义bar固定宽度</m-divider>
    <m-tab :line-width="1" custom-bar-width="60px">
      <m-tab-item selected>已发货</m-tab-item>
      <m-tab-item>未发货</m-tab-item>
      <m-tab-item>全部订单</m-tab-item>
    </m-tab>
    <br/>
    <br/>
    <m-divider>使用函数定义bar宽度</m-divider>
    <m-tab :line-width="1" :custom-bar-width="getBarWidth">
      <m-tab-item selected>AA</m-tab-item>
      <m-tab-item>AAAA</m-tab-item>
      <m-tab-item>AAAAAAA</m-tab-item>
    </m-tab>
    <br/>
    <br/>
    <br/>
    <m-divider>{{ $t('set bar-active-color')}}</m-divider>
    <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
      <m-tab style="width:500px;" bar-active-color="#668599" :line-width="1">
        <m-tab-item>已发货</m-tab-item>
        <m-tab-item selected>未发货</m-tab-item>
        <m-tab-item>全部订单</m-tab-item>
        <m-tab-item>全部订单</m-tab-item>
        <m-tab-item>全部订单</m-tab-item>
      </m-tab>
    </div>

    <br/>
    <br/>
    <br/>
    <m-divider>different active class</m-divider>
    <m-tab :animate="false">
      <m-tab-item active-class="active-6-1">已发货</m-tab-item>
      <m-tab-item active-class="active-6-2" selected>未发货</m-tab-item>
      <m-tab-item active-class="active-6-3">全部订单</m-tab-item>
    </m-tab>
    <br/>
    <br/>
    <br/>
    <m-divider>no animation</m-divider>
    <m-tab :animate="false">
      <m-tab-item>已发货</m-tab-item>
      <m-tab-item selected>未发货</m-tab-item>
      <m-tab-item>全部订单</m-tab-item>
    </m-tab>
    <br/>
    <br/>
    <br/>
    <m-divider>disabled</m-divider>
    <m-tab>
      <m-tab-item selected>A</m-tab-item>
      <m-tab-item>B</m-tab-item>
      <m-tab-item disabled>Disabled</m-tab-item>
    </m-tab>
    <br/>
    <br/>
    <br/>
    <m-divider>tab-item m-badge</m-divider>
    <m-tab>
      <m-tab-item selected m-badge-label="1">收到的消息</m-tab-item>
      <m-tab-item m-badge-background="#38C972" m-badge-color="#fff" m-badge-label="2">发出的消息</m-tab-item>
    </m-tab>
    <br/>
    <br/>
    <br/>
    <div>
       <m-tab :line-width=2 active-color='#fc378c' v-model="index">
        <m-tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</m-tab-item>
      </m-tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
    </div>

    <br/>
    <div class="box">
      <m-button @click.native="index=0" :disabled="index === 0" type="primary">go to 0</m-button>
      <m-button @click.native="index=1" :disabled="index === 1" type="primary">go to 1</m-button>

      <m-button @click.native="addTab" :disabled="list2.length === 5" type="primary">Add tab item</m-button>
      <m-button @click.native="removeTab" :disabled="list2.length <= 2" type="primary">Remove tab item</m-button>
      <m-button @click.native="next" type="primary">Active next current: {{index}}</m-button>
      <m-button @click.native="prev" type="primary">Active prev current: {{index}}</m-button>
    </div>

    <br/>
    <br/>
    <m-tab :line-width="2">
      <m-tab-item :selected="demo3 === item" v-for="(item, index) in list3" :class="{'vux-1px-r': index===0}" @click="demo3 = item" :key="index">{{item}}</m-tab-item>
    </m-tab>
    <br/>
    <br/>
    <br/>
    <m-sticky scrollBox="vux_view_box_body" :check-sticky-support="false" :offset="46">
      <m-tab :line-width=1>
        <m-tab-item :selected="demo4 === item" v-for="(item, index) in list4" @click="demo4 = item" :key="index">{{item}}</m-tab-item>
      </m-tab>
    </m-sticky>
    <br v-for="i in 40" :key="i">
  </div>
</template>

<i18n>
set bar-active-color:
  zh-CN: 设置bar颜色
</i18n>

<script>
import { Tab, TabItem, MSticky, MDivider, MButton, Swiper, SwiperItem } from 'src/widgets'
const list = () => ['精选', '美食', '电影', '酒店', '外卖']

export default {
  components: {
    Tab,
    TabItem,
    MSticky,
    MDivider,
    MButton,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      index01: 0,
      list2: list(),
      demo2: '美食',
      list3: ['收到的消息', '发出的消息'],
      demo3: '收到的消息',
      list4: ['正在放映', '即将上映'],
      demo4: '即将上映',
      demoDisabled: 'A',
      index: 0,
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
      }
    }
  },
  methods: {
    switchTabItem (index) {
      console.log('on-before-index-change', index)
      this.$zk.loading.show({
        text: 'loading'
      })
      setTimeout(() => {
        this.$zk.loading.hide()
        this.index01 = index
      }, 1000)
    },
    onItemClick (index) {
      console.log('on item click:', index)
    },
    addTab () {
      if (this.list2.length < 5) {
        this.list2 = list().slice(0, this.list2.length + 1)
      }
    },
    removeTab () {
      if (this.list2.length > 1) {
        this.list2 = list().slice(0, this.list2.length - 1)
      }
    },
    next () {
      if (this.index === this.list2.length - 1) {
        this.index = 0
      } else {
        ++this.index
      }
    },
    prev () {
      if (this.index === 0) {
        this.index = this.list2.length - 1
      } else {
        --this.index
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>
