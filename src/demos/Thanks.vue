<template>
  <div>
    <m-group title="Thx" title-color="#04be02">
      <m-cell title="Router" link="https://github.com/vuejs/vue-router">
        <span class="demo-icon" slot="icon">&#xe636;</span>
        <span><img src="http://cn.vuejs.org/images/logo.png" width="20" style="vertical-align: middle;padding-right: 5px;">Powered by Vue-router</span>
      </m-cell>
      <m-cell title="Style" link="https://github.com/weui/weui">
        <span class="demo-icon" slot="icon">&#xe638;</span>
        <span class="demo-icon">&#xe600;</span>
      </m-cell>
      <m-cell title="Dev && Build" link="https://github.com/webpack/webpack">
        <span class="demo-icon" slot="icon" style="color: #000;">&#xe639;</span>
        <span><img src="https://webpack.github.io/assets/favicon.png" width="20" style="vertical-align: middle;padding-right: 5px;">Webpack</span>
      </m-cell>
      <m-cell title="Demo MIcon" link="http://iconfont.cn/">
        <span class="demo-icon" slot="icon">&#xe619;</span>
        <span><img src="http://gtms04.alicdn.com/tps/i4/TB1_oz6GVXXXXaFXpXXJDFnIXXX-64-64.ico" width="20" style="vertical-align: middle;padding-right: 5px;">Iconfont</span>
      </m-cell>
    </m-group>
  </div>
</template>

<script>
import { MGroup, MCell } from 'src/widgets'

export default {
  components: {
    MGroup,
    MCell
  }
}
</script>
