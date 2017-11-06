import Vue from 'vue'
import Router from 'vue-router'
import * as names from './names'
import storage from '../module/storage'
import NProgress from 'nprogress'

Vue.use(Router)

const router = new Router({
  routes: [{
    name: names.INDEXNAV,
    path: '/indexNav',
    component(resolve) {
      require(['../components/index-nav.vue'], resolve)
    }
  }, {
    name: names.LOGIN,
    path: '/login',
    component(resolve) {
      require(['../components/login.vue'], resolve)
    }
  }]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path !== '/indexNav') {
    storage.setMenu({
      to: to.name
    })
    if (!sessionStorage.getItem('User')) {
      next({
        path: '/indexNav'
      })
    }
  }
  next()
})

router.afterEach(transition => {
  NProgress.done()
})

export default router
