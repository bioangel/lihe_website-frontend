<template>
  <div class="contaner">
    <div class="AdSearch">
      <div class="AdSearchBox">
        <h3>高级搜索</h3>
        <div class="searchTxt">
          <input type="text" placeholder="伦敦" />
          <a href="#" class="searchBtn">搜索</a>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="main">
        <div class="listLinks">
          <dl>
            <dt>类型：</dt>
            <dd>
              <a href="#" class="active">不限</a>
              <a href="#">新房</a>
              <a href="#">二手房</a>
              <a href="#">学生公寓</a>
            </dd>
          </dl>
          <dl>
            <dt>区域：</dt>
            <dd>
              <a href="#">不限</a>
              <a href="#">伦敦市</a>
              <a href="#">威斯敏斯特市</a>
              <a href="#">肯辛顿-切尔西</a>
              <a href="#">哈默尔史密斯-富勒姆</a>
              <a href="#">旺兹沃思</a>
              <a href="#">兰贝斯</a>
              <a href="#">伊令</a>
              <a href="#">豪恩斯洛</a>
              <a href="#">纽汉</a>
              <a href="#">哈罗</a>
              <a href="#">希灵登</a>
              <a href="#">萨瑟克</a>
              <a href="#">陶尔哈姆莱茨</a>
              <a href="#">伊斯灵顿</a>
              <a href="#">卡姆登</a>
              <a href="#">布伦特</a>
              <a href="#">里士满</a>
              <a href="#">格林威治</a>
              <a href="#">贝克斯利</a>
              <a href="#">黑弗灵</a>
              <a href="#">巴金-达格南</a>
              <a href="#">雷德布里奇</a>
              <a href="#">金斯敦</a>
              <a href="#">默顿</a>
              <a href="#">萨顿</a>
              <a href="#">克罗伊登</a>
              <a href="#">布罗姆利</a>
              <a href="#">刘易舍姆</a>
              <a href="#">沃尔瑟姆福雷斯特</a>
              <a href="#">哈林盖</a>
              <a href="#">恩菲尔德</a>
              <a href="#">巴尼特</a>
            </dd>
          </dl>
          <dl>
            <dt>交通：</dt>
            <dd>
              <a href="#">不限</a>
              <a href="#">bakerloo</a>
              <a href="#">central</a>
              <a href="#">circle</a>
              <a href="#">district</a>
              <a href="#">hammersmith&city </a>
              <a href="#">jubilee</a>
              <a href="#">metropolitan</a>
              <a href="#">emirates air line</a>
              <a href="#">northern</a>
              <a href="#">piccadilly</a>
              <a href="#">Victoria</a>
              <a href="#">waterloo&city</a>
              <a href="#">crossrail</a>
              <a href="#">london overground </a>
              <a href="#">tramlink</a>
              <a href="#">dlr</a>
            </dd>
          </dl>
          <dl>
            <dt>价格：</dt>
            <dd>
              <a href="#">不限</a>
              <a href="#">£30万以下</a>
              <a href="#">£30-40万</a>
              <a href="#">£40-50万</a>
              <a href="#">£50-60万</a>
              <a href="#">£60-70万 </a>
              <a href="#">£70-80万</a>
              <a href="#">£80-100万</a>
              <a href="#">£100-150万</a>
              <a href="#">£150万以上</a>
            </dd>
          </dl>
          <dl>
            <dt>居室：</dt>
            <dd>
              <a href="#">不限</a>
              <a href="#">studio</a>
              <a href="#">1居</a>
              <a href="#">2居</a>
              <a href="#">3居</a>
              <a href="#">4居</a>
              <a href="#">5居及以上</a>
            </dd>
          </dl>
          <dl>
            <dt>面积：</dt>
            <dd>
              <a href="#">不限</a>
              <a href="#">20㎡以下</a>
              <a href="#">20-50㎡ </a>
              <a href="#">50-60㎡</a>
              <a href="#">60-70㎡ </a>
              <a href="#">70-80㎡</a>
              <a href="#">80-90㎡</a>
              <a href="#">90-100㎡</a>
              <a href="#">100-120㎡ </a>
              <a href="#">120-150㎡ </a>
              <a href="#">150㎡以上</a>
            </dd>
          </dl>
          <dl>
            <dt>更多：</dt>
            <dd>
              <a href="#" class="active">独卫</a>
              <a href="#">河景</a>
              <a href="#">高层</a>
              <a href="#">顶楼</a>
              <a href="#">花园</a>
              <a href="#">独立阳台</a>
              <a href="#">健身房</a>
            </dd>
          </dl>
        </div>
        <div class="addOr">
          <span>您已选择：</span>
          <p>
            <strong>
                       <b>哈克尼</b>
                       <a href="#">×</a>
                   </strong>
            <strong>
                       <b>hammersmith&city</b>
                       <a href="#">×</a>
                   </strong>
            <strong>
                       <b>£40-50万</b>
                       <a href="#">×</a>
                   </strong>
            <strong>
                       <b>4居室</b>
                       <a href="#">×</a>
                   </strong>
            <strong>
                       <b>20-50㎡</b>
                       <a href="#">×</a>
                   </strong>
            <strong>
                       <b>河景</b>
                       <a href="#">×</a>
                   </strong>
            <a href="#" class="deleteOr">全部删除</a>
          </p>
        </div>
        <div class="listHouse">
          <div class="tit">
            <strong class="active">按价格排序 <i></i></strong>
            <strong>按更新顺序排序 <i></i></strong>
            <strong class="adressIcon">地图</strong>
            <strong class="rList active">列表</strong>
          </div>
          <div class="ListHouseImg Renting">
            <p>搜索结果：“泰晤士南岸”共50套房源 </p>
            <ul>
              <li>
                <img src="~/assets/images/pro/searchPro.jpg" alt="" />
                <div class="ListHouseTxt">
                  <div class="ListHouseTxtL">
                    <h3>伦敦泰晤士南岸“使馆豪邸”<br />Embassy Gardens</h3>
                    <p class="showHouse">一房到三房在售</p>
                    <p class="HouseAdress">Nine Arches Lane, Lambeth, London, SW5</p>
                    <p class="KindHouse">
                      <span class="Hicon1">卧室x3</span>
                      <span class="Hicon2">卫浴x2</span>
                      <span class="Hicon3">花园x1</span>
                    </p>
                    <b>采光好</b><b>露天泳池</b><b>近地铁站</b><b>河景房</b>
                  </div>
                  <div class="ListHouseTxtR">
                    <span class="start"></span>
                    <h3>£ 500/周</h3>
                    <a href="#">点击详情></a>
                  </div>
                </div>
              </li>
              <li>
                <img src="~/assets/images/pro/searchPro.jpg" alt="" />
                <div class="ListHouseTxt">
                  <div class="ListHouseTxtL">
                    <h3>伦敦泰晤士南岸“使馆豪邸”<br />Embassy Gardens</h3>
                    <p class="showHouse">一房到三房在售</p>
                    <p class="HouseAdress">Nine Arches Lane, Lambeth, London, SW5</p>
                    <p class="KindHouse">
                      <span class="Hicon1">卧室x3</span>
                      <span class="Hicon2">卫浴x2</span>
                      <span class="Hicon3">花园x1</span>
                    </p>
                    <b>采光好</b><b>露天泳池</b><b>近地铁站</b><b>河景房</b>
                  </div>
                  <div class="ListHouseTxtR">
                    <span class="start active"></span>
                    <h3>£ 500/周</h3>
                    <a href="#">点击详情></a>
                  </div>
                </div>
              </li>
              <li>
                <div class="TopIcon"></div>
                <img src="~/assets/images/pro/searchPro.jpg" alt="" />
                <div class="ListHouseTxt">
                  <div class="ListHouseTxtL">
                    <h3>伦敦泰晤士南岸“使馆豪邸”<br />Embassy Gardens</h3>
                    <p class="showHouse">一房到三房在售</p>
                    <p class="HouseAdress">Nine Arches Lane, Lambeth, London, SW5</p>
                    <p class="KindHouse">
                      <span class="Hicon1">卧室x3</span>
                      <span class="Hicon2">卫浴x2</span>
                      <span class="Hicon3">花园x1</span>
                    </p>
                    <b>采光好</b><b>露天泳池</b><b>近地铁站</b><b>河景房</b>
                  </div>
                  <div class="ListHouseTxtR">
                    <span class="start"></span>
                    <h3>£ 500/周</h3>
                    <a href="#">点击详情></a>
                  </div>
                </div>
              </li>
              <li>
                <img src="~/assets/images/pro/searchPro.jpg" alt="" />
                <div class="ListHouseTxt">
                  <div class="ListHouseTxtL">
                    <h3>伦敦泰晤士南岸“使馆豪邸”<br />Embassy Gardens</h3>
                    <p class="showHouse">一房到三房在售</p>
                    <p class="HouseAdress">Nine Arches Lane, Lambeth, London, SW5</p>
                    <p class="KindHouse">
                      <span class="Hicon1">卧室x3</span>
                      <span class="Hicon2">卫浴x2</span>
                      <span class="Hicon3">花园x1</span>
                    </p>
                    <b>采光好</b><b>露天泳池</b><b>近地铁站</b><b>河景房</b>
                  </div>
                  <div class="ListHouseTxtR">
                    <span class="start"></span>
                    <h3>£ 500/周</h3>
                    <a href="#">点击详情></a>
                  </div>
                </div>
              </li>
            </ul>
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
  name: 'highSearch',
  head: {
    title: '高级搜索',
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
.AdSearch {
  width: 100%;
  height: 394px;
  background: url(~/assets/images/Hseach.jpg) no-repeat;
}

.AdSearchBox {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}

.AdSearchBox h3 {
  font-size: 48px;
  line-height: 50px;
  margin-top: 80px;
  color: #fff;
  text-align: center;
}

.AdSearchBox .searchTxt {
  padding: 40px 10px;
}

.AdSearchBox .searchTxt input {
  border: none;
  background: #fff;
  height: 47px;
  line-height: 47px;
  width: 790px;
  padding-left: 10px;
  float: left;
  font-size: 16px;
}

.AdSearchBox .searchTxt .searchBtn {
  width: 144px;
  height: 47px;
  line-height: 47px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  background: #bed600;
  display: block;
  float: right;
  padding-left: 20px;
}

.AdSearchBox .searchTxt .searchBtn:before {
  width: 20px;
  height: 20px;
  background: url(~/assets/images/icon.png) -262px -4px no-repeat;
  margin-left: 30px;
  margin-top: 15px;
  content: "";
  display: block;
  position: absolute;
}



/*end 高级搜索*/


/*搜索页面*/


/*搜索列表条件*/

.listLinks {
  padding: 30px 10px 0;
  overflow: hidden;
  font-size: 16px;
  line-height: 28px;
}

.listLinks dl {
  border-bottom: solid 1px #ddd;
  padding-bottom: 3px;
  margin-bottom: 10px;
  overflow: hidden;
  width: 97%;
}

.listLinks dt {
  width: 95px;
  text-align: right;
  float: left;
}

.listLinks dd {
  width: 1045px;
  float: left;
}

.listLinks dd a {
  display: inline-block;
  padding: 0 12px;
  color: #443e3d;
}

.listLinks dd a:hover,
.listLinks dd a.active {
  color: #fff;
  background: #bed600;
}

.addOr {
  padding: 0 10px;
  overflow: hidden;
  margin-bottom: 50px;
}

.addOr span {
  display: inline-block;
  width: 120px;
  text-align: right;
  font-size: 16px;
  float: left;
}

.addOr p {
  float: left;
  width: 980px;
  overflow: hidden;
}

.addOr p a.deleteOr {
  color: #bed600;
  font-size: 17px;
  background: none;
  float: none;
  display: inline-block;
  width: 120px;
  vertical-align: middle;
  height: 25px;
}

.addOr p a.deleteOr:before {
  width: 14px;
  height: 19px;
  background: url(~/assets/images/icon.png) -267px -47px no-repeat;
  content: "";
  display: inline-block;
  margin-bottom: -4px;
  margin-right: 3px;
}

.addOr p strong {
  display: inline-block;
  border: solid 2px #bed600;
  line-height: 20px;
  font-size: 15px;
  margin-right: 15px;
  margin-bottom: 5px;
}

.addOr p strong b {
  padding: 0 10px;
  display: inline-block;
  font-weight: normal;
}

.addOr p a {
  width: 20px;
  height: 20px;
  text-align: center;
  float: right;
  color: #fff;
  background: #bed600;
  line-height: 20px;
  font-size: 20px;
}



/*搜索结果列表*/

.listHouse {
  overflow: hidden;
  margin: 10px 0;
}

.listHouse .tit {
  width: 1120px;
  padding: 0 40px;
  background: #25432a;
  height: 53px;
  line-height: 53px;
}

.listHouse .tit strong {
  display: inline-block;
  color: #fff;
  font-size: 20px;
  margin-right: 20px;
}

.listHouse .tit strong i {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 8px solid #fff;
  margin-right: 5px;
  display: inline-block;
}

.listHouse .tit strong.active {
  color: #bed600;
}

.listHouse .tit strong.active i {
  border-top: 8px solid #bed600;
}

.rList,
.adressIcon {
  float: right;
  margin-right: 20px;
}

.rList:before {
  width: 16px;
  height: 16px;
  content: "";
  background: url(~/assets/images/icon.png) -284px -70px no-repeat;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: -1px;
}

.rList.active:before {
  background: url(~/assets/images/icon.png) -265px -70px no-repeat;
}

.adressIcon:before {
  width: 17px;
  height: 21px;
  content: "";
  background: url(~/assets/images/icon.png) -283px -92px no-repeat;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: -4px;
}

.adressIcon.active:before {
  background: url(~/assets/images/icon.png) -265px -92px no-repeat;
}

.ListHouseImg {
  overflow: hidden;
  margin-bottom: 50px;
}

.ListHouseImg p {
  color: #000;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 10px;
  padding: 3px 40px;
}

.ListHouseImg p:before {
  width: 26px;
  height: 25px;
  background: url(~/assets/images/icon.png) -267px -116px no-repeat;
  content: "";
  display: inline-block;
  margin-right: 3px;
  margin-bottom: -2px;
}

.ListHouseImg ul {
  overflow: hidden;
}

.ListHouseImg li {
  border-bottom: solid 1px #eee;
  padding: 40px 45px;
  overflow: hidden;
}

.ListHouseImg li:hover,
.ListHouseImg li.active {
  background: #d3e35b;
}

.ListHouseImg li img {
  width: 320px;
  height: 237px;
  float: left;
}

.ListHouseTxt {
  float: right;
  width: 750px;
}

.ListHouseTxtL h3 {
  font-size: 30px;
  line-height: 35px;
}

.ListHouseTxtL {
  width: 450px;
  float: left;
}

.ListHouseImg .ListHouseTxtL p {
  padding: 0;
  font-size: 18px;
  margin: 0;
  line-height: 35px;
}

.ListHouseImg .ListHouseTxtL .showHouse:before {
  width: 14px;
  height: 16px;
  display: inline-block;
  content: "";
  background: url(~/assets/images/icon.png) -43px -29px no-repeat;
  vertical-align: middle;
  margin-bottom: 4px;
}

.ListHouseImg .ListHouseTxtL .HouseAdress:before {
  width: 13px;
  height: 15px;
  display: inline-block;
  content: "";
  background: url(~/assets/images/icon.png) -61px -29px no-repeat;
  vertical-align: middle;
  margin-bottom: 2px;
}

.ListHouseImg .ListHouseTxtL .KindHouse:before {
  background: none;
  display: none;
  width: 0;
}

.ListHouseImg .ListHouseTxtL .KindHouse span {
  margin-right: 13px;
}

.ListHouseImg .ListHouseTxtL .KindHouse span:before {
  display: inline-block;
  content: "";
  background: url(~/assets/images/icon.png) no-repeat;
  vertical-align: middle;
  margin-right: 2px;
}

.ListHouseImg .ListHouseTxtL .KindHouse span.Hicon1:before {
  width: 18px;
  height: 14px;
  background-position: -75px -29px;
}

.ListHouseImg .ListHouseTxtL .KindHouse span.Hicon2:before {
  width: 32px;
  height: 18px;
  background-position: -95px -28px;
  margin-bottom: 2px;
}

.ListHouseImg .ListHouseTxtL .KindHouse span.Hicon3:before {
  width: 24px;
  height: 19px;
  background-position: -145px -27px;
  margin-bottom: 5px;
}

.ListHouseImg .ListHouseTxtL b {
  display: inline-block;
  font-weight: normal;
  color: #fff;
  background: #c1d715;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  padding: 0 15px;
  border-radius: 12px;
  margin-right: 10px;
  margin-top: 5px;
}

.ListHouseImg li:hover .ListHouseTxtL b {
  color: #d3e35b;
  background: #fff;
  margin-top: 5px;
}


.ListHouseTxtR {
  float: right;
  width: 280px;
  text-align: right;
}

.ListHouseImg .ListHouseTxtR .start:before {
  width: 29px;
  height: 26px;
  background: url(~/assets/images/icon.png) -266px -206px no-repeat;
  display: inline-block;
  content: "";
  margin-top: 24px;
}

.ListHouseImg li:hover .ListHouseTxtR .start:before {
  background: url(~/assets/images/icon.png) -266px -177px no-repeat;
}

.ListHouseImg .ListHouseTxtR .start.active:before,
.ListHouseImg li:hover .ListHouseTxtR .start.active:before {
  background: url(~/assets/images/icon.png) -266px -147px no-repeat;
}

.ListHouseImg .ListHouseTxtR h3 {
  color: #d31414;
  font-size: 40px;
  line-height: 50px;
  margin-top: 20px;
}

.ListHouseImg li:hover .ListHouseTxtR h3 {
  color: #fff;
}

.ListHouseImg .ListHouseTxtR strong {
  display: block;
  font-size: 18px;
  margin-top: 5px;
}

.ListHouseImg .ListHouseTxtR a {
  color: #111213;
  margin-top: 25px;
  font-size: 18px;
  display: block;
}

.ListHouseImg.Renting .ListHouseTxtR a {
  margin-top: 55px;
}

.ListHouseImg.Renting li {
  position: relative;
}

.ListHouseImg.Renting li .TopIcon {
  position: absolute;
  left: 42px;
  top: 37px;
  width: 92px;
  height: 92px;
  background: url(~/assets/images/over.png) no-repeat;
}

</style>
