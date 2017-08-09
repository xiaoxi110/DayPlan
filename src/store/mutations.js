// src/store/mutations.js
import * as types from './mutation-types'

export default {
    // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = Number(state.totalTime) + Number(time)
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值，未来我们可以做登入直接读取昵称和头像
    const avatar = 'http://upload-images.jianshu.io/upload_images/6300392-cda5ea4727dbe7ec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240';
    
    state.list.push(
      Object.assign({ name: 'sissi', avatar: avatar }, plan)
    )
  },
  // 删除某计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  }
};