<template>
  <div class="topBar">
    <div class="topBarMamin">
      <div class="topfl">
        <a href="personal" v-if="nickName">您好!{{nickName}}</a>
        <a :href="'login?from='+currentUrl" v-else>您好!请登录</a>
        <a href="javascript:void(0)" v-if="nickName" @click="logOut">退出</a>
        <router-link v-if="!nickName" :to="'/register?from='+currentUrl" class="red">免费注册</router-link>
      </div>
      <div class="topfr">
        <ul>
          <li class="wBlock"><a href="#">我的订单</a></li>
          <li class="lineSpace"></li>
          <li class="wBlock">
            <router-link to="/cart">购物车<b>{{cartInfo.items_quantity}}</b>件</router-link>
            <li class="lineSpace"></li>
            <li class="wBlock"><a href="ListGoods.html">商品分类</a></li>
            <li class="lineSpace"></li>
            <li class="wBlock"><a href="#">English</a></li>
            <li class="lineSpace"></li>
            <li class="wBlock"><a href="#">联系客服</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'background',
  data() {
    return {
      currentUrl: (this.$route.path == '/' || this.$route.path.indexOf('login') > -1 || this.$route.path.indexOf('register') > -1) ? '/personal' : this.$route.path,
    }
  },
  mounted() {
    this.$store.dispatch('user/getUserNickName')
  },
  methods: {
    logOut() {
      this.$store.dispatch('user/logOut').then(() => {
        this.$router.push({ path: '/' });
      });
    }
  },
  computed: {
    nickName() {
      return this.$store.state.user.nickName
    },
    cartInfo() {
      return this.$store.state.cart.list
    }
  }
}

</script>
<style lang="scss" scoped>
@import '~assets/sass/variables';
.topBar {
  width: 100%;
  background: #e3e4e5;
  border-bottom: solid 1px #ddd;
}

.topBar .topBarMamin {
  width: 1200px;
  height: 30px;
  line-height: 30px;
  color: #999;
  font-size: 12px;
  margin: 0 auto;
}

.topBarMamin .topfl {
  float: left;
}

.topBarMamin .topfr {
  width: auto;
  float: right;
}

.topfl a {
  padding: 0 5px;
  color: #999;
}

.topfl a.red {
  color: #c61010;
}

.topfl a:hover {
  color: #f00;
}

.topfr ul {
  width: auto;
}

.topfr ul li {
  float: left;
}

.topfr ul li.wBlock {
  width: auto;
  padding: 0 8px;
}

.topfr ul li.lineSpace {
  width: 1px;
  height: 10px;
  margin: 11px 0 0;
  background: #ccc8c8;
}

.topfr ul li.wBlock a {
  color: #999;
  b {
    padding: 0 5px;
    color: #d41c4f;
  }
}

.topfr ul li.wBlock a:hover {
  color: #c61010;
}

</style>
