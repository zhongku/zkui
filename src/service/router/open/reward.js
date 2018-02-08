export default [
  {
    path: '/user/reward/list',
    meta: {
      title: '我的分润',
      login: true
    },
    name: 'reward_list',
    component: () => import('src/views/open/reward/list')
  },
  {
    path: '/user/reward/show/:id',
    meta: {
      title: '分润详情',
      login: true
    },
    name: 'reward_show',
    component: () => import('src/views/open/reward/show')
  }
]
