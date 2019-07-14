import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../pages/HelloWorld'
import page1 from '../pages/Page1'
import checklist from '../pages/CheckList'

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: home },
    { path: '/page1', component: page1 },
    { path: '/checklist', component: checklist }
  ]
})