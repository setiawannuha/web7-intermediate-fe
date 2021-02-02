import axios from 'axios'
const moduleUsers = {
  namespaced: true,
  state: () => {
    return {
      listUsers: [],
      detailUser: {}
    }
  },
  mutations: {
    mutationSetListUsers (state, payload) {
      state.listUsers = payload
    },
    mutationSetDetailUser (state, payload) {
      state.detailUser = payload
    }
  },
  actions: {
    actionGetUsersFromAPI ({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        commit('mutationSetListUsers', response.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    actionGetDetailUser (context, id) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
        context.commit('mutationSetDetailUser', response.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  getters: {
    getListUsers (state) {
      return state.listUsers
    },
    getDetailUser (state) {
      return state.detailUser
    }
  }
}

export default moduleUsers
