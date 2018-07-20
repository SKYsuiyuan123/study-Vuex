import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  strict: true,
  // 严格模式
  state: {
    // 存储数据
    products: [{
      name: '马云',
      price: '200'
    }, {
      name: '马化腾',
      price: '140'
    }, {
      name: '马冬梅',
      price: '40'
    }, {
      name: '马蓉',
      price: '20'
    }]
  },
  getters: {
    // 获取数据
    saleProducts: (state) => {
      let saleProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations: {
    // 更改数据
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions: {
    // 能够异步的操作 ，并且传递参数
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 2000)
    }
  }
})
