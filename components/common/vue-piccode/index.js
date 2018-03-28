/**
 * Vue-piccode
 */

const PicCodeComponent = require('./piccode.vue')
const piccode = {
  install: function(Vue) {
    Vue.component('pic-code', PicCodeComponent.default || PicCodeComponent)
  }
}

module.exports = piccode
