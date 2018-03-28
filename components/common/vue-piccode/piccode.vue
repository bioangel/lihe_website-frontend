<template>
  <img class="pic-code" :src="url" @click="changeCode" alt="">
</template>
<script>
import apiConfig from '~/api.config'

export default {
  name: 'vue-piccode',
  data() {
    return {
      apiConfig: apiConfig,
      imageStyle: {
        height: this.height,
        width: this.width,
      }
    }
  },
  methods: {
    changeCode() {
      this.$emit('changeUrl');
      //this.url = apiConfig.baseUrl + '/code/getPicCode?t=' + Math.random()
    }
  },
  props: {
    height: {
      type: String,
      default: '100px'
    },
    width: {
      type: String,
      default: '30px'
    },
    url: {
      type: String,
      default: apiConfig.baseUrl + '/code/getPicCode?t=' + Math.random()
    }
  }
}

</script>
<style lang="scss" scoped>
@import '~assets/sass/mixins';
@import '~assets/sass/variables';
.pic-code {
  vertical-align: top;
  cursor: pointer;
}

</style>
