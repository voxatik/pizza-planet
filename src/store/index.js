import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire';

import menu from './modules/menu'
import orders from './modules/orders'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  
  mutations: {
    ...firebaseMutations,
  },
  modules: {
    menu,
    orders,
    users
  }
})