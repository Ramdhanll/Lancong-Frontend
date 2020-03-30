import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
