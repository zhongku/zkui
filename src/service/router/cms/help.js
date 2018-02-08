
export default [
 {
    path: '/help/index',
    meta: {
        title: '客服中心'
    },
    component: r => require.ensure([], () => r(require('src/views/cms/help/index')), 'user')
},
{
    path: '/help/list',
    meta: {
        title: '客服中心列表'
    },
    component: r => require.ensure([], () => r(require('src/views/cms/help/list')), 'user')
},
{
    path: '/help/show',
    meta: {
        title: '客服中心详情页'
    },
    component: r => require.ensure([], () => r(require('src/views/cms/help/show')), 'user')
}
]