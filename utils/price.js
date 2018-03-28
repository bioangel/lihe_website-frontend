export const computedPrice = (value, newPrice, discount) => {
  let price = 0;
  if (newPrice > 0) {
    price = newPrice;
  } else {
    price = value;
  }
  if (discount > 0) {
    price = price * (discount / 10);
  }
  return price;
}
export const formatMoney = price => {
  if (/[^0-9\.]/.test(price)) return "invalid value";
  let s = price.replace(/^(\d*)$/, "$1.");
  s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
  s = s.replace(".", ",");
  var re = /(\d)(\d{3},)/;
  while (re.test(s))
    s = s.replace(re, "$1,$2");
  s = s.replace(/,(\d\d)$/, ".$1");
  return "￥" + s.replace(/^\./, "0.")
}
