import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire';

import menu from './modules/menu'
import orders from './modules/orders'
import users from './modules/users'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true
  },
  mutations: {
    ...firebaseMutations,
    setLoading(state, value) {
      state.isLoading = value
    }
  },
  modules: {
    auth,
    menu,
    orders,
    users
  }
})