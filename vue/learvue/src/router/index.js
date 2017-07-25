import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'

require('../../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js')
Vue.use(Router)
const Foo = { template: '<div>学习</div>' }
const Bar = { template: '<div>博客</div>' }
const About = { template: '<div>博客</div>' }
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      alias: '/index',
      component: Home
    },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/about', component: About }
  ]
})
