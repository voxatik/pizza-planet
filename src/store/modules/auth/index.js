import { auth, googleProvider } from '@/firebase'

const resolve = ()  => Promise.resolve()
const reject  = (e) => Promise.reject({code: e.code, message: e.message})

const state = {
  isLoggedIn: false,
  user: null
}

const actions = {
  initAuthStateChanged({ commit }) {
    const stateChanged = (user) => {
      if(! user) {
        commit('logout')
        return
      }
      
      const {uid, displayName, photoURL, email, phoneNumber, emailVerified, isAnonymous} = user
      const fields = {uid, displayName, photoURL, email, phoneNumber, emailVerified, isAnonymous}

      commit('login', fields)
    }

    auth.onAuthStateChanged(stateChanged)
  },
  async signup({ commit }, form) {
    commit('setLoading', true, {root: true})
    try {
      await auth.createUserWithEmailAndPassword(form.email, form.password)
      commit('setLoading', false, {root: true})
      return resolve()
    } catch(e) {
      commit('setLoading', false, {root: true})
      return reject(e)
    }
  },
  async logout() {
    try {
      await auth.signOut()
      return resolve()
    } catch (e) {
      return reject(e)
    }
  },
  async loginEmail({ commit }, cred) {
    try {
      commit('setLoading', true, {root: true})
      await auth.signInWithEmailAndPassword(cred.email, cred.password)
      commit('setLoading', false, {root: true})
      return resolve()
    } catch (e) {
      commit('setLoading', false, {root: true})
      return reject(e)
    }
  },
  async loginGoogle() {
    try {
      await auth.signInWithPopup(googleProvider)
      return resolve()
    } catch (e) {
      return reject(e)
    }
  }
}

const getters = {
  isAdmin(state) {
    if (! state.user) return false

    return false
  }
}

const mutations = {
  login(state, user) {
    state.isLoggedIn = true
    state.user = { ...user }
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
