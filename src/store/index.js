import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from 'src/store/actions'
import userStore from 'src/store/modules/user.store'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    userStore
  },
  strict: debug
})
