<template>
  <p class="vux-v-hr"></p>
</template>

<script>
export default {
  name: 'v-hr'
}
</script>

<style lang="less">
@import "../../assets/css/weui/weui.less";
@import "../../assets/css/vux-ui/index.less";
.vux-v-hr {
  padding-top: 15px;
  margin-bottom: 15px;
  position: relative;
  &:before {
    .setBottomLine()
  }
}
</style>