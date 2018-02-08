// 常用帮助函数
'use strict'

import  weui from "weui.js"
export default {
    // 操作成功提示函数
    alertSucess(data){
         // 使用mint-ui的toast函数  http://mint-ui.github.io/docs/#/en2/toast

        console.info(data)
        weui.toast(data, {
            duration: 2000,
             className: 'toast-sucess'
         })
    },

    // 操作失败提示函数
    alertError(data){
        console.error(data)
        weui.toast(data, {
            duration: 2000,
             className: 'toast-error'
         })
   },


   // 在开发模式下输出类的详细
   console(data){
    if(process.env.NODE_ENV === 'development'){
        console.dir(data)
    }
   }
}
