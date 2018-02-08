export default {
  install (Vue) {
    const bus = new Vue({})
    if (!Vue.$zk) {
      Vue.$zk = {
        bus
      }
    } else {
      Vue.$zk.bus = bus
    }
  }
}
