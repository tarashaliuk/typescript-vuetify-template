import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

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
    name: 'AuthLayout',
    component: () => import(/* webpackChunkName: "auth" */ '../layouts/AuthLayout.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

export default router;
