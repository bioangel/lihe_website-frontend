/*
 ** 只在生成模式的客户端中使用
 */

if (process.env.NODE_ENV === 'production') {
  const analy = () => {
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?eb45000f66d8273fb5d32322d784bb44";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  }
  analy()
}
