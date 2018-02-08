<template>
  <div>
    <m-group>
      <m-cell is-link title="Simple" link="/component/tabbar-simple"></m-cell>
      <m-cell is-link title="Switch icons" link="/component/tabbar-icon"></m-cell>
    </m-group>
    <m-tabbar>
      <m-tabbar-item>
        <img slot="icon" src="../assets/demo/icon_nav_button.png">
        <span slot="label">Wechat</span>
      </m-tabbar-item>
      <m-tabbar-item show-dot>
        <img slot="icon" src="../assets/demo/icon_nav_msg.png">
        <span slot="label">Message</span>
      </m-tabbar-item>
      <m-tabbar-item selected link="/component/demo">
        <img slot="icon" src="../assets/demo/icon_nav_article.png">
        <span slot="label">Explore</span>
      </m-tabbar-item>
      <m-tabbar-item m-badge="2">
        <img slot="icon" src="../assets/demo/icon_nav_cell.png">
        <span slot="label">News</span>
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, MGroup, MCell } from 'src/widgets'

export default {
  components: {
    Tabbar,
    TabbarItem,
    MGroup,
    MCell
  }
}
</script>
