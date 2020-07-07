import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '@/views/Login.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: {name: 'Home'},
    name: 'MainLayout',
    component: () => import(/* webpackChunkName: "main" */ '../layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "main" */ '../views/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
    ]
  },
  {
    path: '/auth',
    redirect: {name: 'Login'},
    name: 'AuthLayout',
    component: () => import(/* webpackChunkName: "auth" */ '../layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      },
      {
        path: 'registration',
        name: 'Registration',
        component: () => import('../views/Registration.vue')
      },
      {
        path: 'reset-password',
        name: 'ResetPassword',
        component: () => import('../views/ResetPassword.vue')
      },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

export default router;
