import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout/index.vue'
import { constantRoutes } from './constantRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout,
    meta: {},
    redirect: '/home',
    children: [
      ...constantRoutes
    ]
  },
  {
    path: '*',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '404 Not Found',
      hidden: true
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
