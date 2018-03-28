/*
 *
 * 评论数据状态
 *
 */
import Service from '~/plugins/axios'

export const state = () => {
  return {

  }
}
export const actions = {
  // 获取评论详情
  getCommentDetail({ commit }, id) {
    return Service.get('/comment/commentDetail/' + id)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 修改评论
  editComment({ commit }, payload) {
    return Service.post('/comment/edit', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  }
}
export const mutations = {

}
