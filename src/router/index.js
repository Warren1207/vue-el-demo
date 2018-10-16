import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Layout,
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/dashboard/Dashboard'),
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
        }
      ]
    }
  ]
})
