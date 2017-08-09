// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//新增
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
/*之前npm i vue-resource vue-router vuex bootstrap --save*/
import 'bootstrap/dist/css/bootstrap.css'



import Home from './components/Home'
import App from './App'
import store from './store'
import router from './router'
//此处省略  因为本次是在这个js就配置好了

Vue.use(VueRouter)
Vue.use(VueResource)


Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/

// 实例化我们的Vue
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});