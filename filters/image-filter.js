import apiConfig from '~/api.config'

// 主要用来实现图片的压缩
export const imageUrl = (url, width = 0, height = 0) => {
  const imgExt = url.substring(url.indexOf('.') + 1);
  const ext = ['png', 'jpeg', 'jpg', 'gif'];
  if (width || height) {
    //if (url && _.indexOf(ext, imgExt) > -1) {
    return apiConfig.imageFormatUrl + '?url=' + url + '&&width=' + width + '&&height=' + height
    //}
  }
  return url
}
