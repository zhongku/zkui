<template>
  <div :style="{margin:gap}">
    <div
    class="weui-cells__title"
    v-if="title"
    :style="cleanStyle({
      color: titleColor
    })"
    v-html="title"></div>
    <slot name="title"></slot>
    <div
    class="weui-cells"
    :class="{
      'vux-no-group-title': !title
    }"
    :style="cleanStyle({
      marginTop: typeof gutter === 'number' ? (gutter + 'px') : gutter
    })">
      <slot name="after-title"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import cleanStyle from 'src/service/libs/clean-style'

export default {
  name: 'v-group',
  methods: {
    cleanStyle
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gap: String,
    gutter: [String, Number]
  }
}
</script>




<style lang="less"  rel="stylesheet/less" type="text/css">
@import "../../assets/css/weui/weui.less";
@import "../../assets/css/vux-ui/index.less";

.vux-no-group-title {
  margin-top: @group-title-margin-top;
}

/* global config for group items */
.vux-cell-value {
  color: @cell-value-color;
}
.vux-cell-placeholder {
  color: @cell-placeholder-color;
}
</style>
