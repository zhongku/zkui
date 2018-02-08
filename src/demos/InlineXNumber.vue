<template>
  <div>
    <br>
    <div style="text-align:center;">
      <m-inline-x-number width="50px"></m-inline-x-number>
    </div>
    <br>
    <div style="text-align:center;">
      <m-inline-x-number width="50px" button-style="round"></m-inline-x-number>
    </div>
    <m-group>
      <m-cell :title="$t('Used within cell')">
        <m-inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></m-inline-x-number>
      </m-cell>
    </m-group>
  </div>
</template>

<i18n>
Used within cell:
  zh-CN: 在cell中使用
</i18n>

<script>
import { MGroup, MCell, MInlinexnumber } from 'src/widgets'

export default {
  components: {
    MGroup,
    MCell,
    MInlinexnumber
  }
}
</script>
