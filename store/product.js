/*
 *
 * 产品状态
 *
 */
import Service from '~/plugins/axios'

export const state = () => {
  return {
    productDetail: {},
    productCustomeDetail: {},
    paramsList: [],
    commentList: {},
    isCollection: false,
    relativeProduct: [],
    peopleBuy: {},
    peopleDesign: {},
    productClass: [],
    productCategory: {},
    searchKeyList: [],
    recommandProduct: [],
    hotProduct: [],
    newProduct: [],
    reductProduct: [],
    homepageCustomeList: [],
    productCustomeList: []
  }
}
export const actions = {
  // 获取商品信息
  changeCollectionStatus({ commit }, status) {
    commit('changeCollectionStatus', status);
  },
  // 获取商品信息
  getProductDetail({ commit }, id) {
    return Service.get('/product/detail/' + id)
      .then(data => {
        commit('GET_Product_Detail', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取商品私人定制信息
  getDetailCustome({ commit }, id) {
    return Service.get('/product/detailCustome/' + id)
      .then(data => {
        commit('GET_Product_Custome_Detail', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取商品列表
  getProductCategory({ commit }, payload) {
    let url = '/product/list?pageSize=' + payload.pageSize + '&&currentPage=' + payload.currentPage + '&&order=' + payload.order;
    if (payload.asc) {
      url += '&&asc=' + payload.asc;
    }
    if (payload.classId) {
      url += '&&classId=' + payload.classId;
    }
    if (payload.keyword) {
      url += '&&keyword=' + encodeURI(payload.keyword);
    }
    if (payload.pricemin) {
      url += '&&pricemin=' + payload.pricemin;
    }
    if (payload.pricemax) {
      url += '&&pricemax=' + payload.pricemax;
    }
    return Service.get(url)
      .then(data => {
        commit('GET_Product_Category', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取首页热销
  getHotProduct({ commit }, payload) {
    let url = '/product/list?pageSize=' + payload.pageSize + '&&currentPage=' + payload.currentPage + '&&order=' + payload.order;
    if (payload.asc) {
      url += '&&asc=' + payload.asc;
    }
    if (payload.classId) {
      url += '&&classId=' + payload.classId;
    }
    if (payload.keyword) {
      url += '&&keyword=' + encodeURI(payload.keyword);
    }
    if (payload.pricemin) {
      url += '&&pricemin=' + payload.pricemin;
    }
    if (payload.pricemax) {
      url += '&&pricemax=' + payload.pricemax;
    }
    return Service.get(url)
      .then(data => {
        commit('GET_Product_Hot', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取首页私人定制
  getHomepageCustomeList({ commit }) {
    let url = '/product/customeList?pageSize=4&&currentPage=1';
    return Service.get(url)
      .then(data => {
        commit('Get_Homepage_CustomeList', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取私人定制
  getCustomeList({ commit }) {
    let url = '/product/customeList?pageSize=20&&currentPage=0';
    return Service.get(url)
      .then(data => {
        commit('Get_Product_CustomeList', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取首页最新产品
  getNewProduct({ commit }, payload) {
    let url = '/product/list?pageSize=' + payload.pageSize + '&&currentPage=' + payload.currentPage + '&&order=' + payload.order;
    if (payload.asc) {
      url += '&&asc=' + payload.asc;
    }
    if (payload.classId) {
      url += '&&classId=' + payload.classId;
    }
    if (payload.keyword) {
      url += '&&keyword=' + encodeURI(payload.keyword);
    }
    if (payload.pricemin) {
      url += '&&pricemin=' + payload.pricemin;
    }
    if (payload.pricemax) {
      url += '&&pricemax=' + payload.pricemax;
    }
    return Service.get(url)
      .then(data => {
        commit('GET_Product_New', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取首页降价产品
  getReductProduct({ commit }, payload) {
    let url = '/product/list?pageSize=' + payload.pageSize + '&&currentPage=' + payload.currentPage + '&&order=' + payload.order;
    if (payload.asc) {
      url += '&&asc=' + payload.asc;
    }
    if (payload.classId) {
      url += '&&classId=' + payload.classId;
    }
    if (payload.keyword) {
      url += '&&keyword=' + encodeURI(payload.keyword);
    }
    if (payload.pricemin) {
      url += '&&pricemin=' + payload.pricemin;
    }
    if (payload.pricemax) {
      url += '&&pricemax=' + payload.pricemax;
    }
    url += '&&newprice=10';
    return Service.get(url)
      .then(data => {
        commit('GET_Product_Reduct', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取商品分类
  getProductClass({ commit }) {
    return Service.get('/product/class')
      .then(data => {
        commit('GET_Product_Class', data);
      }, err => {
        console.log(err);
      })
  },
  getRecommandProduct({ commit }) {
    return Service.get('/product/getRecommandProduct')
      .then(data => {
        commit('GET_Product_Recommand', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取搜索词
  getSearchkey({ commit }) {
    return Service.get('/product/getSearchkey')
      .then(data => {
        commit('GET_Search_Key', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取大家都在买
  getPeopleBuy({ commit }) {
    return Service.get('/product/peopleBuy/no')
      .then(data => {
        commit('GET_People_Buy', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取大家都在定制
  getPeopleDesign({ commit }) {
    return Service.get('/product/peopleBuy/yes')
      .then(data => {
        commit('GET_People_Design', data);
      }, err => {
        console.log(err);
      })
  },
  // 获取商品简介信息
  getDetailBriefly({ commit }, id) {
    return Service.get('/product/detailBriefly/' + id)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  queryLogistic({ commit }, payload) {
    return Service.get('/order/queryLogistic/' + payload.shipCode + '/' + payload.shipNumber)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 生成微信支付二维码
  generateWxQr({ commit }, orderNumber) {
    return Service.get('/order/generateWxQr/' + orderNumber)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  querywxorder({ commit }, orderNumber) {
    return Service.get('/order/querywxorder/' + orderNumber)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  confirmProductOrder({ commit }, payload) {
    return Service.get('/product/confirmProductOrder/' + payload.id + '/' + payload.quantity + '/' + payload.sid + '/' + payload.isDesign)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 获取商品评论
  getProductComment({ commit }, payload) {
    return Service.get('/product/productComment?productId=' + payload.productId + '&&currentPage=' + payload.currentPage + '&&pageSize=' + payload.pageSize)
      .then(data => {
        commit('GET_Product_Comment', data);
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 获取商品用户收藏
  getProductCollection({ commit }, payload) {
    return Service.get('/product/productCollection?currentPage=' + payload.currentPage + '&&pageSize=' + payload.pageSize)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 删除商品用户收藏
  deleteUserProductCollection({ commit }, id) {
    return Service.post('/product/deleteProductCollection', { 'productId': id })
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  addSearchKeyword({ commit }, keyword) {
    return Service.post('/product/addSearchKeyword', { 'keyword': keyword })
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  setOrderPay({ commit }, payload) {
    return Service.post('/order/setOrderPay', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 获取商品规格信息
  getProductParamsDetail({ commit }, id) {
    return Service.get('/product/paramsDetail/' + id)
      .then(data => {
        commit('GET_Product_Params', data);
      }, err => {
        console.log(err);
      })
  },
  // 添加商品收藏
  addProductCollection({ commit }, payload) {
    return Service.post('/product/addProductCollection', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 取消商品收藏
  deleteProductCollection({ commit }, payload) {
    return Service.post('/product/deleteProductCollection', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 确认商品订单提交价格
  payconfirmProductOrder({ commit }, payload) {
    return Service.post('/order/payconfirmProductOrder', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 提交订单
  createOrder({ commit }, payload) {
    return Service.post('/order/create', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
  // 提交购物车订单
  createCartOrder({ commit }, payload) {
    return Service.post('/cart/cartOrder', payload)
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  },
}
export const mutations = {
  GET_Product_Detail(state, data) {
    if (data && data.rows) {
      state.productDetail = data.rows
      state.relativeProduct = data.relativeProduct
      state.isCollection = data.isCollection
    }
  },
  GET_Product_Custome_Detail(state, data) {
    state.productCustomeDetail = data;
  },
  GET_Product_Params(state, data) {
    if (data) {
      state.paramsList = data
    }
  },
  GET_Product_Comment(state, data) {
    if (data) {
      state.commentList = data
    }
  },
  GET_People_Buy(state, data) {
    if (data) {
      state.peopleBuy = data
    }
  },
  GET_People_Design(state, data) {
    if (data) {
      state.peopleDesign = data
    }
  },
  GET_Product_Class(state, data) {
    if (data) {
      state.productClass = data
    }
  },
  GET_Product_Category(state, data) {
    if (data) {
      state.productCategory = data;
    }
  },
  GET_Search_Key(state, data) {
    if (data) {
      state.searchKeyList = data;
    }
  },
  GET_Product_Recommand(state, data) {
    if (data) {
      state.recommandProduct = data.rows;
    }
  },
  GET_Product_Hot(state, data) {
    if (data) {
      state.hotProduct = data.rows;
    }
  },
  GET_Product_New(state, data) {
    if (data) {
      state.newProduct = data.rows;
    }
  },
  GET_Product_Reduct(state, data) {
    if (data) {
      state.reductProduct = data.rows;
    }
  },
  Get_Homepage_CustomeList(state, data) {
    state.homepageCustomeList = data.rows;
  },
  Get_Product_CustomeList(state, data) {
    state.productCustomeList = data.rows;
  },
  changeCollectionStatus(state, data) {
    state.isCollection = data
  }
}
