const routes = [
    {
      path: '/login',
      name: 'Login',
      title: 'Login',
      meta: {requiredAuth: false},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/products',
      name: 'Products',
      title: 'Products Control',
      meta: {requiredAuth: false},
      component: () => import('../views/ProductControlView.vue')
    },
    {
      path: '/clients',
      name: 'Clients',
      title: 'Clients Control',
      meta: {requiredAuth: false},
      component: () => import('../views/ClientControlView.vue')
    },
    {
      path: '/',
      name: 'Dashboard',
      title: 'Dashboard',
      meta: {requiredAuth: false},
      component: () => import('../views/DashboardView.vue')
    }
  ];

export default routes;