<template>
  <div class="contaner">
    <homepage-carousel></homepage-carousel>
    <div class="content">
      <div class="main">
        <div class="mainIndex">
          <div class="IndexTit">
            <h3>我们提供的特色服务</h3>
            <p>请点击下方按钮，开启您的英国置业之旅</p>
          </div>
          <div class="BtnLink">
            <a href="/buyHouse">
                        <i class="LinkIcon1"></i>
                        <p>
                            <strong>购买房产</strong>
                            <span>入住好房一步到位</span>
                        </p>
                    </a>
            <a href="#">
                        <i class="LinkIcon2 active"></i>
                        <p>
                            <strong>出售房产</strong>
                            <span>各种手续不再纠结</span>
                        </p>
                    </a>
            <a href="#">
                        <i class="LinkIcon3"></i>
                        <p>
                            <strong>求租房产</strong>
                            <span>安心租房 不再将就</span>
                        </p>
                    </a>
            <a href="#">
                        <i class="LinkIcon4"></i>
                        <p>
                            <strong>出租房产</strong>
                            <span>轻松收益 放心管理</span>
                        </p>
                    </a>
          </div>
        </div>
      </div>
      <div class="MSuccess">
        <div class="MsuccessBox">
          <div class="IndexTit">
            <h3>品致家的成就</h3>
          </div>
          <div class="SuccessMore">
            <ul>
              <li>
                <h2>333</h2>
                <p>每天有333人在Priplus完成交易</p>
              </li>
              <li>
                <h2>66</h2>
                <p>每天有333人在Priplus完成交易</p>
              </li>
              <li>
                <h2>5695</h2>
                <p>每天有333人在Priplus完成交易</p>
              </li>
              <li>
                <h2>13849</h2>
                <p>每天有333人在Priplus完成交易</p>
              </li>
            </ul>
            <a href="#" class="btnMore">查看更多案例</a>
          </div>
        </div>
      </div>
      <div class="ShareLink">
        <div class="ShareBox">
          <h2>与品致家同步</h2>
          <p>
            <a href="#" class="icon1"></a>
            <a href="#" class="icon2"></a>
            <a href="#" class="icon3"></a>
            <a href="#" class="icon4"></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiConfig from '~/api.config'
import Service from '~/plugins/axios'
// import productCarousel from '~/components/layout/productCarousel.vue'
import homepageCarousel from '~/components/homepage/homepageCarousel.vue'
// import productClass from '~/components/homepage/class.vue'
// import hotProduct from '~/components/homepage/hotProduct.vue'
// import customeProduct from '~/components/homepage/customeProduct.vue'
// import newProduct from '~/components/homepage/newProduct.vue'
// import recommandProduct from '~/components/homepage/recommandProduct.vue'
export default {
  name: 'index',
  head: {
    title: '首页',
  },
  data() {
    return {
      apiConfig: apiConfig,
      currentUrl: this.$route.path == '/' ? '' : this.$route.path,
    }
  },
  components: {
    homepageCarousel
  },
  methods: {

  },
  computed: {

  },
  mounted() {}
}

</script>
<style lang="scss">
@import '~assets/sass/mixins';
@import '~assets/sass/variables';

</style>
