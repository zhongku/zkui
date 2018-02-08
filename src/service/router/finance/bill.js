export default [
    {
        path: '/user/account/index',
        meta: {
            title: '钱包'
        },
        name: 'account_index',
        component: () => import('src/views/finance/account/index')
    },
    {
        path: '/user/account/transfer',
        meta: {
            title: '转账'
        },
        name: 'account_transfer',
        component: () => import('src/views/finance/account/transfer')
    },
    {
        path: '/user/account/transferbill',
        meta: {
            title: '转账记录'
        },
        name: 'account_transferbill',
        component: () => import('src/views/finance/account/transferbill')
    },
    {
        path: '/user/account/recharge',
        meta: {
            title: '充值'
        },
        name: 'account_recharge',
        component: () => import('src/views/finance/account/recharge')
    },
    {
        path: '/user/account/rechargebill',
        meta: {
            title: '充值记录'
        },
        name: 'account_rechargebill',
        component: () => import('src/views/finance/account/rechargebill')
    },
    {
        path: '/user/account/withdraw',
        meta: {
            title: '提现',
            login: true
        },
        name: 'account_withdraw',
        component: () => import('src/views/finance/account/withdraw')
    },
    {
        path: '/user/account/withdrawbill',
        meta: {
            title: '提现记录',
            login: true
        },
        name: 'account_withdrawbill',
        component: () => import('src/views/finance/account/withdrawbill')
    },
    {
        path: '/user/account/bankcard/index',
        meta: {
            title: '我的银行卡',
            login: true
        },
        name: 'account_bankcard',
        component: () => import('src/views/finance/account/bankcard/index')
    },    
    {
        path: '/user/account/financebill',
        meta: {
            title: '财务记录',
            login: true
        },
        name: 'account_financebill',
        component: () => import('src/views/finance/account/financebill')
    },
    {
        path: '/user/account/financebillview/:id',
        meta: {
            title: '财务详情',
            login: true
        },
        name: 'account_financebillview',
        component: () => import('src/views/finance/account/financebillview')
    },
    {
        path: '/user/account/rechargebillview',
        meta: {
            title: '充值详情',
            login: true
        },
        name: 'account_rechargebillview',
        component: () => import('src/views/finance/account/rechargebillview')
    },
    {
        path: '/user/account/withdrawbillview',
        meta: {
            title: '提现详情',
            login: true
        },
        name: 'account_withdrawbillview',
        component: () => import('src/views/finance/account/withdrawbillview')
    },
    {
        path: '/user/account/transferbillview',
        meta: {
            title: '转账详情',
            login: true
        },
        name: 'account_transferbillview',
        component: () => import('src/views/finance/account/transferbillview')
    }
    ]