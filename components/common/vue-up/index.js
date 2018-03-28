import { events } from './events'
const upComponent = require('./up.vue')
const VueUpPlugin = {
  install: function(Vue) {
    Vue.component('up', upComponent.default || upComponent);
    Vue.prototype.$up = (params) => {
      if (typeof params === 'string') {
        params = { message: params }
      }
      if (typeof params === 'object') {
        events.$emit('TRIGGER', params)
      }
    };
  }
}
module.exports = VueUpPlugin
