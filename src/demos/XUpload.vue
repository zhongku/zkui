<template>
  <div>
    <divider>没有封装组件，引入样式使用</divider>
    <x-upload title="附件上传"></x-upload>
  </div>
</template>

<script>
import { Divider,XUpload } from 'vux'

export default {
  components: {
    Divider,
    XUpload
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/weui/widget/weui-uploader/index.less';
</style>
