import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/contents/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [
    { path: '/home', component: Home },
    { path: '/:id?', redirect: '/home' }
  ]
})
