/*
 *
 * 首页数据状态
 *
 */
import Service from '~/plugins/axios'

export const state = () => {
  return {
    imageCarousel: [],
    designImageCarousel: [],
    carouselDetail: {}
  }
}
export const actions = {
  // 获取首页轮播图
  getImageCarousel({ commit }) {
    return Service.get('/homepage/list/home')
      .then(data => {
        commit('GET_Image_Carousel', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取私人定制轮播图
  getDesignImageCarousel({ commit }) {
    return Service.get('/homepage/list/design')
      .then(data => {
        commit('GET_Design_Image_Carousel', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取首页轮播图详情
  getImageCarouselDetail({ commit }, id) {
    return Service.get('/homepage/detail/' + id)
      .then(data => {
        commit('GET_Image_Carousel_Detail', data);
      }, err => {
        console.log(err);
      })
  }
}
export const mutations = {
  GET_Image_Carousel(state, data) {
    state.imageCarousel = data;
  },
  GET_Design_Image_Carousel(state, data) {
    state.designImageCarousel = data;
  },
  GET_Image_Carousel_Detail(state, data) {
    state.carouselDetail = data;
  }
}
