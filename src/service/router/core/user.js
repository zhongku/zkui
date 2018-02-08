export default [
    {
       path: '/user/index',
       meta: {
           title: '会员中心',
           login: true
       },
       name: 'user_index',
       component: () => import('src/views/core/user/index')
   },
   {
       path: '/user/login',
       meta: {
           title: '会员中心'
       },
       name: 'user_login',
       component: () => import('src/views/core/user/login')
   },
   {
       path: '/user/reg',
       meta: {
           title: '会员注册'
       },
       name: 'user_reg',
       component: () => import('src/views/core/user/reg')
   },
   {
       path: '/user/agreement',
       meta: {
           title: '注册协议'
       },
       name: 'user_agreement',
       component: () => import('src/views/core/user/agreement')
   },
   {
       path: '/user/qrcode',
       meta: {
           title: '二维码名片',
           login: true
       },
       name: 'user_qrcode',
       component: () => import('src/views/core/user/qrcode')
   },
   {
       path: '/user/tree',
       meta: {
           title: '组织架构图',
           login: true
       },
       name: 'user_tree',
       component: () => import('src/views/core/user/tree')
   },
   {
       path: '/user/recuser',
       meta: {
           title: '我的会员',
           login: true
       },
       name: 'user_recuser',
       component: () => import('src/views/core/user/recuser')
   },
   {
       path: '/user/security',
       meta: {
           title: '安全设置',
           login: true
       },
       name: 'user_security',
       component: () => import('src/views/core/user/security')
   },
   {
       path: '/user/password',
       meta: {
           title: '密码修改',
           login: true
       },
       name: 'user_password',
       component: () => import('src/views/core/user/password')
   },
   {
       path: '/user/safepassword',
       meta: {
           title: '安全设置',
           login: true
       },
       name: 'user_safepassword',
       component: () => import('src/views/core/user/safepassword')
   },
   {
       path: '/user/findpassword',
       meta: {
           title: '找回密码',
           login: true
       },
       name: 'user_findpassword',
       component: () => import('src/views/core/user/findpassword')
   },
   {
       path: '/user/info',
       meta: {
           title: '账户信息',
           login: true
       },
       name: 'user_info',
       component: () => import('src/views/core/user/info')
   },
   {
       path: '/user/adduser',
       meta: {
           title: '注册会员',
           login: true
       },
       name: 'user_adduser',
       component: () => import('src/views/core/user/adduser')
   },
     {
       path: '/user/view/:id',
       meta: {
         title: '会员详情',
         login: true
       },
       name: 'user_view',
       component: () => import('src/views/core/user/view')
     },
   {
       path: '/user/logout',
       meta: {
           title: '退出登录',
           login: true
       },
       name: 'user_logout',
       component: () => import('src/views/core/user/logout')
   },
   {
       path: '/user/identity/index',
       meta: {
           title: '实名认证',
           login: true
       },
       name: 'user_identity',
       component: () => import('src/views/core/identity/index')
   }
   ]