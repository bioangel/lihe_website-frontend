const isProdMode = Object.is(process.env.NODE_ENV, 'production')
module.exports = {
  cdnUrl: isProdMode ? 'http://localhost:8081/api' : 'http://localhost:8081/api',
  baseUrl: isProdMode ? 'http://localhost:8081/api' : 'http://localhost:8081/api',
  socketHost: isProdMode ? 'http://localhost:8081/api' : 'http://localhost:8081/api',
  imageFormatUrl: isProdMode ? 'http://localhost:8081/api/imageSize' : 'http://localhost:8081/api/imageSize',
  imageUrl: isProdMode ? 'http://localhost:8081' : 'http://localhost:8081',
  hostName: isProdMode ? 'http://www.priplus.com' : 'http://localhost:3000',
  timeout: 30000,
}
