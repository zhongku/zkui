<template>
<div>
  <m-divider>default usage</m-divider>
  <span class="vux-loading"></span>
  <m-group>
    <m-cell title="MCell MLoading"><span class="vux-loading"></span></m-cell>
    <m-input title="MInput loading" :required="false" :show-clear="false">
      <span class="vux-loading" slot="right"></span>
    </m-input>
  </m-group>
</div>
</template>

<script>
import { MGroup, MCell, MDivider, MInput } from 'src/widgets'

export default {
  components: {
    MGroup,
    MCell,
    MDivider,
    MInput
  }
}
</script>

<style lang="less" src="vux/src/styles/loading.less"></style>