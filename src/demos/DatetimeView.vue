<template>
  <div>
    <m-datetime-view v-model="value1" ref="datetime" :format="format"></m-datetime-view>
    <p class="info">{{ $t('Current value') }}: {{ value1 }}</p>
    <div style="padding:15px;">
      <m-button @click.native="changeValue('2017-11-11')" :disabled="format !== 'YYYY-MM-DD'" type="primary"> {{ $t('Set 2017-11-11') }} </m-button>
      <m-button @click.native="changeValue('2016-08-08')" :disabled="format !== 'YYYY-MM-DD'" type="primary"> {{ $t('Set 2016-08-08') }} </m-button>
      <m-button @click.native="toggleFormat" type="primary"> {{ $t('Toggle format') }} </m-button>
      <m-button @click.native="showPopup = true" type="primary"> {{ $t('Show popup with datetime-view') }} </m-button>
    </div>
    <div v-transfer-dom>
      <m-popup v-model="showPopup">
        <m-datetime-view v-model="value2"></m-datetime-view>
      </m-popup>
    </div>
  </div>
</template>

<i18n>
Current value:
  zh-CN: 选中值
Set 2017-11-11:
  zh-CN: 设置为 2017-11-11
Set 2016-08-08:
  zh-CN: 设置为 2016-08-08
Toggle format:
  zh-CN: 切换时间格式
Show popup with datetime-view:
  zh-CN: 显示弹窗样式
</i18n>

<script>
import { MDatetimeview, MButton, MPopup, TransferDom } from 'src/widgets'

export default {
  components: {
    MDatetimeview,
    MButton,
    MPopup
  },
  directives: {
    TransferDom
  },
  data () {
    return {
      value1: '2017-10-11',
      value2: '2017-10-24',
      showPopup: false,
      format: 'YYYY-MM-DD'
    }
  },
  methods: {
    toggleFormat () {
      if (this.format === 'YYYY-MM-DD') {
        this.format = 'YYYY-MM-DD HH:mm'
      } else {
        this.format = 'YYYY-MM-DD'
      }
    },
    changeValue (val) {
      this.value1 = val
      this.$refs.datetime.render()
    }
  }
}
</script>

<style scoped>
.info {
  padding-top: 15px;
  text-align: center;
  color: #666;
}
</style>
