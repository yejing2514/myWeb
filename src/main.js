// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'static/css/iconfont.css'
import 'static/css/normalize.css'
import 'nprogress/nprogress.css'

Vue.directive('navPromission', {
  inserted: function (el, binding) {
    let allPromissionData = sessionStorage.getItem('UserNavPromission')
    let userPromission = JSON.stringify(binding.value)
    if (allPromissionData.indexOf(userPromission) === -1) {
      $(el).remove()
    }
  }
})

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
