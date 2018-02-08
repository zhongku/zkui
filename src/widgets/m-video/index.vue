<template>
  <div class="zy_media">
    <video :poster="cover" data-config='{"mediaTitle": }'>
        <source :src="video" type="video/mp4">
        您的浏览器不支持HTML5视频
    </video>
  </div>
</template>

<script>
import Media from './zy.media.js'

export default {
  name: 'video',
  props: {
    cover: String,
    video: String
  },
  beforeCreate () {
    this._player = Media(this.$el.querySelector('video'))
  }
}
</script>

<style lang="less" >
@import "../../assets/css/weui/weui.less";
@import "../../assets/css/vux-ui/index.less";
</style>
