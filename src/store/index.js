import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexLocal = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    user: {
      auth: false,
      type: null,
      id: null,
    }
  },
  mutations: {
    setUserLoggedIn(state) {
      state.user.auth = true
    },
    setUserLoggedOut(state) {
      state.user.auth = false
      
      state.user.type = null
      state.user.id = null
    },
    setUserType(state, type) {
      state.user.type = type
    },
    setUserId(state, id) {
      state.user.id = id
    }
  },
  plugins: [vuexLocal.plugin]
})

export default store
