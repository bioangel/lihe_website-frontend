<template>
  <div class="MSwiper">
    <div class="swiper-container" v-swiper:mySwiper="swiperOption" ref="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="box box1">
            <div class="swiperTxt">
              <h2>我们不仅为您找到买家
                <br />更是您房子的终生管家
               </h2>
              <strong>
                                 品致家英国房产管家服务为您保驾护航
                             </strong>
              <a href="#">查看详情</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="box box2">
            <div class="swiperTxt">
              <h2>
                                  我们不仅为您找到买家<br />
                                  更是您房子的终生管家
                             </h2>
              <strong>
                                 品致家英国房产管家服务为您保驾护航
                             </strong>
              <a href="#">查看详情</a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="w120">
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
      </div>
    </div>
  </div>
</template>
<script>
const apiConfig = require('~/api.config')
import { imageUrl } from '~/filters/image-filter.js'

export default {
  mounted() {},
  computed: {
    url() {
      return this.$route.path;
    }
  },
  props: {
    images: {
      type: [Array, Object]
    }
  },
  data() {
    return {
      apiConfig: apiConfig,
      currentUrl: (this.$route.path == '/' || this.$route.path.indexOf('login') > -1 || this.$route.path.indexOf('register') > -1) ? '/personal' : this.$route.path,
      swiperOption: {
        loop: true,
        paginationClickable: true,
        pagination: '.swiper-pagination',
        autoplay: 3500,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
      }
    }
  },
  methods: {
    imageFormat(url, width = 0, height = 0) {
      return imageUrl(url, width, height);
    },
    prev() {
      console.log(this.$refs.mySwiper);
      //this.$refs.mySwiper.swipePrev();
    },
    next() {
      this.$refs.mySwiper.swipeNext();
    }
  }
}

</script>
<style lang="scss">
@import '~assets/sass/variables';



/*swiper*/

.MSwiper {
  height: 1000px;
  position: relative;
  overflow: hidden;
}

.MSwiper .swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background: url(~/assets/images/nightLt.png) no-repeat;
  width: 23px;
  height: 60px;
}

.MSwiper .swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background: url(~/assets/images/nightr.png) no-repeat;
  width: 23px;
  height: 60px;
}

.box {
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
  text-align: center;
}

.box1 {
  background: url(~/assets/images/InSwiper1.jpg) top center no-repeat;
  height: 1000px;
}

.box2 {
  background: url(~/assets/images/InSwiper2.jpg) top center no-repeat;
  height: 1000px;
}





/*.box img {
        height: 100%;
    }*/

.swiperTxt {
  width: 1000px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -500px;
  margin-top: -150px;
  text-align: left;
  color: #fff;
  line-height: 80px;
}

.swiperTxt h2 {
  font-size: 62px;
}

.swiperTxt strong {
  font-size: 30px;
  line-height: 40px;
  display: block;
}

.swiperTxt a {
  display: block;
  width: 175px;
  text-align: center;
  position: absolute;
  left: 50%;
  margin-left: -87px;
  bottom: 0;
  padding: 12px 0;
  border: solid 4px #fff;
  line-height: 20px;
  text-align: center;
  color: #fff;
  font-size: 24px;
}

.swiper-slide {
  text-align: center;
}

.swiper-pagination-bullet {
  background: #fff;
  opacity: .8;
  width: 12px;
  height: 12px;
}

.swiper-pagination-bullet-active {
  background: #c1d715;
}



/*end swiper*/

</style>
