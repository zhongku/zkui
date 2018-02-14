<template>
  <p class="vux-x-hr"></p>
</template>

<script>
export default {
  name: 'x-hr'
}
</script>

<style lang="less">
@import '../../styles/base/mixin/setOnepx.less';

.vux-x-hr {
  padding-top: 15*@rem;
  margin-bottom: 15*@rem;
  position: relative;
  &:before {
    .setBottomLine()
  }
}
</style>