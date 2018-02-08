<template>
  <div>
    <br>
    <p style="text-align:center;">
      <m-inline-loading></m-inline-loading>
    </p>
    <br>
    <p style="text-align:center;">
      <span style="vertical-align:middle;display:inline-block;font-size:14px;">{{ $t('loading') }}&nbsp;&nbsp;</span><m-inline-loading></m-inline-loading>
    </p>
    <br>
    <p style="text-align:center;">
      <m-inline-loading></m-inline-loading><span style="vertical-align:middle;display:inline-block;font-size:14px;">&nbsp;&nbsp;{{ $t('loading') }}</span>
    </p>
  </div>
</template>

<i18n>
loading:
  zh-CN: 加载中
</i18n>

<script>
import { MInlineloading } from 'src/widgets'

export default {
  components: {
    MInlineloading
  }
}
</script>
