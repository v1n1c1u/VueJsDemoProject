const routes = [
    {
      path: '/',
      name: 'Login',
      title: 'Login',
      meta: {requiredAuth: false},
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
    },
    {
      path: '/clients/new',
      name: 'NewClient',
      title: 'Add Client',
      meta: {requiredAuth: false},
      component: () => import('../views/Client.vue')
    },
    {
      path: '/clients/edit',
      name: 'EditClient',
      title: 'Edit Client',
      meta: {requiredAuth: false},
      component: () => import('../views/Client.vue')
    }
  ];

export default routes;