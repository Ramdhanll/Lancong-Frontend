import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://api.lancong.test/api'

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    user : [],
    popular: [],
    details : []
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
    getPupolar(state) {
      return state.popular;
    },
    imageDefault(state) {
      return state.details.galleries[0].image;
    },
    details(state) {
      return state.details;
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
    },
    getPopular(state, data) {
      state.popular = data;
    },
    getDetail(state, data) {
      state.details = data;
    }
  },
  actions: {
    retriveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/login',{
          email: credentials.email,
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
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/register', data)
          .then((response) => {
            console.log(response);
            resolve(response);
          })
          .catch((e) => {
            reject(e);
          })
      })
    },
    getPopular(context) {
      axios.get('/getPopular')
        .then(response => {
          const data = response.data;
          context.commit('getPopular', data);
        })
        .catch(response => {
          console.log(response);
        })
    },
    getDetail(context, slug) {
      return new Promise((resolve, reject) => {
        axios.get('/getDetail/' + slug.slug)
        .then(response => {
          const data = response.data;
          context.commit('getDetail', data);
          resolve('success');
        })
        .catch(() => {
          reject('failed');
        })
      })
    }

  }
})



