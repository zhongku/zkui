<template>
<div>
  <m-divider>{{ $t('I have bottom line') }}</m-divider>
</div>
</template>

<i18n>
I have bottom line:
  zh-CN: 我是有底线的
</i18n>

<script>
import { MDivider } from 'src/widgets'

export default {
  components: {
    MDivider
  }
}
</script>