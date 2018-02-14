<template>
  <div>
    <br>
    <p style="text-align:center;">
      <inline-loading></inline-loading>
    </p>
    <br>
    <p style="text-align:center;">
      <span style="vertical-align:middle;display:inline-block;font-size:14*@rem;">{{ $t('loading') }}&nbsp;&nbsp;</span><inline-loading></inline-loading>
    </p>
    <br>
    <p style="text-align:center;">
      <inline-loading></inline-loading><span style="vertical-align:middle;display:inline-block;font-size:14*@rem;">&nbsp;&nbsp;{{ $t('loading') }}</span>
    </p>
  </div>
</template>

<i18n>
loading:
  zh-CN: 加载中
</i18n>

<script>
import { InlineLoading } from 'vux'

export default {
  components: {
    InlineLoading
  }
}
</script>
