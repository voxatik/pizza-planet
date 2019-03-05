import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire';

import auth from './modules/auth'
import menu from './modules/menu'
import users from './modules/users'
import orders from './modules/orders'

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