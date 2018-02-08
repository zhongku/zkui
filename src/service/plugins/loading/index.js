import LoadingComponent from 'src/widgets/loading'
import { mergeOptions } from 'src/service/libs/plugin_helper'

let $vm
let watcher
let delayTime = null
const plugin = {
  install (vue, options) {
    const Loading = vue.extend(LoadingComponent)

    if (!$vm) {
      $vm = new Loading({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const loading = {
      show (options = {}) {
        // destroy watcher
        watcher && watcher()
        if (typeof options === 'string') {
          $vm.text = options
        } else if (typeof options === 'object') {
          mergeOptions($vm, options)
        }
        if (typeof options === 'object' && options.onShow || options.onHide) {
          watcher = $vm.$watch('show', (val) => {
            val && options.onShow && options.onShow($vm)
            val === false && options.onHide && options.onHide($vm)
          })
        }
        delayTime && clearTimeout(delayTime)
        delayTime = setTimeout(() => {
          $vm.show = true
        }, options.delay || 0)
      },
      hide () {
        if (delayTime) {
          clearTimeout(delayTime)
          delayTime = null
        }
        $vm.show = false
      }
    }

    // all Vux's plugins are included in this.$zk
    if (!vue.$zk) {
      vue.$zk = {
        loading
      }
    } else {
      vue.$zk.loading = loading
    }

    vue.mixin({
      created: function () {
        this.$zk = vue.$zk
      }
    })
  }
}

export default plugin
export const install = plugin.install

