const routes = [
    {
      path: '/login',
      name: 'Login',
      title: 'Login',
      meta: {requiredAuth: false},
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/',
      name: 'Dashboard',
      title: 'Dashboard',
      meta: {requiredAuth: false},
      component: () => import('../views/DashboardView.vue')
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
      path: '/about',
      name: 'About',
      title: 'About',
      meta: {requiredAuth: false},
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products/new',
      name: 'NewProduct',
      title: 'Add Product',
      meta: {requiredAuth: false},
      component: () => import('../views/Product.vue')
    },
    {
      path: '/products/edit',
      name: 'EditProduct',
      title: 'Edit Product',
      meta: {requiredAuth: false},
      component: () => import('../views/Product.vue')
    }
  ];

export default routes;