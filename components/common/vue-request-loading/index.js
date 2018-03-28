
const RequestLoadingComponent = require('./requestLoading.vue')
const requestLoading = {
  install: function(Vue) {
    Vue.component('request-loading', RequestLoadingComponent.default || RequestLoadingComponent)
  }
}

module.exports = requestLoading
