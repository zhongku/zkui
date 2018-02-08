<template>
  <div>
    <load-more :tip="$t('正在加载')"></load-more>
    <load-more :show-loading="false" :tip="$t('暂无数据')" background-color="#fbf9fe"></load-more>
    <load-more :show-loading="false" background-color="#fbf9fe"></load-more>
  </div>
</template>

<i18n>
正在加载:
  en: MLoading
暂无数据:
  en: The End
</i18n>

<script>
import { MLoadmore } from 'src/widgets'

export default {
  components: {
    MLoadmore
  }
}
</script>