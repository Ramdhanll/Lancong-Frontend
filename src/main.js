import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {store} from './store/store'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes, // short for `routes: routes`
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        name: 'Login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.loggedIn) {
      next({
        name: 'Home',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

new Vue({
  created() {
    AOS.init();
  },
  
  render: h => h(App),
  router,
  store
}).$mount('#app')
