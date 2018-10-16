import Layout from '@/views/layout/Layout.vue'

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/Dashboard'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', noCache: true }
      },
      {
        path: 'empty',
        component: () => import('@/views/empty/Empty'),
        name: 'Dashboard',
        meta: { title: '空白页', icon: 'empty' }
      }
    ]
  }
]
