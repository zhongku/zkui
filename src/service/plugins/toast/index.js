// eslint-disable-next-line
/* eslint-disable */

import objectAssign from 'object-assign'
import ToastComponent from 'src/widgets/m-toast'
import { mergeOptions } from 'src/service/libs/plugin_helper'

let $vm
let watcher

const plugin = {
  install (vue, pluginOptions = {}) {
    const Toast = vue.extend(ToastComponent)

    if (!$vm) {
      $vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const defaults = {}
    for (let i in $vm.$options.props) {
      if (i !== 'value') {
        defaults[i] = $vm.$options.props[i].default
      }
    }

    const toast = {
      show (options = {}) {
        // destroy watcher
        watcher && watcher()
        if (typeof options === 'string') {
          mergeOptions($vm, objectAssign({}, pluginOptions, {text: options}))
        } else if (typeof options === 'object') {
          mergeOptions($vm, objectAssign({}, pluginOptions, options))
        }
        if (typeof options === 'object' && options.onShow || options.onHide) {
          watcher = $vm.$watch('show', (val) => {
            val && options.onShow && options.onShow($vm)
            val === false && options.onHide && options.onHide($vm)
          })
        }
        $vm.show = true
      },
      text (text, position = 'default') {
        this.show({
          type: 'text',
          width: 'auto',
          position,
          text
        })
      },
      hide () {
        $vm.show = false
      }
    }

    // all Vux's plugins are included in this.$zk
    if (!vue.$zk) {
      vue.$zk = {
        toast
      }
    } else {
      vue.$zk.toast = toast
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

