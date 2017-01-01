import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/contents/Home'
import MusicWorkshop from '../components/contents/MusicWorshop'
import Tunet from '../components/contents/Tunet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [
    { path: '/', component: Home },
    { path: '/mw', component: MusicWorkshop },
    { path: '/tunet', component: Tunet },
    { path: '/:id?', redirect: '/' }
  ]
})
