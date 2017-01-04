'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Icon = require('vue-awesome/components/Icon.vue');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.component('icon', _Icon2.default);

new _vue2.default({
  router: _router2.default,
  render: function render(h) {
    return h(_App2.default);
  }
}).$mount('#app');
//# sourceMappingURL=main.js.map