import * as types from './mutation-types'

//  user.store
//  登录
export  const  UserLogin = ({ commit }, user) => {
  commit(types.USER_LOGIN,user)
}
// 退出登录
export const UserLogout = ({ commit }) => {
  commit(types.USER_LOGOUT)
}
