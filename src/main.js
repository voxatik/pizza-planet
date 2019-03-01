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
  router
}).$mount('#app')
