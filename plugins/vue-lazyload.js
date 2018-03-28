import Vue from 'vue'
Vue.use(require('vue-lazyload'), {
  error: '/images/loading.png',
  loading: '/images/loading.png'
})
