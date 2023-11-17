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
    name: 'Info',
    component: () => import(/* webpackChunkName: "Info" */ '~/pages/Info.vue'),
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import(/* webpackChunkName: "Create" */ '@/pages/create.vue'),
  },
  {
    path: '/update',
    name: 'Update',
    component: () => import(/* webpackChunkName: "Update" */ '~/pages/Update.vue'),
  },
  {
    path: '/lista',
    name: 'Lista',
    component: () => import(/* webpackChunkName: "Lista" */ '~/pages/Lista.vue'),
  },
  // ...otras rutas
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
