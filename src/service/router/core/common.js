
export default [
  {
    path: '/', // 默认为空的时候，挑战到首页
    meta: {
      title: '首页'
    },
    name: 'commont_index',
    component: () => import('src/views/default')
  },
  {
    path: '/index', // 默认为空的时候，挑战到首页
    meta: {
      title: '首页'
    },
    name: 'commont_index_2',
    component: () => import('src/views/default')
  },
  {
    path: '/default', // 默认为空的时候，挑战到首页
    meta: {
      title: '首页'
    },
    name: 'commont_default',
    component: () => import('src/views/default')
  },
  {
    path: '/url', // 默认为空的时候，挑战到首页
    meta: {
      title: '网站地图'
    },
    name: 'commont_url',
    component: () => import('src/views/url')
  },
  {
    path: '/test', // 默认为空的时候，挑战到首页
    meta: {
      title: '首页'
    },
    name: 'commont_test',
    component: () => import('src/views/test')
  },
  {
    path: '/test1', // 默认为空的时候，挑战到首页
    meta: {
      title: '测试'
    },
    name: 'commont_test1',
    component: () => import('src/views/test1')
  },
  {
    path: '/test2', // 默认为空的时候，挑战到首页
    meta: {
      title: '测试'
    },
    name: 'commont_test2',
    component: () => import('src/views/test2')
  }
]