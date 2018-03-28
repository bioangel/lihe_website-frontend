<template>
  <div>
    <div id="app">
      <header-view></header-view>
      <div class="error-container">
        <div class="error">
          <p>页面出错了!</p>
        </div>
      </div>
      <footer-view></footer-view>
      <loading></loading>
    </div>
  </div>
</template>
<script>
require("babel-polyfill");
import EventBus from '~/utils/event-bus'
import headerView from '~/components/layout/header.vue'
import footerView from '~/components/layout/footer.vue'
import { loading } from '~/components/layout'
export default {
  name: 'error',
  head() {
    return !this.mobileLayout ? {} : {
      bodyAttrs: {
        class: 'mobile'
      }
    }
  },
  mounted() {},
  components: {
    headerView,
    footerView,
    loading,
  }
}

</script>
<style lang="scss">
@import '~assets/sass/mixins';
@import '~assets/sass/variables';
.error-container {
  width: 1200px;
  margin: 0 auto;
}

.error {
  position: relative;
  width: 100%;
  overflow: hidden;
  text-align: center;
}

</style>
