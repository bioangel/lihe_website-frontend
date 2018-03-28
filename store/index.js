/*
 *
 * 根数据状态 存放全局数据和异步方法
 *
 */

import Service from '~/plugins/axios'
import UaParse from '~/utils/ua-parse'
// global actions
export const actions = {
  // 全局服务初始化
  nuxtServerInit(store, { params, route, req }) {
    // 检查设备类型
    const userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
    const { isMobile, isOpera, isIE, isSafari, isEdge, isFF, isBB, isChrome, isMaxthon, isIos } = UaParse(userAgent)
    const mustJpg = (isIos || isFF || isMaxthon || isSafari || isBB || isIE || isEdge)
    store.commit('option/SET_IMG_EXT', mustJpg ? 'jpeg' : 'webp')
    store.commit('option/SET_MOBILE_LAYOUT', isMobile)
    store.commit('option/SET_USER_AGENT', userAgent)

    // const initAppData = [
    //   store.dispatch('homepage/getImageCarousel')
    // ]
    // return Promise.all(initAppData)
  },
  loadShow(store) {
    store.commit('option/REQUEST_LOADING_START')
  },
  loadHide({ commit }) {
    store.commit('option/REQUEST_LOADING_END')
  },
}
