import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import Seek from '@/views/seek/index'
import Shop from '@/views/shop/index'
import Zine from '@/views/zine/index'
import Expert from '@/views/expert/index'
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js')
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
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
    {
      path: '/seek',
      alias: '/index',
      component: Seek
    },
    {
      path: '/shop',
      alias: '/index',
      component: Shop
    },
    {
      path: '/zine',
      alias: '/index',
      component: Zine
    },
    {
      path: '/expert',
      alias: '/index',
      component: Expert
    },
    {
      path: '*',
      // component: NotFound, //重定向
      redirect: (to) => {
      // return '/home'
      // console.log(to)
        if (to.path === '/123') {
          return '/home'
        } else if (to.path === '/stark') {
          return '/seek'
        } else {
          return '/shop'
        }
      }
    }
  ]
})
