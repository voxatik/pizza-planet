import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import orders from './modules/orders'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        menu,
        orders,
        users
    }
})