/**
* import { CloseDialogsPlugin } from 'vux'
* Vue.use(CloseDialogsPlugin, router)
*/
export default {
  install (Vue, router) {
    router.beforeEach((to, from, next) => {
      const list = ['alert', 'confirm', 'toast', 'loading', 'datetime']
      list.forEach(one => {
        if (Vue.$zk[one]) {
          Vue.$zk[one].hide && Vue.$zk[one].hide()
        }
      })
      next()
    })
  }
}
