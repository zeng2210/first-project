'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath:
      process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint
        ? [
          {
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [resolve('src'), resolve('test')],
            options: {
              formatter: require('eslint-friendly-formatter'),
              emitWarning: !config.dev.showEslintErrorsInOverlay
            }
          }
        ]
        : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('test'),
          resolve('/node_modules/element-ui/src'),
          resolve('/node_modules/element-ui/packages'),
          resolve('/node_modules/_element-ui@2.0.9@element-ui/src'),
          resolve('/node_modules/_element-ui@2.0.9@element-ui/packages'),
          resolve('/node_modules/_element-ui@2.0.10@element-ui/src'),
          resolve('/node_modules/_element-ui@2.0.10@element-ui/packages'),
          resolve('/node_modules/_element-ui@2.0.11@element-ui/src'),
          resolve('/node_modules/_element-ui@2.0.11@element-ui/packages'),
          resolve('/node_modules/_element-ui@2.1.0@element-ui/src'),
          resolve('/node_modules/_element-ui@2.1.0@element-ui/packages'),
          resolve('/node_modules/_element-ui@2.2.0@element-ui/src'),
          resolve('/node_modules/_element-ui@2.2.0@element-ui/packages'),
          resolve('/node_modules/_element-ui@2.2.1@element-ui/src'),
          resolve('/node_modules/_element-ui@2.2.1@element-ui/packages')
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
