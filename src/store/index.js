import Vue from 'vue'
import Vuex from 'vuex'
//引入真数据的相关js
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
//写个假数据

// const state = {
//   totalTime: 0,
//   list: [{
//     name : 'Sissi',
//     avatar : 'https://avatars3.githubusercontent.com/u/24472914?v=3&s=460',
//     date : '2017-08-07',
//     totalTime : '6',
//     comment : '要写代码6小时'
//   },{
//     name : 'ss',
//     avatar : 'https://avatars3.githubusercontent.com/u/24472914?v=3&s=460',
//     date : '2016-08-09',
//     totalTime : '10',
//     comment : '要写代码10小时'
//   }]
// };
// export default new Vuex.Store({
//     state,
// });
//镇数据
const state = {
  totalTime: 0,
  list: []
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})