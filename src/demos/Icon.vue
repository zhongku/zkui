<template>
  <div>
    <box gap="10px 10px">
      <m-icon type="success"></m-icon>
      <m-icon type="info"></m-icon>
      <m-icon type="info-circle"></m-icon>
      <m-icon type="warn"></m-icon>
      <m-icon type="waiting"></m-icon>
      <m-icon type="waiting-circle"></m-icon>
      <m-icon type="safe-success"></m-icon>
      <m-icon type="safe_warn"></m-icon>
      <m-icon type="success-circle"></m-icon>
      <m-icon type="success-no-circle"></m-icon>
      <m-icon type="circle"></m-icon>
      <m-icon type="download"></m-icon>
      <m-icon type="cancel"></m-icon>
      <m-icon type="search"></m-icon>
      <m-icon type="clear"></m-icon>
      <br/>
      <m-icon type="success" is-msg></m-icon>
      <m-icon type="info" is-msg></m-icon>
      <m-icon type="warn" is-msg></m-icon>
      <m-icon type="waiting" is-msg></m-icon>
      <m-icon type="safe_success" is-msg></m-icon>
      <m-icon type="safe_warn" is-msg></m-icon>
    </box>
  </div>
</template>

<script>
import { MBox, MIcon } from 'src/widgets'

export default {
  components: {
    MBox,
    MIcon
  }
}
</script>