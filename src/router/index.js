'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = require('../components/contents/Home');

var _Home2 = _interopRequireDefault(_Home);

var _MusicWorshop = require('../components/contents/MusicWorshop');

var _MusicWorshop2 = _interopRequireDefault(_MusicWorshop);

var _Tunet = require('../components/contents/Tunet');

var _Tunet2 = _interopRequireDefault(_Tunet);

var _Raytracer = require('../components/contents/Raytracer');

var _Raytracer2 = _interopRequireDefault(_Raytracer);

var _Airhockey = require('../components/contents/Airhockey');

var _Airhockey2 = _interopRequireDefault(_Airhockey);

var _Autopick = require('../components/contents/Autopick');

var _Autopick2 = _interopRequireDefault(_Autopick);

var _Eightpuzzle = require('../components/contents/Eightpuzzle');

var _Eightpuzzle2 = _interopRequireDefault(_Eightpuzzle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  mode: 'history',
  hashbang: false,
  routes: [{ path: '/', component: _Home2.default }, { path: '/mw', component: _MusicWorshop2.default }, { path: '/tunet', component: _Tunet2.default }, { path: '/raytracer', component: _Raytracer2.default }, { path: '/airhockey', component: _Airhockey2.default }, { path: '/autopick', component: _Autopick2.default }, { path: '/eightpuzzle', component: _Eightpuzzle2.default }, { path: '/:id?', redirect: '/' }]
});
//# sourceMappingURL=index.js.map