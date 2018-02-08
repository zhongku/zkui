export default [{
    path: '/product/class',
    // 分类页面
    meta: {
      title: '分类'
    },
    name: 'product_class',
    component: () => import('src/views/shop/product/class.vue')
  },
  {
    path: '/product/list/', // 商品列表页
    meta: {
      title: '商品列表页'
    },
    name: 'product_list',
    component: () => import('src/views/shop/product/list.vue')
   },
  // {
  //   path: '/product/show/:id', //商品详情页
  //   meta: {
  //     title: '分类'
  //   },
  //   name: 'product_show',
  //   component: () => import('src/views/shop/product/show.vue')
  // },
  {
    path: '/product/search', //商品搜索页
    meta: {
      title: '分类'
    },
    name: 'product_search',
    component: () => import('src/views/shop/product/search.vue')
  },
  {
    path: '/user/product/footprint', //商品搜索页
    meta: {
      title: '我的足迹',
      login: true
    },
    component: r => require.ensure([], () => r(require('src/views/shop/product/footprint.vue')), 'product_footprint')
  }
  // {
  //   path: '/product/show_preview/:id', //商品搜索页
  //   meta: {
  //     title: '图片浏览',
  //     login: true
  //   },
  //   component: r => require.ensure([], () => r(require('src/views/shop/product/show_preview.vue')), 'product_preview')
  // }
]