// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '~/pages/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '~/pages/Login.vue'),
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "login" */ '~/pages/Registro.vue'),
  },
  // ...otras rutas
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
