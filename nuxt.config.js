const path = require('path')
const webpack = require('webpack')
const apiConfig = require('./api.config')
const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  srcDir: __dirname,
  offline: true,
  loading: {
    color: '#2196f3'
  },
  cache: {
    max: 100,
    maxAge: 1000 * 60 * 15
  },
  build: {
    // analyze: true,
    // analyze: {
    //   analyzerMode: 'static'
    // },
    publicPath: '/',
    // 将重复引用的(第三方/自有)模块添加到vendor.bundle.js
    vendor: [
      'swiper',
      'lodash',
      'store',
      'axios',
      'particles.js',
      'element-ui'
    ],
    // 为 JS 和 Vue 文件定制 babel 配置。https://nuxtjs.org/api/configuration-build/#analyze
    babel: {
      presets: ['es2015', 'stage-0'],
      'plugins': [
        ['component', [{
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-default'
          },
          'transform-async-to-generator',
          'transform-runtime'
        ]],
        'transform-async-to-generator',
        'transform-runtime'
      ],
      comments: true
    },
    // Run ESLINT on save
    /*
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
    */
  },
  dev: isProdMode,
  env: {
    baseUrl: apiConfig.baseUrl,
    HOST_URL: apiConfig.baseUrl
  },
  plugins: [
    { src: '~/plugins/lodash.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/image-popup.js', ssr: false },
    { src: '~/plugins/vue-empty.js' },
    { src: '~/plugins/vue-loading.js' },
    { src: '~/plugins/vue-comment.js' },
    { src: '~/plugins/vue-piccode.js' },
    { src: '~/plugins/distpicker.js' },
    { src: '~/plugins/element-ui', ssr: true },
    { src: '~/plugins/vue-lazyload.js', ssr: true },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/baiduanaly.js', ssr: false },
  ],
  head: {
    title: '品致家',
    titleTemplate: '%s-品致家',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { name: 'MobileOptimized', 'content': '320' },
      { name: 'HandheldFriendly', 'content': 'True' },
      { name: 'apple-mobile-web-app-capable', 'content': 'yes' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,user-scalable=yes' },
      { name: 'applicable-device', content: 'pc,mobile' },
      { hid: 'keywords', name: 'keywords', content: '乐器商城,乐器电子商务网站,乐器网店,吉他,乐器,中国乐器，民族乐器，小号，长号，黑管，萨克斯，小提琴，乐器培训，乐器租赁，乐器共享' },
      { hid: 'description', name: 'description', content: '乐器之乡电商平台是专业的乐器商城，种类齐全，商品涵盖各类西洋乐器、民族乐器、乐器箱包：吉他、提琴、管乐，同时提供乐器培训平台。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', type: 'text/plain', href: '/humans.txt' }
    ],
    script: [{
      type: 'text/javascript',
      src: '/scripts/browser.js'
    }, {
      type: 'text/javascript',
      src: '/scripts/jquery.min.js'
    }, {
      type: 'text/javascript',
      src: '/scripts/lightbox.min.js'
    }],
    noscript: [
      { innerHTML: '您的浏览器不支持JavaScript脚本运行' }
    ]
  },
  router: {
    middleware: ['ssr-cookie', 'change-page-col'],
    linkActiveClass: 'link-active',
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    extendRoutes(routes) {}
  },
  css: [
    'element-ui/lib/theme-default/index.css',
    { src: '~assets/sass/app.scss', lang: 'sass' },
    'swiper/dist/css/swiper.css'
  ]
}
