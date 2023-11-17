import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _30ec2d46 = () => interopDefault(import('..\\pages\\create.vue' /* webpackChunkName: "pages/create" */))
const _53cf466f = () => interopDefault(import('..\\pages\\Info.vue' /* webpackChunkName: "pages/Info" */))
const _d32fa8dc = () => interopDefault(import('..\\pages\\Lista.vue' /* webpackChunkName: "pages/Lista" */))
const _78d65478 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _6bb4ea18 = () => interopDefault(import('..\\pages\\Registro.vue' /* webpackChunkName: "pages/Registro" */))
const _09c8a26c = () => interopDefault(import('..\\pages\\Update.vue' /* webpackChunkName: "pages/Update" */))
const _37bc9181 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/create",
    component: _30ec2d46,
    name: "create"
  }, {
    path: "/Info",
    component: _53cf466f,
    name: "Info"
  }, {
    path: "/Lista",
    component: _d32fa8dc,
    name: "Lista"
  }, {
    path: "/Login",
    component: _78d65478,
    name: "Login"
  }, {
    path: "/Registro",
    component: _6bb4ea18,
    name: "Registro"
  }, {
    path: "/Update",
    component: _09c8a26c,
    name: "Update"
  }, {
    path: "/",
    component: _37bc9181,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
