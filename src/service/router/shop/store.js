export default [{
    path: '/store/class', //店铺分类页面
    meta: {
      title: '分类'
    },
    name: 'store_class',
    component: () => import('src/views/shop/store/class.vue')
  },
  {
    path: '/store/index', //店铺首页
    meta: {
      title: '店铺首页'
    },
    name: 'store_index',
    component: () => import('src/views/shop/store/index.vue')
  },
  {
    path: '/store/info', //店铺首页
    meta: {
      title: '店铺信息'
    },
    name: 'store_info',
    component: () => import('src/views/shop/store/info.vue')
  },
  {
    path: '/store/news', //店铺首页
    meta: {
      title: '店铺动态'
    },
    name: 'store_news',
    component: () => import('src/views/shop/store/news.vue')
  },
  {
    path: '/store/new', //店铺上新
    meta: {
      title: '店铺上新'
    },
    name: 'store_new',
    component: () => import('src/views/shop/store/news.vue')
  }
]
