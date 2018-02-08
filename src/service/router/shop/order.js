export default [
{
    path: '/order/cart',
    meta: {
        title: '购物车'
    },
    name: 'order_cart',
    component: () => import('src/views/shop/order/cart')
},
{
    path: '/order/list',
    meta: {
        title: '我的订单',
        login: true
    },
    name: 'order_list',
    component: () => import('src/views/shop/order/list')
},
{
    path: '/user/favorite/index',
    meta: {
        title: '我的收藏',
        login: true
    },
    name: 'user_favorite',
    component: () => import('src/views/shop/favorite/index')
},
{
    path: '/user/buyeraddress/index',
    meta: {
        title: '收货地址',
        login: true
    },
    name: 'buyeraddress_index',
    component: () => import('src/views/shop/buyeraddress/index')  
},
{
    path: '/order/buyfromproduct',
    meta: {
        title: '提交订单'
    },
    name: 'order_buyfromproduct',
    component: () => import('src/views/shop/order/buyfromproduct') 
},
{
    path: '/pay/index',
    meta: {
        title: '支付订单',
        login: true
    },
    name: 'pay_index',
    component: () => import('src/views/shop/pay/index')  
},
{
    path: '/user/buyeraddress/edit',
    meta: {
        title: '地址编辑',
        login: true
    },
    name: 'buyeraddress_edit',
    component: () => import('src/views/shop/buyeraddress/edit')
},
{
    path: '/userplan/apply',
    meta: {
        title: '债事申请',
        login: true
    },
    name: 'userplan_apply',
    component: () => import('src/views/shop/userplan/apply')
},
{
    path: '/userplan/show',
    meta: {
        title: '债事展示',
        login: true
    },
    name: 'userplan_show',
    component: () => import('src/views/shop/userplan/show')
}
]