<template>
  <div>
    <p style="padding:15px;">
      <span> {{ $t('Basic Usage') }}: </span>
      <m-clocker :time="time1"></m-clocker>
    </p>

    <m-group :title=" $t('Use in cell') ">
      <m-cell :title=" $t('Date: 2018-08-01') ">
        <m-clocker time="2018-08-01"></m-clocker>
      </m-cell>
    </m-group>

    <m-group :title=" $t('Custom template') ">
      <m-cell :title=" $t('Date: 2018-08-01') ">
        <m-clocker time="2018-08-01">
          <span style="color:red">%D 天</span>
          <span style="color:green">%H 小时</span>
          <span style="color:blue">%M 分 %S 秒</span>
        </m-clocker>
      </m-cell>
      <m-cell title="2018-08-08">
        <m-clocker time="2018-08-08">
          <span class="day">%_D1</span>
          <span class="day">%_D2</span>
          <span class="day">%_D3</span>天
          <span class="day">%_H1</span>
          <span class="day">%_H2</span>时
          <span class="day">%_M1</span>
          <span class="day">%_M2</span>分
          <span class="day">%_S1</span>
          <span class="day">%_S2</span>秒
        </m-clocker>
      </m-cell>
    </m-group>

  </div>
</template>

<i18n>
Use in cell:
  zh-CN: 在 cell 中使用
Custom template:
  zh-CN: 自定义模版
'Date: 2018-08-01':
  zh-CN: 日期：2018-08-01
</i18n>

<script>
import { MClocker, MCell, MGroup } from 'src/widgets'

export default {
  components: {
    MClocker,
    MCell,
    MGroup
  },
  created () {
    setTimeout(() => {
      this.time1 = '2018-08-13 22:54'
    }, 5000)
  },
  data () {
    return {
      time1: '2018-07-13 21:54'
    }
  }
}
</script>

<style scoped>
.day {
  background-color:#000;
  color:#fff;
  text-align:center;
  display:inline-block;
  padding:0 3px;
  border-radius:3px;
}
</style>
