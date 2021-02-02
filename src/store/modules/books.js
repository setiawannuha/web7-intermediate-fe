import axios from 'axios'
const moduleBooks = {
  namespaced: true,
  state: () => {
    return {
      list: [],
      detail: {},
      isLoading: false,
      isError: false,
      errMessage: ''
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    setIsLoading (state, payload) {
      state.isLoading = payload
    },
    setIsError (state, payload) {
      state.isError = payload
    },
    setErrorMessage (state, payload) {
      state.errMessage = payload
    }
  },
  actions: {
    getList (context, data) {
      // console.log(context.rootState.auth.token)
      axios.get(`http://localhost:3000/books?name=${data}`, { headers: { token: context.rootState.auth.token } }).then((response) => {
        console.log(response.data.data)
        if (response.data.data.length <= 0) {
          context.commit('setIsError', true)
          context.commit('setErrorMessage', 'Data tidak di temukan')
        } else {
          context.commit('setIsError', false)
          context.commit('setList', response.data.data)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  getters: {
    resultList (state) {
      return state.list
    },
    isError (state) {
      return state.isError
    },
    errMessage (state) {
      return state.errMessage
    }
  }
}

export default moduleBooks
