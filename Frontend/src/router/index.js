import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/nosotros',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/contacto',
          name: 'contact',
          component: () => import('../views/ContactView.vue')
        },
        {
          path: '/servicios',
          name: 'services',
          component: () => import('../views/ServicesView.vue')
        },
        {
          path: '/servicios/:id',
          name: 'servicesDetail',
          component: () => import('../views/ServicesDetailView.vue')
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      redirect: { name: 'login' },
      component: () => import('../layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/auth/RegisterView.vue')
        }
      ]
    },

    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
