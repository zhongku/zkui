import Vue from 'vue'
import App from './App'
import router from 'src/service/router/router'
import store from 'src/store/index'
// 以下为引入CSS代码
import 'src/assets/css/zkui/zkui.scss' // zkui.css 项目样式
import 'src/assets/css/weui/weui.less' // weui.css
import 'src/assets/css/vux-ui/index.vue' // vux-ui.css

import zkhead from 'src/components/zk-head' // 通用头部
import zkfoot from 'src/components/zk-foot' // 通用底部
import micon from 'src/widgets/m-icon' // 通用底部
import 'src/service/config/rem'
import FastClick from 'fastclick'
import vuexI18n from 'vuex-i18n'
import ToastPlugin from 'src/service/plugins/toast/index.js'

Vue.use(vuexI18n.plugin, store)

Vue.use(ToastPlugin)


const translationsEn = {
  "content": "This is some {type} content"
}
const translationsCn = {
  "My nice title": "Ein schöner Titel",
  "content": "Dies ist ein toller Inhalt"
}



Vue.i18n.add('en', translationsEn)
Vue.i18n.add('zh-CN', translationsCn)
// 以下为引入JS代码

// import widgets from 'src/widgets'

Vue.component('z-foot', zkfoot)
Vue.component('z-head', zkhead)
Vue.component('m-icon', micon)

FastClick.attach(document.body)  // 减少300ms点击
Vue.config.productionTip = false
Vue.config.devtools = true // 使用vue 官方调试工具 ，编译之前最好关闭

/* eslint-disable no-new */
new Vue({
  router,
  zkhead,
  micon,
  zkfoot,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#zkcloud')





// 懒加载

// import VueLazyload from 'vue-lazyload'


// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })
