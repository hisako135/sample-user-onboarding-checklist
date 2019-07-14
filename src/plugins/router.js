import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../pages/HelloWorld'
import about from '../pages/About'

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: home },
    { path: '/about', component: about }
  ]
})