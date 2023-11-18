// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '~/pages/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '~/pages/Login.vue'),
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "Registo" */ '~/pages/Registro.vue'),
  },
  {
    path: '/info/:id',
    name: 'Info',
    component: () => import(/* webpackChunkName: "Info" */ '~/pages/Info.vue'),
    meta: { requiresAuth: true },
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
    //component: Lista,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  // ...otras rutas
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



router.beforeEach((to, from, next) => {
  // Verifica si la ruta requiere autenticación y si hay un token válido
  if (to.matched.some(record => record.meta.requiresAuth) && !isTokenValid()) {
    // Redirecciona a la página de inicio de sesión si no hay un token válido
    next({ name: 'Lista' });
  } else {
    // Continúa la navegación
    next();
  }
});

// Función para verificar si el token es válido
function isTokenValid() {
  const token = localStorage.getItem('token');

  if (token) {
    const decodedToken = parseJwt(token);
    const expirationTime = decodedToken.exp * 1000; // en milisegundos

    return Date.now() < expirationTime;
  }

  return false;
}



export default router;
