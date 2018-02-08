<template>
  <div>
    <m-group :title="$t('value map')">
      <m-switch :title="$t('default true')" :value-map="['0', '1']" v-model="stringValue"></m-switch>
      <m-cell title="value" :value="typeof stringValue + ' ' + stringValue"></m-cell>
    </m-group>
    <m-group :title="$t('Basic Usage')">
      <m-switch :title="$t('default false')"></m-switch>
      <m-switch :title="$t('default true')" :inline-desc="value1 + ''" v-model="value1"></m-switch>
    </m-group>
    <m-group :title="$t('disabled')">
      <m-switch :title="$t('default false')" disabled></m-switch>
      <m-switch :title="$t('default true')" :value="true" disabled></m-switch>
    </m-group>
    <m-group :title="$t('prevent default')">
      <m-switch :title="$t('default false')" prevent-default v-model="value2" @on-click="onClick"></m-switch>
    </m-group>
    <m-group :title="$t('html title')">
      <m-switch disabled :title="$t('switch red')"></m-switch>
    </m-group>
  </div>
</template>

<i18n>
value map:
  zh-CN: 值转换 map
default false:
  zh-CN: 默认 false
default true:
  zh-CN: 默认 true
disabled:
  zh-CN: 禁用
html title:
  zh-CN: 使用html设置title
switch red:
  en: <span style="color:red">I am Red.</span>
  zh-CN: <span style="color:red">我是红色</span>
</i18n>

<script>
import { MSwitch, MGroup, MCell } from 'src/widgets'

export default {
  components: {
    MSwitch,
    MGroup,
    MCell
  },
  methods: {
    onClick (newVal, oldVal) {
      console.log(newVal, oldVal)
      this.$zk.loading.show({
        text: 'in processing'
      })
      setTimeout(() => {
        this.$zk.loading.hide()
        this.value2 = newVal
      }, 1000)
    }
  },
  data () {
    return {
      value1: true,
      value2: false,
      stringValue: '0'
    }
  }
}
</script>
