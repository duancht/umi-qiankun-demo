export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  // 配置子应用sub-app关联的路由
  {
    name: 'form.advanced-form',
    path: '/sub-app/form/advanced-form',
    microApp: 'sub-app',
    microAppProps: {
      base: '',     // 路由传空可以直接跳转到对应路由，不会重定向到sub-app首页
      showMenu: false,  // 子应用不需要渲染菜单
    }
  },
  {
    name: 'sub-app',
    path: '/sub-app/*',
    microApp: 'sub-app',
    microAppProps: {
      base: '',
      showMenu: true,
    }
  },
  {
    component: './404',
  },
];
