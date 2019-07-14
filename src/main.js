import Vue from 'vue'
import './plugins/vuetify'
import Vuex from 'vuex'
import router from './plugins/router'
import App from './App.vue'


Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
