import Vue from 'vue'
import ViewRouter from 'vue-router'
import App from './App.vue'

Vue.use(ViewRouter)

import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
