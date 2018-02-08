<template>
  <div>
    <m-group :title=" $t('Automatic countdown') ">
      <m-cell title="15s" v-model="value">
        <m-countdown v-model="time1" @on-finish="finish" v-show="show"></m-countdown>
      </m-cell>
    </m-group>
    <m-group :title=" $t('Manually') ">
      <m-switch :title=" $t('Start') " v-model="start"></m-switch>
      <m-cell title="15s">
        <m-countdown v-model="time2" :start="start" @on-finish="finish2"></m-countdown>
      </m-cell>
    </m-group>
  </div>
</template>

<i18n>
Automatic countdown:
  zh-CN: 自动倒计时
Manually:
  zh-CN: 手动模式
Start:
  zh-CN: 开始
</i18n>

<script>
import { MGroup, MCell, MCountdown, MSwitch } from 'src/widgets'

export default {
  components: {
    MGroup,
    MCell,
    MCountdown,
    MSwitch
  },
  methods: {
    finish (index) {
      this.show = false
      this.value = 'completed'
      console.log('current index', index)
    },
    finish2 (index) {
      this.start = false
      this.time = 20
    }
  },
  data () {
    return {
      show: true,
      time1: 15,
      time2: 15,
      value: '',
      start: false
    }
  }
}
</script>
