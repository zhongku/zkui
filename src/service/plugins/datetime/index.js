import Datetime from 'src/widgets/datetime/datetimepicker'
import ObjectAssign from 'object-assign'
/* just for importing style and avoid less-loader issue */
import DatetimeComponent from 'src/widgets/datetime/index.vue' // eslint-disable-line

const libs = {
  show: function (options = {}) {
    options = ObjectAssign({
      destroyOnHide: true,
      isOneInstance: true
    }, options)
    const datetime = libs.datetime = new Datetime(options)
    datetime.show()
  },
  hide: function () {
    libs.datetime && libs.datetime.hide()
  }
}

export default {
  install (Vue) {
    if (!Vue.$zk) {
      Vue.$zk = {
        datetime: libs
      }
    } else {
      Vue.$zk.datetime = libs
    }

    Vue.mixin({
      created: function () {
        this.$zk = Vue.$zk
      }
    })
  }
}

