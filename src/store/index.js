import Vue from 'vue'
import Vuex from 'vuex'
import moduleUsers from './modules/users'
import moduleAuth from './modules/auth'
import moduleBooks from './modules/books'
Vue.use(Vuex)
const store = new Vuex.Store({
  state () {
    return {
      angka: 0,
      nama: 'Iwan'
    }
  },
  getters: {
    getNama (state) {
      return '1. ' + state.nama
    }
  },
  mutations: {
    mutationTambah (state) {
      state.angka += 1
    },
    mutationKurang (state) {
      state.angka -= 1
    },
    mutationSetNama (state, payload) {
      state.nama = state.nama + ' ' + payload
    }
  },
  actions: {
    actionTambah (context) {
      context.commit('mutationTambah')
    },
    actionKurang ({ commit }) {
      commit('mutationKurang')
    },
    actionSetNama ({ commit }, data) {
      commit('mutationSetNama', 'Setiawan ' + data)
    }
  },
  modules: {
    moduleUsers: moduleUsers,
    auth: moduleAuth,
    books: moduleBooks
  }
})
export default store
