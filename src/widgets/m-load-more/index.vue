<template>
  <div class="vux-loadmore weui-loadmore" :class="{'weui-loadmore_line':!showLoading, 'weui-loadmore_dot': !showLoading && !tip}">
    <i class="weui-loading" v-if="showLoading"></i>
    <span class="weui-loadmore__tips" v-show="tip || !showLoading">{{tip}}</span>
  </div>
</template>

<script>
export default {
  name: 'load-more',
  props: {
    showLoading: {
      type: Boolean,
      default: true
    },
    tip: String
  }
}
</script>

<style lang="less">
@import "../../assets/css/weui/weui.less";
@import "../../assets/css/vux-ui/index.less";

.vux-loadmore{

  &.weui-loadmore_line{
    display: flex;
    border-top: 0;

    &:before, &:after{
      position: relative;
      top: -1px;
      flex: 1;
      content: '';
      border-top: 1px solid @weuiLineColorLight;
    }

  }
}
</style>
