/*
 ** 只在生成模式的客户端中使用
 */
// let ua = navigator.userAgent.toLowerCase();

// function isWeixinBrowser() {
//   return (/micromessenger/.test(ua)) ? true : false;
// }
// //android终端
// let isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;·　　 //ios终端
// let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
// // if (isWeixinBrowser()) {
// //   this.$router.push({
// //     path: '/product'
// //   })
// // }
// if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//   window.location = 'http://m.yueqizhixiang.com';
// } else if (/(Android)/i.test(navigator.userAgent)) {
//   //android
//   window.location = 'http://m.yueqizhixiang.com'
// }
if (process.env.NODE_ENV === 'production') {
  /*
   ** 百度seo-自动push脚本
   */
  const baiduPush = () => {
    (function() {
      var bp = document.createElement('script');
      var curProtocol = window.location.protocol.split(':')[0];
      if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
      } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
      }
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(bp, s);
    })();
  }
  //baiduPush()
  /*
   ** 应用挂载后
   */
  window.onNuxtReady((app) => {
    app.$nuxt.$on('routeChanged', (to, from) => {
      baiduPush();
    })
  })
}
