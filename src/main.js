// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import ElementUI from 'element-ui'
import VueCordova from 'vue-cordova'

import './assets/styles/index.scss'
import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(ElementUI)
Vue.use(VueCordova)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// document.addEventListener('deviceready', function () {
//   new Vue({
//     el: '#app',
//     router,
//     template: '<App/>',
//     components: { App }
//   })
//   window.navigator.splashscreen.hide()
// }, false)
