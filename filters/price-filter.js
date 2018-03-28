export const formatMoney = s => {
  if (/[^0-9\.]/.test(s)) return "0";
  s = s.toString().replace(/^(\d*)$/, "$1.");
  s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
  s = s.replace(".", ",");
  var re = /(\d)(\d{3},)/;
  while (re.test(s))
    s = s.replace(re, "$1,$2");
  s = s.replace(/,(\d\d)$/, ".$1");
  return "￥" + s.replace(/^\./, "0.")
}
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
  return price.toString();
}

export const orderstatus = (status) => {
  if (status === 'waitpay') {
    return '待付款';
  }
  if (status === 'waitship') {
    return '待发货';
  }
  if (status === 'waitreceive') {
    return '待收货';
  }
  if (status === 'finish') {
    return '交易完成';
  }
  if (status === 'cancle') {
    return '交易关闭';
  }
  if (status === 'close') {
    return '交易关闭';
  }
  if (status === 'returnfee') {
    return '退货';
  }
}
export const changestatus = (status) => {
  if (status === 'waitreview') {
    return '待审核';
  }
  if (status === 'nopassreview') {
    return '审核失败';
  }
  if (status === 'waitship') {
    return '商家已经同意您的换货申请，请在7天内进行发货';
  }
  if (status === 'waitreceive') {
    return '等待商家收货';
  }
  if (status === 'finish') {
    return '商家已经发货';
  }
  if (status === 'cancle') {
    return '取消';
  }
  if (status === 'waitmoney') {
    return '等待商家发货';
  }
}
export const returnstatus = (status) => {
  if (status === 'waitreview') {
    return '待审核';
  }
  if (status === 'nopassreview') {
    return '审核失败';
  }
  if (status === 'waitship') {
    return '商家已经同意您的退货申请，请在7天内进行发货';
  }
  if (status === 'waitreceive') {
    return '等待商家收货';
  }
  if (status === 'finish') {
    return '商家已经退款';
  }
  if (status === 'cancle') {
    return '取消';
  }
  if (status === 'waitmoney') {
    return '等待商家退款给买家';
  }
}
