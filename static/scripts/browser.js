
function IETester(userAgent) {
  var UA = userAgent || navigator.userAgent;
  if (/msie/i.test(UA)) {
    return UA.match(/msie (\d+\.\d+)/i)[1];
  } else if (~UA.toLowerCase().indexOf('trident') && ~UA.indexOf('rv')) {
    return UA.match(/rv:(\d+\.\d+)/)[1];
  }
  return false;
}
if (IETester() == 9.0) {
  location.href = "/partials/compatibility.html"
} else if (IETester() == 8.0 || IETester() == 7.0 || IETester() == 6.0 || IETester() == 5.0) {
  location.href = "/partials/compatibility.html"
}
IETester('Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko'); //传userAgent字符串，用来判断其他IE浏览器的版本,该示例返回11.0
