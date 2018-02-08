<template>
 <div class="weui-msg">
    <div class="weui-msg__icon-area"><i class="weui-icon_msg" :class="`weui-icon-${icon || 'success'}`"></i></div>
    <div class="weui-msg__text-area">
      <h2 class="weui-msg__title" v-html="title"></h2>
      <p class="weui-msg__desc">
        <slot name="description"></slot>
      </p>
      <p class="weui-msg__desc" v-if="description" v-html="description"></p>
    </div>
    <div class="weui-msg__opr-area">
      <p class="weui-btn-area">
        <slot name="buttons"></slot>
        <a v-for="button in buttons" :key="button" href="javascript:;" class="weui-btn" :class="`weui-btn_${button.type}`" @click="onClick(button.onClick, button.link)">{{(button.text)}}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { go } from 'src/service/libs/router'

export default {
  name: 'msg',
  props: ['icon', 'title', 'description', 'buttons'],
  methods: {
    onClick (handler, link) {
      typeof handler === 'function' && handler()
      link && go(link, this.$router)
    }
  }
}
</script>

<style lang="less">
@import "../../assets/css/weui/weui.less";
@import "../../assets/css/vux-ui/index.less";
</style>