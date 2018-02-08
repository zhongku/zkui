<template>
  <div>
    <m-badge text="1"></m-badge>
    <br>
    <m-badge text="123"></m-badge>
    <br>
    <m-group :title="$t('Used in a MCell')">
      <m-cell :title="$t('Red dot')" is-link>
        <div class="m-badge-value">
          <span class="vertical-middle">{{ $t('New Messages') }} &nbsp;</span>
          <m-badge></m-badge>
        </div>
      </m-cell>
      <m-cell :title="$t('Single digit')" is-link>
        <div class="m-badge-value">
          <span class="vertical-middle">{{ $t('New Messages') }} &nbsp;</span>
          <m-badge text="8"></m-badge>
        </div>
      </m-cell>
      <m-cell :title="$t('Big Number')" is-link>
        <div class="m-badge-value">
          <span class="vertical-middle">{{ $t('New Messages') }} &nbsp;</span>
          <m-badge text="888"></m-badge>
        </div>
      </m-cell>
    </m-group>
  </div>
</template>

<i18n>
Used in a MCell:
  zh-CN: 在 MCell 组件里使用
New Messages:
  zh-CN: 新消息
Single digit:
  zh-CN: 个位数
Big Number:
  zh-CN: 多位数
Red dot:
  zh-CN: 红点
</i18n>

<script>
import { MBadge, MGroup, MCell } from 'src/widgets'

export default {
  components: {
    MBadge,
    MGroup,
    MCell
  }
}
</script>

<style lang="less">
.m-badge-value {
  display: inline-block!important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>
