
const distpickerComponent = require('./Distpicker.vue')
const distpicker = {
  install: function(Vue) {
    Vue.component('v-distpicker', distpickerComponent.default || distpickerComponent)
  }
}

module.exports = distpicker
