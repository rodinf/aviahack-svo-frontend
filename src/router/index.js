import Vue from 'vue'
import VueRouter from 'vue-router'
import CONFIG from "@/conf";
import store from "@/store/index"

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: {
      path: '/'
    }
  },
  {
    path: '/',
    name: 'index',
    meta: {
      layout: 'DefaultLayout',
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../pages/AuthPage.vue'),
    meta: {
      layout: 'AuthLayout',
      title: 'Вход',
      requiresAuth: false
    }
  },
  {
    path: '/controller',
    name: 'controller',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/ControllerPage.vue'),
    meta: {
      layout: 'ControllerLayout',
      title: 'Диспетчер',
      requiresAuth: true
    }
  },
  {
    path: '/driver',
    name: 'driver',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/DriverPage.vue'),
    meta: {
      layout: 'DriverLayout',
      title: 'Водитель',
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/AboutPage.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.user.auth) {
      next({ name: 'auth' })
    }
    else if (store.state.user.auth && store.state.user.type !== to.name) {
      next({ name: store.state.user.type })
    }
    else {
      next()
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

const DEFAULT_TITLE = CONFIG.SYS_NAME + ' ' + CONFIG.AIRPORT.NAME;

router.afterEach((to) => {
  Vue.nextTick(() => {
    if (to.meta.title != undefined) {
      document.title = (to.meta.title + ' > ' + DEFAULT_TITLE)
    }
    else {
      document.title = DEFAULT_TITLE
    }
  });
});

export default router
