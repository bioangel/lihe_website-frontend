/*
 *
 * 购物车
 *
 */
import Service from '~/plugins/axios'

export const state = () => {
  return {
    list: {
      grand_total: 0,
      items_count: 0,
      items_quantity: 0
    }
  }
}
export const actions = {
  // 获取购物车信息
  getCartInfo({ commit }) {
    return Service.get('/cart/info?t=' + Math.random())
      .then(data => {
        commit('GET_CART_INFO', data);
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 核实购物车信息
  checkoutCart({ commit }) {
    return Service.get('/cart/checkoutCart?t=' + Math.random())
      .then(data => {
        commit('GET_CART_INFO', data);
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 获取商品对应的服务
  getProductService({ commit }, productId) {
    return Service.get('/product/productService/' + productId)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 删除购物车列表
  deleteCartInfo({ commit }, id) {
    return Service.post('/cart/delete/' + id)
      .then(data => {
        commit('GET_CART_INFO', data);
        return data;
      }, err => {
        console.log(err);
      })
  },
  deleteService({ commit }, id) {
    return Service.post('/cart/deleteService/' + id)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  editService({ commit }, payload) {
    return Service.post('/cart/editService/' + payload.id + '/' + payload.serviceId)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  //添加购物车列表
  addCartInfo({ commit }, payload) {
    return Service.post('/cart/add', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 修改购物车列表
  updateCartInfo({ commit }, payload) {
    return Service.post('/cart/edit/' + payload.id + '/' + payload.quantity)
      .then(data => {
        commit('GET_CART_INFO', data);
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 修改购物车状态
  selectItemCartInfo({ commit }, id) {
    return Service.post('/cart/selectItem/' + id)
      .then(data => {
        commit('GET_CART_INFO', data);
        return data;
      }, err => {
        console.log(err);
      })
  },
  changeAllCartStatus({ commit }, status) {
    return Service.post('/cart/changeCartStatus/' + status)
      .then(data => {
        commit('GET_CART_INFO', data);
        return data;
      }, err => {
        console.log(err);
      })
  },
  clearCart({ commit }) {
    return Service.post('/cart/clearCart')
      .then(data => {
        commit('GET_CART_INFO', data);
        return data;
      }, err => {
        console.log(err);
      })
  }
}
export const mutations = {
  GET_CART_INFO(state, action) {
    if (action) {
      state.list = action;
    } else {
      state.list = {
        grand_total: 0,
        items_count: 0,
        items_quantity: 0
      }
    }
  }
}
