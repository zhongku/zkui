
export default [
    {
       path: '/article/topline',
       meta: {
           title: '头条'
       },
       component: r => require.ensure([], () => r(require('src/views/cms/article/TopLine')), 'user')
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