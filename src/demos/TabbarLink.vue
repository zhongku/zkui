<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
      <p v-for="i in 100" :key="i">{{i}}</p>
    </div>
    <m-tabbar>
      <!--use v-link-->
      <m-tabbar-item v-link="{path:'/component/cell'}">
        <img slot="icon" src="../assets/demo/icon_nav_button.png">
        <span slot="label">Wechat</span>
      </m-tabbar-item>
      <!--use http link-->
      <m-tabbar-item show-dot link="https://vux.li">
        <img slot="icon" src="../assets/demo/icon_nav_msg.png">
        <span slot="label">Message</span>
      </m-tabbar-item>
      <!--use vue-router link-->
      <m-tabbar-item selected link="/component/cell">
        <img slot="icon" src="../assets/demo/icon_nav_article.png">
        <span slot="label">Explore</span>
      </m-tabbar-item>
      <!--use vue-router object link-->
      <m-tabbar-item :link="{path:'/component/cell'}">
        <img slot="icon" src="../assets/demo/icon_nav_cell.png">
        <span slot="label">News</span>
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'src/widgets'

export default {
  ready () {
    document.querySelector('body').style.height = '100%'
    document.querySelector('html').style.height = '100%'
    document.querySelector('#app').style.height = '100%'
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
