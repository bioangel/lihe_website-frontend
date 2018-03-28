<template>
  <div class="cont" :class="{show:show,success:type==`success`,error:type==`error`,warn:type==`warn`}" :style="styles">
    <div class="all">
      <div class="close" @click.stop.prevent="close"><i class="iconfont icon-guanbi"></i></div>
      <div class="bd">
        <h2>
          <i v-show="type==`success`" class="iconfont icon-success"></i>
          <i v-show="type==`warn`" class="iconfont icon-tubiaozhizuomoban"></i>
          <i v-show="type==`error`" class="iconfont icon-error"></i>
          <b>{{title}}</b>
       </h2>
        <b :style="{color:color}">{{ message }}</b>
      </div>
    </div>
  </div>
</template>
<script>
import { events } from './events'
import { Id, split, listToDirection } from './utils'
import parseNumericValue from './parser'

export default {
  name: 'vue-up',
  computed: {
    actualWidth() {
      return parseNumericValue(this.width)
    },
    styles() {
      let { x, y } = listToDirection(this.position)
      let width = this.actualWidth.value
      let suffix = this.actualWidth.type
      let styles = {
        width: width + suffix,
        [y]: '0px'
      }
      if (x === 'center') {
        styles['left'] = `calc(50% - ${width/2}${suffix})`
      } else {
        styles[x] = '0px'
      }
      return styles
    },
  },
  data() {
    return {
      show: false,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: '#333',
      message: '',
      type: 'success',
      position: 'top left',
      timeout: 3000,
      title: '',
      width: 300
    }
  },
  methods: {
    close() {
      this.show = false
    }
  },
  mounted() {
    events.$on('TRIGGER', (payload) => {
      if (!payload.hasOwnProperty('message')) {
        return
      }
      this.message = payload.message
      this.color = payload.hasOwnProperty('color') ? payload.color : '#333';
      this.type = payload.hasOwnProperty('type') ? payload.type : 'success';
      this.position = payload.hasOwnProperty('position') ? payload.position : 'top left';
      this.timeout = payload.hasOwnProperty('timeout') ? payload.timeout : 3000;
      this.title = payload.hasOwnProperty('title') ? payload.title : '';
      this.backgroundColor = payload.hasOwnProperty('backgroundColor') ? payload.backgroundColor : 'rgba(0, 0, 0, 0.8)';
      this.show = true
      if (this.timeout > 0) {
        setTimeout(() => {
          this.show = false
        }, this.timeout)
      }
    })
  }
}

</script>
<style lang="scss" scoped>
@import '~assets/sass/mixins';
@import '~assets/sass/variables';
.cont {
  display: none;
  &.show {
    display: block;
    z-index: 99999;
  }
  z-index: 99999;
  width: 300px;
  background: #fff;
  position: fixed;
  left: 50%;
  box-shadow: 0 0 6px #666;
  border-left: 5px solid #187FE7;
  &.warn {
    border-left-color: #ffb648;
  }
  &.error {
    border-left-color: #E54D42;
  }
  &.success {
    border-left-color: #68CD86;
  }
  .all {
    width: 300px;
    position: relative;
    .close {
      width: 10px;
      height: 10px;
      right: 20px;
      top: -20px;
      position: absolute;
      cursor: pointer;
    }
    b {
      display: block;
      padding: 5px 20px;
      line-height: 25px;
      overflow: hidden;
      text-align: left;
      color: #333;
      font-size: 12px;
      padding-bottom: 15px;
    }
    h2 {
      display: block;
      overflow: hidden;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 0;
      b {
        display: inline;
        color: #333;
        padding-left: 15px;
        font-size: 16px;
      }
      i.icon-success {
        color: #68CD86;
      }
      i.icon-error {
        color: #E54D42;
      }
      i.icon-tubiaozhizuomoban {
        color: #ffb648;
      }
    }
  }
}

</style>
