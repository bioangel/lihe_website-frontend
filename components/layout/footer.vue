<template>
  <footer>
    <div class="footer">
      <div class="footerBox">
        <div class="footerLt">
          <dl>
            <dt>品致家 Priplus</dt>
            <dd><a href="#">关于我们</a></dd>
            <dd><a href="#">法律声明</a></dd>
            <dd><a href="">媒体报道</a></dd>
            <dd><a href="#">加入我们</a></dd>
          </dl>
          <dl>
            <dt>产品服务</dt>
            <dd><a href="#">购买房产</a></dd>
            <dd><a href="#">出售房产</a></dd>
            <dd><a href="#">求租房产</a></dd>
            <dd><a href="#">出售房产</a></dd>
            <dd><a href="#">购买指南</a></dd>
          </dl>
          <dl>
            <dt>常见问题</dt>
            <dd><a href="#">商务合作</a></dd>
            <dd><a href="#">账号安全</a></dd>
          </dl>
        </div>
        <div class="footerRt">
          <p class="borderL">
            <img src="~/assets/images/footerW.jpg" alt="" class="fr" />
            <strong>联系我们</strong>
            <b>伦敦办公室</b>
            <span>
                    <i class="fIcon1"></i>
                    电话：400-1818-840
                </span>
            <span>
                    <i class="fIcon2"></i>
                    邮箱：SERVICE@PRIPLUS.COM
                </span>
          </p>
          <p>
            <img src="~/assets/images/footerW.jpg" alt="" class="fr" />
            <b>中国办公室</b>
            <span>
                    <i class="fIcon1"></i>
                    电话：400-1818-840
                </span>
            <span>
                    <i class="fIcon2"></i>
                    邮箱：SERVICE@PRIPLUS.COM
                </span>
          </p>
        </div>
      </div>
    </div>
    <div class="footerShow">
      <p>©金莱联行（北京）房地产顾问有限公司c2018 京ICP备123456号</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'layout-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}

</script>
<style lang="scss" scoped>
@import '~assets/sass/variables';

</style>
