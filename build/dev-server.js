require('./check-versions')()

var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

browserSync({
  port: 8888,
  ui: {
    port: 8889
  },
  server: {
    baseDir: '../src',

    middleware: [
      historyApiFallback(),
      devMiddleware,
      hotMiddleware
    ]
  },

  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [
    '../src/*.html'
  ]
})

// module.exports = app.listen(port, function (err) {
//   if (err) {
//     console.log(err)
//     return
//   }
//   var uri = 'http://localhost:' + port
//   console.log('Listening at ' + uri + '\n')
//
//   // when env is testing, don't need open it
//   if (process.env.NODE_ENV !== 'testing') {
//     opn(uri)
//   }
// })

