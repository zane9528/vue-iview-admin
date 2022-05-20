export const constantRoutes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'home-icon'
    }
  },
  {
    path: '/myTable',
    name: 'MyTable',
    component: () => import('@/views/my-table/index.vue'),
    meta: {
      title: '表格',
      icon: 'table-icon'
    }
  },
  {
    path: '/myForm',
    name: 'MyForm',
    component: () => import('@/views/my-form/index.vue'),
    meta: {
      title: '表单',
      icon: 'form-icon'
    }
  }
]
