<template>
  <div class="contaner">
    <div class="searchCity">
      <div class="searchBox">
        <h3>购买房产</h3>
        <p>Priplus真实在售房源500套</p>
        <div class="searchVal">
          <div class="selectNew">
            <strong @click="selectHouseClick">{{houseType}}<i></i></strong>
            <div class="checkNew" v-if="selectHouse">
              <a href="javascript:void(0);" @click="houseTypeClick('新房')">新房</a>
              <a href="javascript:void(0);" @click="houseTypeClick('二手房')">二手房</a>
            </div>
          </div>
          <div class="searchName">
            <input type="text" placeholder="请输入区域/城市/邮编" />
            <div class="clickCityLink">
              <a href="#">伦敦</a>
              <a href="#">曼彻斯特</a>
              <a href="#">伯明翰</a>
              <a href="#">纽斯卡尔</a>
              <a href="#">利物浦</a>
              <a href="#">黑斯廷斯</a>
            </div>
          </div>
          <div class="btnSearch">
            <a href="#" class="BtnS">搜索</a>
            <a href="/highSearch" class="moreSearchBtn">高级搜索></a>
          </div>
        </div>
        <div class="moreHouse">
          <a href="#">查看全部新房> </a>
          <a href="#">查看全部二手房> </a>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="main">
        <div class="mainIndex">
          <div class="IndexTit">
            <h3>在Priplus选购地产商品</h3>
            <p>便捷高效一站式服务</p>
          </div>
          <div class="BtnLink TwoActive">
            <a href="#">
                        <i class="LinkIcon1"></i>
                        <p>
                            <strong>甄选房源</strong>
                            <span>全程代表客户<br />
                            争取利益最大化</span>
                        </p>
                    </a>
            <a href="#">
                        <i class="LinkIcon2 active"></i>
                        <p>
                            <strong>选房看房</strong>
                            <span>根据个人情况量身定制<br />高成功率</span>
                        </p>
                    </a>
            <a href="#">
                        <i class="LinkIcon3"></i>
                        <p>
                            <strong>贷款一对一</strong>
                            <span>全程跟进法律程序</span>
                        </p>
                    </a>
            <a href="#">
                        <i class="LinkIcon4"></i>
                        <p>
                            <strong>家具家装</strong>
                            <span>代装修 订家具<br />好房轻松住</span>
                        </p>
                    </a>
            <a href="#">
                        <i class="LinkIcon5"></i>
                        <p>
                            <strong>出租托管</strong>
                            <span>最短时间内寻找优质房客<br />若不出租我们帮管</span>
                        </p>
                    </a>
            <a href="#">
                        <i class="LinkIcon6"></i>
                        <p>
                            <strong>交房管家</strong>
                            <span>入住后账单税费评估<br />一体代办</span>
                        </p>
                    </a>
            <a href="#">
                        <i class="LinkIcon7"></i>
                        <p>
                            <strong>合理避税</strong>
                            <span>印花税如何缴最划算？<br />我们有办法</span>
                        </p>
                    </a>
            <a href="#">
                        <i class="LinkIcon8"></i>
                        <p>
                            <strong>出售转卖</strong>
                            <span>省时省力透明交易</span>
                        </p>
                    </a>
          </div>
        </div>
      </div>
      <div class="MSuccess">
        <div class="MsuccessBox w1200">
          <div class="IndexTit">
            <h3>最新资讯</h3>
            <p>这里有各种在英置业干货信息
              <br />
              <a href="#">查看全部资讯></a>
            </p>
          </div>
          <div class="newsList">
            <div class="newListLt">
              <div class="proFirst">
                <img src="~/assets/images/pro/1.jpg" alt="" />
                <p>
                  <strong>德特福德——精彩的故事在此发奥术大师大所多阿斯达所多生</strong>
                  <a href="#">阅读全文></a>
                </p>
              </div>
              <div class="proLine">
                <div class="proLineBox mar_r20">
                  <img src="~/assets/images/pro/2.jpg" alt="" />
                  <p>
                    <strong>德特福德——精彩的故事在此发生</strong>
                    <a href="#">阅读全文></a>
                  </p>
                </div>
                <div class="proLineBox">
                  <img src="~/assets/images/pro/3.jpg" alt="" />
                  <p>
                    <strong>德特福德——精彩的故事在此发生</strong>
                    <a href="#">阅读全文></a>
                  </p>
                </div>
              </div>
            </div>
            <div class="newListRt">
              <div class="newListRtBox mar_b20">
                <img src="~/assets/images/pro/4.jpg" alt="" />
                <p>
                  <strong>德特福德——精彩的故事在此发生</strong>
                  <a href="#">阅读全文></a>
                </p>
              </div>
              <div class="newListRtBox">
                <img src="~/assets/images/pro/5.jpg" alt="" />
                <p>
                  <strong>德特福德——精彩的故事在此发生</strong>
                  <a href="#">阅读全文></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="MSuccess buyHouseBg">
        <div class="MsuccessBox">
          <div class="IndexTit">
            <h3>Priplus的成就</h3>
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
    </div>
  </div>
</template>
<script>
import apiConfig from '~/api.config'
import Service from '~/plugins/axios'

export default {
  name: 'buyHouse',
  head: {
    title: '购买房产',
  },
  data() {
    return {
      apiConfig: apiConfig,
      currentUrl: this.$route.path == '/' ? '' : this.$route.path,
      houseType: '新房',
      selectHouse: false
    }
  },
  methods: {
    houseTypeClick(item) {
      this.houseType = item;
      this.selectHouse = false;
    },
    selectHouseClick() {
      this.selectHouse = !this.selectHouse;
    }
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
