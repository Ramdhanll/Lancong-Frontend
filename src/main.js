import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import AOS from 'aos';
import 'aos/dist/aos.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes, // short for `routes: routes`
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

new Vue({
  created() {
    AOS.init();
  },
  
  render: h => h(App),
  router,
}).$mount('#app')
