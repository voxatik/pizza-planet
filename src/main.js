import Vue from 'vue'
import ViewRouter from 'vue-router'
import App from './App.vue'

Vue.use(ViewRouter)


import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  created() {
    window.onload = () => this.$store.commit('setLoading', false)
    this.$store.dispatch('auth/initAuthStateChanged')
    this.$store.dispatch('menu/getMenu')
  }
}).$mount('#app')
