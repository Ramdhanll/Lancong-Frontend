import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://api.lancong.test/api'

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    user : []
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    }
  },
  mutations: {
    retriveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
      state.user = []
    },
    getUser(state, data) {
      state.user = data;
    }
  },
  actions: {
    retriveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/login',{
          username: credentials.username,
          password: credentials.password
        })
        .then((response) => {
          const token = response.data.access_token;
          localStorage.setItem('access_token', token);
          context.commit('retriveToken', token);
          context.dispatch('getUser', token);
          resolve(response);
        })
        .catch((e) => {
          reject(e);
        })
      })
    },
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
      if(context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/logout')
          .then((response) => {
            localStorage.removeItem('access_token');
            context.commit('destroyToken');
            resolve(response);
          })
          .catch((e) => {
            reject(e);
          })
        })
      }
    },
    getUser(context, token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      axios.get('/user')
        .then((response) => {
          context.commit('getUser', response.data)
        })
    }


  }
})



