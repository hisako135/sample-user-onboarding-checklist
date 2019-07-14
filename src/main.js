import Vue from 'vue'
import './plugins/vuetify'
import router from './plugins/router'
import store from './plugins/store'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
  store
}).$mount('#app')
