//验证数字 num
export const isInteger = obj => {
  let reg = /^[-+]?\d+$/;
  if (!reg.test(obj)) {
    return false;
  } else {
    return true;
  }
}
