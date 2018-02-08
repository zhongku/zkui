<template>
  <div>
    <m-group>
      <m-cell :title="$t('Total')" :value="$t('$1024')"></m-cell>
      <m-cell-form-preview :list="list"></m-cell-form-preview>
    </m-group>
  </div>
</template>

<i18n>
Total:
  zh-CN: 合计
'$1024':
  zh-CN: ￥1024
Apple:
  zh-CN: 苹果
Banana:
  zh-CN: 香蕉
Fish:
  zh-CN: 鱼肉
</i18n>

<script>
import { MCellformpreview, MGroup, MCell } from 'src/widgets'

export default {
  components: {
    MCellformpreview,
    MGroup,
    MCell
  },
  data () {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }]
    }
  }
}
</script>
