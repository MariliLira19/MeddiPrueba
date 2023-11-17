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
    component: () => import(/* webpackChunkName: "Registo" */ '~/pages/Registro.vue'),
  },
  {
    path: '/info',
    name: 'Informacion',
    component: () => import(/* webpackChunkName: "home" */ '~/pages/infohospital.vue'),
  },
  {
    path: '/create',
    name: 'Alta',
    component: () => import(/* webpackChunkName: "home" */ '~/pages/altahospital.vue'),
  },
  {
    path: '/update',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "home" */ '~/pages/updatehospital.vue'),
  },
  // ...otras rutas
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
