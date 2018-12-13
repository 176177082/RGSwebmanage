import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token: null,
  username: '11111',
  role: false
}

const mutations = {
  savetoken (state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },
  cleantoken (state) {
    localStorage.removeItem('token')
    state.token = null
  },
  saveusername (state, username) {
    localStorage.setItem('username', username)
    state.username = username
  },
  saverole (state, role) {
    localStorage.setItem('username', role)
    state.role = role
  }
}

const store = new Vuex.Store({
  state: state,
  mutations: mutations
})

export default store
