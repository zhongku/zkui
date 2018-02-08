import * as types from 'src/store/mutation-types'
import apiUser from "src/service/api/user.api"
import helper from 'src/service/common/helper'
import local from 'src/service/common/local'

function checkLogin() {
  var token = local.getStore('user')
  if (token) {
    let timestamp = Math.round(new Date().getTime() / 1000)
    // 是否登录或者登录是否在有效期，有效期可以在系统后台设置
    if (token.expireTime > timestamp && token.id > 0) {
      return true
    }
  }
  return false
}


function getLoginUser() {
  var token = local.getStore('user')
  if (token) {
    return token
  }
  return null
}


// getters
const getters = {
  loginUser: state => state.loginUser,
  isLogin: state => state.isLogin
}

const state = {
  loginUser: getLoginUser(),
  isLogin: checkLogin() || false
}

// actions
const actions = {
  startListeningToAuth({
    commit
  }, user) {
    commit(types.USER_LOGIN, {
      user
    })
  }
}


// mutations
const mutations = {
  [types.USER_LOGIN](state, user) {
    apiUser.login(user).then(function (response) {
      try {
        if (response.data.status === 1) {
          local.setStore("user", response.data.result)
          state.loginUser = user
          helper.alertSucess("登录成功")
           window.location = '/user/index'
        } else {
          helper.alertError(response.data.message)
        }
      } catch (ex) {
        helper.alertError("登录失败，服务器异常")
        state.loginUser = null
      }
    })

  },
  [types.USER_LOGOUT](state) {
    try {
      local.removeStore("user")
      state.loginUser = null
      state.isLogin = false
      helper.alertSucess("退出登录")
      window.location = '/index'
    } catch (error) {
      console.log(error)
    }
    state.loginUser = null
  },

  [types.USER_REG](state, user) {
    state.loginUser = user
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}