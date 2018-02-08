import { createVM, show, hide } from './util'

let $vm

const plugin = {
  install (Vue) {
    if (!$vm) {
      $vm = createVM(Vue)
    }

    const alert = {
      show (options = {}) {
        return show.call(this, $vm, options)
      },
      hide () {
        return hide.call(this, $vm)
      }
    }

    if (!Vue.$zk) {
      Vue.$zk = {
        alert
      }
    } else {
      Vue.$zk.alert = alert
    }

    Vue.mixin({
      created: function () {
        this.$zk = Vue.$zk
      }
    })
  }
}

export default plugin
export const install = plugin.install

