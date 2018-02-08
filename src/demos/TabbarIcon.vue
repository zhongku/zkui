<template>
  <div>
    <m-group>
      <m-cell is-link title="Tabbar" link="/component/tabbar"></m-cell>
    </m-group>
    <m-tabbar @on-index-change="onIndexChange">
      <m-tabbar-item>
        <img slot="icon" src="../assets/demo/icon_nav_button.png">
        <img slot="icon-active" src="../assets/demo/icon_nav_msg.png">
        <span slot="label">one</span>
      </m-tabbar-item>
      <m-tabbar-item>
        <img slot="icon" src="../assets/demo/icon_nav_article.png">
        <img slot="icon-active" src="../assets/demo/icon_nav_cell.png">
        <span slot="label">two</span>
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
  },
  methods: {
    onIndexChange (newIndex, oldIndex) {
      console.log(newIndex, oldIndex)
    }
  }
}
</script>
