import Vue from 'vue'
import Router from 'vue-router'
import store from 'src/store/index'
import helper from 'src/service/common/helper'
// core
import Common from './core/common' // 通用、、
import User from './core/User' // 用户

// open 项目
import Reward from './open/reward' // 分润
import Debt from './open/debt' // 分润

// 财务
// finance
import Account from './finance/account' // 通用
import Bill from './finance/bill' // 财务

// 商城
import order from './shop/order' // 订单
//import Product from './shop/product' // 商品
//import store from './shop/store' //dian

import demo from './core/demo'
Vue.use(Router)


const router = new Router({
    routes: [
        ...demo,
        ...Common,
        ...User,
        ...Reward,
        ...Account,
        ...Bill,
       // ...Product,
        ...Debt,
        ...order
      ],
      mode: 'history', //路由模式
      strict: process.env.NODE_ENV !== 'production',
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return {
                    x: 0,
                    y: to.meta.savedPosition || 0
                }
            }
        }
  })

 router.beforeEach((to, from, next) => {
     window.document.title = to.meta.title
     var isLogin = store.state.userStore.isLogin // 判断是否登陆
     if(to.meta.login){
         if(!isLogin){
            helper.alertError("请先登录")
            return next({ path: '/user/login' })  // 如果没有登陆跳转到登陆页面
         }
     }
     // 如果访问的是登陆页面或者注册页面，登陆成功后跳转到登陆会员中心
     if(isLogin && (to.path === '/user/login' || to.path === '/user/reg')){
        helper.alertSucess("您已成功登陆")
        return next({ path: '/user/index' })
    }
    next()
})

router.afterEach((toRoute, fromRoute) => {
        // const to = toRoute.path
        // const h = sess.get(to)
        // if (h && h.scrollTop >= 0) {
        //   Vue.nextTick(() => {
        //     window.scroll(0, h.scrollTop)
        //   })
        // }
        // store.commit('updateLoadingStatus', {isLoading: false})
 })

export default router