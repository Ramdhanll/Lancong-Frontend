import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://api.lancong.test/api'

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    user : localStorage.getItem('user') || null,
    popular: [],
    details : [],
    checkout: [],
    transaction_id: localStorage.getItem('transaction_id') || null,
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
    },
    checkout(state) {
      return state.checkout;
    },
    user(state) {
      return state.user;
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
    },
    setTransaction(state, data) {
      state.transaction_id = data;
    },
    getCheckout(state, data) {
      state.checkout = data;
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
          localStorage.setItem('user', JSON.stringify(response.data));
          context.commit('getUser', response.data);
        })
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/register', data)
          .then((response) => {
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
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;

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
    },
    setTransaction(context, id){
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
      
      let token = context.state.token;
      return new Promise((resolve, reject) => {
        axios.post('/checkout_process/' + token, {
          id : id,
        })
          .then(response => {
            context.commit('setTransaction', response.data.transaction_id);
            localStorage.setItem('transaction_id', response.data.transaction_id);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getCheckout(context) {
      var transaction_id = context.state.transaction_id;
      return new Promise((resolve,reject) => {
        axios.post('/getCheckout', {
          id: transaction_id
        })
          .then((response) => {
            context.commit('getCheckout', response.data);
            resolve(response);
          })
          .catch((response) => {
            reject(response)
            console.log(response)
          })
      })
    }


  }
})



