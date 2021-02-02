import axios from 'axios'
const moduleAuth = {
  namespaced: true,
  state: () => {
    return {
      token: localStorage.getItem('token') || null
    }
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
    }
  },
  actions: {
    login (context, data) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/login', data).then((response) => {
          console.log(response.data.token)
          localStorage.setItem('token', response.data.token)
          context.commit('setToken', response.data.token)
          resolve(response.data.msg)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    logout (context) {
      return new Promise((resolve) => {
        localStorage.removeItem('token')
        context.commit('setToken', null)
        resolve(true)
      })
    }
  },
  getters: {
    getToken (state) {
      return state.token
    }
  }
}

export default moduleAuth
