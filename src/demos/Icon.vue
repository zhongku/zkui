<template>
  <div>
    <divider>m-icon 使用svg图标</divider>
    <box gap="10px">
       <m-icon name="zk-grid" spin class="icon-brand" ></m-icon>
       <m-icon name="zk-grid"  class="icon-metal" link="/component/icon" size="1.5rem"></m-icon>
       <m-icon name="zk-grid"  class="icon-light" link="/component/checklist" size="2rem"></m-icon>
       <m-icon name="zk-grid"  class="icon-accent" size="2.5rem"></m-icon>
       <m-icon name="zk-grid"  class="icon-focus" size="3rem"></m-icon>
       <m-icon name="zk-grid"  class="icon-primary" size="3rem"></m-icon>
       <m-icon name="zk-grid" spin class="icon-success" size="3rem" link="/component/grid"></m-icon>
       <m-icon name="zk-grid"  class="icon-danger" size="3rem" link="/component/grid"></m-icon>
       <m-icon name="zk-grid"  class="icon-warning" size="3rem" link="/component/grid"></m-icon>
       <m-icon name="zk-fenrun"  class="icon-info" size="3rem" link="/component/cell"></m-icon>
    </box>
    <box gap="10px">
       <m-icon name="zk-fenrun"  class="icon-info" size="3rem" link="/component/cell"></m-icon>
       <m-icon name="zk-info-user"  class="icon-info" size="3rem" link="/component/cell"></m-icon>
      </box>

    <group-title>weui 字体图标列子</group-title>
    <box gap="10px 10px">
      <icon type="success"></icon>
      <icon type="info"></icon>
      <icon type="info-circle"></icon>
      <icon type="warn"></icon>
      <icon type="waiting"></icon>
      <icon type="waiting-circle"></icon>
      <icon type="safe-success"></icon>
      <icon type="safe_warn"></icon>
      <icon type="success-circle"></icon>
      <icon type="success-no-circle"></icon>
      <icon type="circle"></icon>
      <icon type="download"></icon>
      <icon type="cancel"></icon>
      <icon type="search"></icon>
      <icon type="clear"></icon>
      <br/>
      <icon type="success" is-msg></icon>
      <icon type="info" is-msg></icon>
      <icon type="warn" is-msg></icon>
      <icon type="waiting" is-msg></icon>
      <icon type="safe_success" is-msg></icon>
      <icon type="safe_warn" is-msg></icon>
    </box>
  </div>
</template>

<script>
  import { Box, MIcon, Icon, GroupTitle,Divider, XScroll } from 'vux'

  export default {
    components: {
      Box,
      XScroll,
      GroupTitle,
      Divider,
      Icon,
      MIcon
    }
  }
</script>
