<template>
  <div>
    <div id="app" v-cloak>
      <header-view></header-view>
      <div id="app-main">
        <main id="main">
          <keep-alive>
            <nuxt></nuxt>
          </keep-alive>
        </main>
      </div>
      <footer-view></footer-view>
      <loading></loading>
      <tool-view></tool-view>
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
  name: 'app',
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
    loading
  },
  computed: {
    hideHeader() {
      return this.$route.path.indexOf('findPassword') > -1 || this.$route.path.indexOf('login') > -1 || this.$route.path.indexOf('register') > -1
    },
    mobileLayout() {
      return this.$store.state.option.mobileLayout
    }
  },
  methods: {
    closeMobileSidebar() {
      if (this.mobileLayout) {
        this.$store.commit('option/SET_MOBILE_SIDEBAR', false)
      }
    }
  }
}

</script>
<style lang="scss" scoped>
@import '~assets/sass/mixins';
@import '~assets/sass/variables';
#app {

  &[v-cloak] {
    color: transparent;
    -webkit-text-fill-color: transparent;
  }
}

</style>
