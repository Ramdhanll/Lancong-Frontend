import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {store} from './store/store'
import VueProgressBar from 'vue-progressbar'
import Swal from 'sweetalert2'

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

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 1000
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Vue.prototype.$Toast = Toast;
Vue.prototype.$Fire = new Vue();
new Vue({
  created() {
    AOS.init();
  },
  
  render: h => h(App),
  router,
  store
}).$mount('#app')
