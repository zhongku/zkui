<template>
  <div style="text-align:center;">
    <popover placement="top" style="margin: 20px;" @on-show="onShow" @on-hide="onHide">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">{{ $t('MPopover on top') }}</button>
    </popover>

    <popover placement="bottom" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">{{ $t('MPopover on bottom') }}</button>
    </popover>

    <popover placement="left" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">{{ $t('MPopover on left') }}</button>
    </popover>

    <popover placement="right" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">{{ $t('MPopover on right') }}</button>
    </popover>
  </div>
</template>

<i18n>
MPopover on top:
  zh-CN: 上方出现
MPopover on bottom:
  zh-CN: 下方出现
MPopover on left:
  zh-CN: 左边出现
MPopover on right:
  zh-CN: 右边出现
</i18n>

<script>
import { MPopover } from 'src/widgets'

export default {
  components: {
    MPopover
  },
  methods: {
    onShow () {
      console.log('on show')
    },
    onHide () {
      console.log('on hide')
    }
  }
}
</script>

<style scoped>
.popover-demo-content {
  padding: 5px 10px;
}
</style>
