/*
 *
 * 用户状态
 *
 */
import Service from '~/plugins/axios'

export const state = () => {
  return {
    nickName: '',
    userInfo: {
      telephone: '',
      nickName: '',
      birthday: '',
      sex: 'secret',
      email: ''
    }
  }
}
export const actions = {
  // 获取用户昵称
  getUserNickName({ commit }) {
    return Service.get('/user/getUserNickName')
      .then(data => {
        commit('GET_USER_NICK_NAME', data)
      }, err => {
        console.log(err);
      })
  },
  // 获取用户资料
  getUserInfo({ commit }) {
    return Service.get('/user/detail')
      .then(data => {
        commit('GET_USER_INFO', data)
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 获取用户可用优惠券
  getUserCoupon({ commit }, payload) {
    return Service.get('/user/userCoupon?price=' + (payload ? payload : 0))
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 领取优惠券
  claimUserCoupon({ commit }, payload) {
    return Service.post('/user/claimUserCoupon', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 创建退货
  createReturnGoods({ commit }, payload) {
    return Service.post('/returnGoods/create', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  getReturnOrder({ commit }, payload) {
    return Service.get('/order/returnOrder/' + payload.orderId + '/' + payload.productId)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  getOrderGoodDetail({ commit }, payload) {
    return Service.get('/order/orderDetail/' + payload.orderId + '/' + payload.productId)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  detailByOrderNumber({ commit }, orderNumber) {
    return Service.get('/order/detailByOrderNumber/' + orderNumber)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  payNotice({ commit }, orderNumber) {
    return Service.get('/order/payNotice')
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 取消订单
  userCancleOrder({ commit }, payload) {
    return Service.post('/order/userCancleOrder', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 确认订单收货
  userConfirmOrder({ commit }, payload) {
    return Service.post('/order/userConfirmOrder', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 订单物流
  detailOrderStatus({ commit }, id) {
    return Service.get('/order/detailOrderStatus/' + id)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 获取用户评论
  getUserComment({ commit }) {
    return Service.get('/comment/userComment')
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  userWaitCommentOrder({ commit, dispatch }, payload) {
    //dispatch('setLodingStart');
    return Service.get('/order/userWaitCommentOrder?currentPage=' + payload.currentPage + '&&pageSize=' + payload.pageSize + '&&cstatus=' + payload.cstatus)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 获取用户所有优惠券
  getUserAllCoupon({ commit }) {
    return Service.get('/user/getUserAllCoupon')
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  /**
   * 获取用户积分
   * @param  {[type]} options.commit [description]
   * @return {[type]}                [description]
   */
  getUserPoint({ commit }, payload) {
    return Service.get('/user/userPoint?currentPage=' + payload.currentPage + '&&pageSize=' + payload.pageSize)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  getUserOrder({ commit, dispatch }, payload) {
    //dispatch('setLodingStart');
    return Service.get('/order/userOrder?currentPage=' + payload.currentPage + '&&pageSize=' + payload.pageSize + '&&cstatus=' + payload.cstatus)
      .then(data => {
        //commit('REQUEST_LOADING_END')
        return data;
      }, err => {
        //commit('REQUEST_LOADING_END')
        console.log(err);
      })
  },
  userReturnGoods({ commit, dispatch }, payload) {
    return Service.get('/returnGoods/userReturnGoods?currentPage=' + payload.currentPage + '&&pageSize=' + payload.pageSize + '&&cstatus=' + payload.cstatus + '&&type=' + payload.type)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  userReturnGoodsDetail({ commit, dispatch }, id) {
    return Service.get('/returnGoods/detail/' + id)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  sellerAddress({ commit, dispatch }, productId) {
    return Service.get('/returnGoods/sellerAddress/' + productId)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  cancleReturnGoods({ commit }, payload) {
    return Service.post('/returnGoods/cancleReturnGoods', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  addComment({ commit }, payload) {
    return Service.post('/comment/create', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  logOut({ commit }) {
    return Service.post('/user/logOut')
      .then(data => {
        commit('LOG_OUT', data)
      }, err => {
        console.log(err);
      })
  },
  checkoutLogin() {
    return Service.get('/user/checkLogin')
      .then(data => {
        return data;
      }, err => {
        return false;
      })
  }
}
export const mutations = {
  GET_USER_NICK_NAME(state, action) {
    if (action) {
      state.nickName = action.nickName
    }
  },
  GET_USER_INFO(state, action) {
    if (action) {
      state.userInfo = action
    }
  },
  LOG_OUT(state, action) {
    if (action) {
      state.nickName = ''
    }
  }
}
