// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import second from './components/second.vue'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false
const First = {template: '<div><h3>第一个子页面</h3></div>'}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: second
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
}).$mount('#app')
