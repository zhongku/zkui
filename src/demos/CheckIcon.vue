<template>
  <div>
    <div style="padding:15px;">
      <m-check-icon :value.sync="demo1"> {{ $t('Do you agree?') }} ({{ demo1 }})</m-check-icon>
      <br>
      <br>
      <m-check-icon :value.sync="demo2" type="plain"> {{ $t('Do you agree?') }} ({{ demo2 }})</m-check-icon>
    </div>
  </div>
</template>

<i18n>
'Do you agree?':
  zh-CN: 同意不？
</i18n>

<script>
import { MCheckicon } from 'src/widgets'

export default {
  components: {
    MCheckicon
  },
  data () {
    return {
      demo1: false,
      demo2: true
    }
  }
}
</script>
