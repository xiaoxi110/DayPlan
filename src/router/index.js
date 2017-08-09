import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../components/Home'
import TimeList from '../components/TimeList'
//import LogTime from '@/components/LogTime'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },{
      path: '/home',
      component: Home
    },{
      path: '/timelist',
      component: TimeList,
       children: [{
       path: 'log-time', //一定不能加/
      component: resolve => require(['../components/LogTime.vue'] , resolve),
       }]
    }
  ]
})
