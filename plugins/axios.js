import Vue from 'vue'
import axios from 'axios'
import apiConfig from '~/api.config'
import _ from '~/plugins/lodash'
const URL_ENCODED_CONTENT_TYPE = 'application/x-www-form-urlencoded; charset=UTF-8'
// 用户未登录时的重定向
const isRequireAuthentication = response => response.status === 401

//判断请求接口是否成功
const isSuccess = response => {
  return response.status >= 200 && response.status < 300
}

const getError = response => {
  let error = new Error(response.statusText)
  error.response = response
  return error
}

const hasErrorWithStatus = (errors, statusOrFunc) => {
  if (!_.isEmpty(errors)) {
    for (let error of errors) {
      if (typeof statusOrFunc === 'function') {
        if (statusOrFunc(error.response.status)) {
          return true
        }
      } else if (error.response.status === statusOrFunc) {
        return true
      }
    }
  }

  return false
}
const checkStatus = response => {
  //判断是否需要登录401
  // if (isRequireAuthentication(response)) {
  // }
  if (isSuccess(response)) {
    return response
  }
  throw getError(response)
}

const parseBody = json => {
  if (json && json.data.status === 'success') {
    return json.data.body
  }
  return json
}
//axios.defaults.headers.common['Authorization'] = 'ddd';
axios.defaults.headers.post['Content-Type'] = URL_ENCODED_CONTENT_TYPE;
// const cookie = parseCookie(cookies)

const service = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  timeout: apiConfig.timeout,
  // `withCredentials`指示是否跨站点访问控制请求
  withCredentials: true, // default
})
//http request 请求拦截器，有token值则配置上token值

service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// service.interceptors.response.use(response => {
//   return response
// }, error => {
//   return Promise.reject(error)
// })

Vue.prototype.$http = axios

export default {
  service,
  post(url, options = {}) {
    return service.post(url, options)
      .then(checkStatus)
      .then(parseBody)
      .catch((error) => {
        console.log(error);
      });
  },
  get(url, options = {}) {
    return service.get(url, {
        params: options
      })
      .then(checkStatus)
      .then(parseBody)
      .catch((error) => {
        console.log(error);
      });
  }
}
