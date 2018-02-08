'use strict'

import axios from 'axios'
import store from 'src/store/index'
import helper from 'src/service/common/helper'
// import qs from 'qs'
import {baseUrl, key, projectId} from 'src/service/config/env'
import md5 from 'js-md5' // md5 函数
const timestamp = Math.round(new Date().getTime() / 1000)

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function getSign(url) {
  var sign = timestamp + url.toLowerCase() + key + projectId + document.domain.toLowerCase()
  return md5(sign)
}


function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    // if(response.data.status !== 1){
    //   helper.alertError("授权失败:" + response.data.message)
    // }
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  helper.alertError("网络异常" + response.status)
  return {
    status: -404,
    msg: '网络异常'
  }
}

export default {
  post: function (url, data) {
    let apiUrl = url
    axios.default.timeout = 10000
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    const instance = axios.create()
    instance.defaults.headers.post['Content-Type'] = 'application/json'
    if (url.substring(0, 1) !== '/') {
      url = '/' + url
    }
    var sign = getSign(url)
    url = baseUrl + "/api/" + url
    url = url + "?sign=" + sign + "&timestamp=" + timestamp

    var result= instance.post(url, data).then(
      (response) => {
        return checkStatus(response)
      }
    )
    console.info(result,"post接口:" + apiUrl,"URL:" + url)
    return result
  },
  getLogin(url, params) {
    var loginUser = store.state.userStore.loginUser
    if (loginUser === null) {
      helper.alertError("您未登陆")
      return
    }
    var loginuserid = loginUser.id
    var token = url.toLowerCase() + timestamp + loginUser.userName.toLowerCase()
    token = md5(token)
    params = {...params, token, loginuserid}
    return this.get(url, params)
  },
  get(url, params) {
    let apiUrl = url
    if (url.substring(0, 1) !== '/') {
      url = '/' + url
    }
    var sign = getSign(url)
    params = {...params, sign, timestamp}
    var result = axios({
      method: 'get',
      baseURL: baseUrl + "/api/",
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    )
    console.info(result,"get接口:" + apiUrl,"URL:" + baseUrl + "/api/" + url)
    return result
  }
}


// 配置帮助文档 https://www.cnblogs.com/zhouyangla/p/6753673.html

