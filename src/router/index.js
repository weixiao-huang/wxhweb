import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/contents/Home'
import MusicWorkshop from '../components/contents/MusicWorshop'
import Tunet from '../components/contents/Tunet'
import Raytracer from '../components/contents/Raytracer'
import Airhockey from '../components/contents/Airhockey'
import Autopick from '../components/contents/Autopick'
import Eightpuzzle from '../components/contents/Eightpuzzle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [
    { path: '/', component: Home },
    { path: '/mw', component: MusicWorkshop },
    { path: '/tunet', component: Tunet },
    { path: '/raytracer', component: Raytracer },
    { path: '/airhockey', component: Airhockey },
    { path: '/autopick', component: Autopick },
    { path: '/eightpuzzle', component: Eightpuzzle },
    { path: '/:id?', redirect: '/' }
  ]
})
