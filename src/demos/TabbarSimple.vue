<template>
  <div>
    <m-group>
      <m-cell is-link title="Tabbar" link="/component/tabbar"></m-cell>
    </m-group>
    <m-tabbar>
      <m-tabbar-item>
        <span slot="label">Wechat</span>
      </m-tabbar-item>
      <m-tabbar-item show-dot>
        <span slot="label">Message</span>
      </m-tabbar-item>
      <m-tabbar-item selected link="/component/demo">
        <span slot="label">Explore</span>
      </m-tabbar-item>
      <m-tabbar-item m-badge="2">
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
