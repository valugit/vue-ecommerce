import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  products: [
    {
      title: 'Tiny Cardboard Box',
      vendor: 'Cardboard Game',
      price: 15.99,
      src: require('../assets/tinyCardboardBox.png'),
    },
    {
      title: 'Tiny Wooden Box',
      vendor: 'Awesome Wooden Products',
      price: 55.49,
      src: require('../assets/tinyWoodenBox.png'),
    },
    {
      title: 'Tiny Plastic Boxes',
      vendor: 'ThingsYouThinkYouDonTNeedAndYouActuallyDont',
      price: 9.79,
      src: require('../assets/tinyPlasticBoxes.png'),
    }
  ],
  basket: [],
  order: false
}

const getters = {
  products: state => state.products,
  getProductById: state => id => state.products[id],
  basket: state => state.basket,
  getBasketLength: state => state.basket.length,
  order: state => state.order
}

const actions = {
  addToBasket: ({ commit }, payload) => {
    commit('ADD_TO_BASKET', payload)
  },
  incrementQuantity: ({ commit }, payload) => {
    commit('INCREMENT_QUANTITY', payload)
  },
  decrementQuantity: ({ commit }, payload) => {
    commit('DECREMENT_QUANTITY', payload)
  },
  removeFromBasket: ({ commit }, payload) => {
    commit('REMOVE_FROM_BASKET', payload)
  },
  order: ({ commit }) => {
    commit('ORDER')
  },
  removeOrder: ({ commit }) => {
    commit('REMOVE_ORDER')
  }
}

const mutations = {
  ADD_TO_BASKET: (state, payload) => {
    let inBasket = state.basket.find(i => payload.id === i.id)
    if (!inBasket)
      state.basket.push(payload)
    else
      inBasket.quantity = inBasket.quantity + payload.quantity
  },
  INCREMENT_QUANTITY: (state, payload) => {
    let item = state.basket.find(i => i.id === payload)
    item.quantity++
  },
  DECREMENT_QUANTITY: (state, payload) => {
    let item = state.basket.find(i => i.id === payload)
    if (item.quantity > 1) item.quantity--
  },
  REMOVE_FROM_BASKET: (state, payload) => {
    state.basket.splice(payload, 1)
  },
  ORDER: (state) => {
    state.basket = []
    state.order = true
  },
  REMOVE_ORDER: (state) => {
    state.order = false
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store