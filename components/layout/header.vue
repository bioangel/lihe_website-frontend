<template>
  <div class="topBar">
    <div class="topBarMain">
      <div class="topBarMainLt">
        <div class="logo">
          <a href="index.html"><img src="~/assets/images/logo.jpg" alt=""></a>
        </div>
        <div class="selectCity">
          <div class="lineCity">
            <strong>英国 <i></i></strong>
            <span class="icon3"></span>
            <span class="icon4"></span>
          </div>
          <div class="selectBox">
            <ul>
              <li>
                <strong>北美洲</strong>
                <p>
                  <a href="#">美国</a>
                  <a href="#">加拿大</a>
                </p>
              </li>
              <li>
                <strong>大洋洲</strong>
                <p>
                  <a href="#">澳大利亚</a>
                  <a href="#">新西兰</a>
                </p>
              </li>
              <li>
                <strong>欧洲</strong>
                <p>
                  <a href="#">英国</a>
                </p>
              </li>
              <li>
                <strong>亚洲</strong>
                <p>
                  <a href="#">泰国</a>
                  <a href="#">泰日本国</a>
                  <a href="#">马来西亚</a>
                  <a href="#">越南</a>
                  <a href="#">菲律宾</a>
                  <a href="#">新加坡</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="topBarMainRt topBarLink">
        <h2 class="fr">咨询电话：400 1818 840</h2>
        <a href="#">
          < 返回上页</a>
            <a href="#">购买房产</a>
            <a href="#">区块分析</a>
            <a href="#">购房指南</a>
            <a href="#">会员中心</a>
      </div>
    </div>
    <div class="RightLinks">
      <div class="tit"></div>
      <div class="links">
        <a href="#">登录</a>
        <a href="#">注册</a>
        <a href="#">下载APP</a>
        <a href="#">官方平台</a>
      </div>
    </div>
  </div>
</template>
<script>
const apiConfig = require('~/api.config')
export default {
  name: 'layout-header',
  data() {
    return {
      preload: false,
      classfiyShow: false
    }
  },
  computed: {
    nickName() {
      return this.$store.state.user.nickName
    },
    hideHeader() {
      return this.$route.path.indexOf('findPassword') > -1 || this.$route.path.indexOf('login') > -1 || this.$route.path.indexOf('register') > -1
    },
    isLogin() {
      return this.$route.path.indexOf('login') > -1
    },
    isRegister() {
      return this.$route.path.indexOf('register') > -1
    }
  },
  methods: {},
  mounted() {}
}

</script>
<style lang="scss" scoped>
@import '~assets/sass/mixins';
@import '~assets/sass/variables';

</style>
