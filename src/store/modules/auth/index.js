import { auth } from '@/firebase'

const state = {
  isLoggedIn: false,
  user: null
}


const actions = {
  initAuthStateChanged({commit}) {
    const stateChange = (user) => {
      if(!user) {
        commit('logout')
        return
      }
  
      commit('loginUser', user)
    }

    auth.onAuthStateChanged(stateChange)
  }
}

const getters = {

  isAdmin(state) {
    if (!state.user) return false

    return state.user.token.isAdmin
  }
}

const mutations = {
  login(state, user) {
    state.isLoggedIn = true
    state.user = user
  },
  logout(state) {
    state.isLoggedIn = false
    state.user = null
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

