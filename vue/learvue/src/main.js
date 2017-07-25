// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import $ form 'jquery'
// import 'bootstrap/js/bootstrap.min.js'
// import 'bootstrap/css/bootstrap.min.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
import '@/assets/css/app'
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
