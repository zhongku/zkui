export default {
  install (Vue, config = {}) {
    if (!Vue.vux) {
      Vue.vux = {
        config
      }
    } else {
      Vue.vux.config = config
    }

    if (typeof window !== 'undefined') {
      window.VUX_CONFIG = config
    }

    Vue.mixin({
      created: function () {
        if (this.$zk) {
          this.$zk.config = config
        } else {
          this.$zk = {
            config
          }
        }
      }
    })
  }
}
