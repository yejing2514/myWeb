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
    component (resolve) {
      require(['../components/index-nav.vue'], resolve)
    }
  }, {
    name: names.ACCOUNTINGPC,
    path: '/accountingPC',
    component (resolve) {
      require(['../components/accountingPC/login.vue'], resolve)
    }
  }, {
    name: names.ACCOUNTINGMB,
    path: '/accountingMB',
    component (resolve) {
      require(['../components/accountingMB/index.vue'], resolve)
    }
  }, {
    name: names.ACCOUNTINGWX,
    path: '/accountingWX',
    component (resolve) {
      require(['../components/accountingWX/index.vue'], resolve)
    }
  }, {
    name: names.CHATROOM,
    path: '/chatRoom',
    component (resolve) {
      require(['../components/chatRoom/index.vue'], resolve)
    }
  }]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path !== '/indexNav') {
    storage.setMenu({
      to: to.name
    })
  }
  next()
})

router.afterEach(transition => {
  NProgress.done()
})

export default router
