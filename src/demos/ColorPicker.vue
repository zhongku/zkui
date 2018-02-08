<template>
  <div>
    <div style="padding: 15px;">
      <m-color-picker :colors="colors1" v-model="color1"></m-color-picker>
      <br>
      <m-color-picker :colors="colors1" v-model="color1" size="middle"></m-color-picker>
    </div>
    <m-group :title=" $t('Use in cell') ">
      <m-cell :title="'Color:' + color1">
        <m-color-picker :colors="colors1" v-model="color1" size="small"></m-color-picker>
      </m-cell>
    </m-group>
    <m-group :title=" $t('A cell without title') ">
      <m-cell primary="content">
        <m-color-picker :colors="colors1" v-model="color1" size="middle"></m-color-picker>
      </m-cell>
    </m-group>
  </div>
</template>

<i18n>
Use in cell:
  zh-CN: 在 cell 中使用
A cell without title:
  zh-CN: 不带标题的 cell
</i18n>

<script>
import { MColorpicker, MGroup, MCell } from 'src/widgets'

export default {
  components: {
    MColorpicker,
    MGroup,
    MCell
  },
  data () {
    return {
      color1: '#FFEF7D',
      colors1: ['#FF3B3B', '#FFEF7D', '#8AEEB1', '#8B8AEE', '#CC68F8', '#fff']
    }
  }
}
</script>
