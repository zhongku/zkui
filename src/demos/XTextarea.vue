<template>
  <div>
    <m-group>
      <m-textarea :max="20" :placeholder="$t('placeholder')" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></m-textarea>
    </m-group>
    <m-group :title="$t('used with input')">
      <m-input :placeholder="$t('title')"></m-input>
      <m-textarea :max="200" name="description" :placeholder="$t('placeholder')"></m-textarea>
    </m-group>
    <m-group :title="$t('hide counter')">
      <m-textarea :max="200" name="detail" :placeholder="$t('placeholder')" :show-counter="false"></m-textarea>
    </m-group>
    <m-group :title="$t('autosize')">
      <m-textarea :placeholder="$t('Type something')" :show-counter="false" :rows="1" autosize></m-textarea>
      <m-textarea :title="$t('title')" :placeholder="$t('Type something')" :show-counter="false" :rows="1" autosize></m-textarea>
    </m-group>
    <m-group :title="$t('set height=200')">
      <m-textarea :title="$t('title')" :max="200" :placeholder="$t('placeholder')" :show-counter="false" :height="200" :rows="8" :cols="30"></m-textarea>
    </m-group>
  </div>
</template>

<i18n>
placeholder:
  zh-CN: 提示
hide counter:
  zh-CN: 不显示计数器
used with input:
  zh-CN: 和input一起使用
title:
  zh-CN: 标题
Type something:
  zh-CN: 随便写点什么
autosize:
  zh-CN: 自动高度
set height=200:
  zh-CN: 设置高度为200像素
</i18n>

<script>
import { MTextarea, MGroup, MInput } from 'src/widgets'

export default {
  components: {
    MTextarea,
    MGroup,
    MInput
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
    }
  }
}
</script>
