<template>
  <div>
    <m-divider>默认</m-divider>
    <div class="center">{{ new Date() | FormatTimeFilter }}</div>
    <m-divider>YYYY-MM-DD</m-divider>
    <div class="center">{{ new Date() | FormatTimeFilter('YYYY-MM-DD') }}</div>
    <m-divider>YYYY-MM-DD E</m-divider>
    <div class="center">{{ new Date() | FormatTimeFilter('YYYY-MM-DD E') }}</div>
    <m-divider>YYYY-MM-DD EE</m-divider>
    <div class="center">{{ new Date() | FormatTimeFilter('YYYY-MM-DD EE') }}</div>
  </div>
</template>

<script>
import { FormatTimeFilter, MDivider } from 'src/widgets'

export default {
  filters: {
    FormatTimeFilter
  },
  components: {
    MDivider
  }
}
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
