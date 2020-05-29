import { createStore } from 'vuex'

const store = createStore({
  state: {
    userInfo: {
      name: 'yulu'
    }
  },
  mutations: {
    updateUserInfo(state, name) {
      state.userInfo.name = name
    }
  },
  actions: {

  },
  getters: {
    getUserInfo(state) {
      return state.userInfo.name
    }
  }
})

export default store
