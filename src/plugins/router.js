import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../pages/HelloWorld'
import checklist from '../pages/CheckList'
import page1 from '../pages/Page1'
import page2 from '../pages/Page2'
import page3 from '../pages/Page3'
import page4 from '../pages/Page4'
import page5 from '../pages/Page5'
import page6 from '../pages/Page6'

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: home },
    { path: '/checklist', component: checklist },
    { path: '/page1', component: page1 },
    { path: '/page2', component: page2 },
    { path: '/page3', component: page3 },
    { path: '/page4', component: page4 },
    { path: '/page5', component: page5 },
    { path: '/page6', component: page6 }
  ]
})