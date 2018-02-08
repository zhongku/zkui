<template>
  <div>
    <m-group :title="$t('Default')">
      <m-number :name="$t('Quantity')" :title="$t('Quantity')"></m-number>
    </m-group>

    <m-group :title="$t('listen')">
      <m-number :title="$t('Quantity')" :value="0" :min="0" @on-change="change"></m-number>
    </m-group>

    <m-group :title="$t('set width=100px')">
      <m-number :title="$t('Quantity')" width="100px"></m-number>
    </m-group>

    <m-group :title="$t('round style')">
      <m-number :title="$t('Quantity')" v-model="roundValue" button-style="round" :min="0" :max="5"></m-number>
    </m-group>

    <m-group :title="$t('set step=0.5')">
      <m-number :title="$t('Quantity')" :step="0.5"></m-number>
    </m-group>

    <m-group :title="$t('set value=1, min=-5 and max=8')">
      <m-number :title="$t('Quantity')" :min="-5" :max="8" :value="1"></m-number>
    </m-group>

    <m-group :title="$t('fillable = true')">
      <m-number :value="10" :title="$t('Quantity')" fillable></m-number>
    </m-group>

  </div>
</template>

<i18n>
Default:
  zh-CN: 默认
Quantity:
  zh-CN: 数量
listen:
  en: listen to on-change events (printed on console)
  zh-CN: 监听 on-change 事件，在调试窗口中输出
set width=100px:
  zh-CN: 设置宽度为100px
set step=0.5:
  zh-CN: 设置步长为0.5
set value=1, min=-5 and max=8:
  zh-CN: 设置值为1，最小值为-5，最大值为8
fillable = true:
  zh-CN: 设置可以输入
use with other group elements:
  zh-CN: 和其他group子元素一起使用
Switch Component:
  zh-CN: Switch 组件
round style:
  zh-CN: 圆形按钮
</i18n>

<script>
import { MGroup, MNumber, MSwitch, MDivider } from 'src/widgets'

export default {
  components: {
    MNumber,
    MGroup,
    MSwitch,
    MDivider
  },
  data () {
    return {
      roundValue: 0
    }
  },
  methods: {
    change (val) {
      console.log('change', val)
    }
  }
}
</script>
