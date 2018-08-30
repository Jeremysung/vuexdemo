// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/vuexdemo/Vuex/index.html'),
    assetsRoot: path.resolve(__dirname, '../vuexdemo/Vuex/dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/vuexdemo/Vuex/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    host:"127.0.0.1",
    port: 4080,
    assetsSubDirectory: 'static',

    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://192.168.12.131:8082', //dev
        // target: 'http://192.168.12.173:5522', //dev Local
        // target: 'http://47.97.114.251:7080', //sit
        changeOrigin: true,
        //pathRewrite: {
        //  '^/api': ''
        //}
      }
    }
  }
}
