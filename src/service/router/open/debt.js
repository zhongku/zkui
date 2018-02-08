export default [
    {
      path: '/user/debt/apply',
      meta: {
        title: '债事报备',
        login: true
      },
      name: 'debt_apply',
      component: () => import('src/views/open/debt/apply')
    },
    {
      path: '/user/debt/show/:id',
      meta: {
        title: '债事详情',
        login: true
      },
      name: 'debt_show',
      component: () => import('src/views/open/debt/show')
    },
    {
      path: '/user/debt/list',
      meta: {
        title: '我的债事',
        login: true
      },
      name: 'debt_list',
      component: () => import('src/views/open/debt/list')
    }
  ]
  