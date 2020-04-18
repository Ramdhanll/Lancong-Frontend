import Home from './views/Home'
import Detail from './views/Detail'
import Checkout from './views/Checkout'
import Success from './views/Success'
import Login from './views/Login'
import Logout from './views/Logout'

const routes = [
  { 
    path: '/',
    component: Home,
    name: 'Home',
  },
  { 
    path: '/login',
    component: Login,
    name: 'Login',
    meta : {requiresVisitor: true}

  },
  { 
    path: '/logout',
    component: Logout,
    name: 'Logout',
  },
  { 
    path: '/detail',
    component: Detail,
    name: 'Detail',
    meta : {requiresAuth: true}
  },
  { 
    path: '/checkout',
    component: Checkout,
    name: 'Checkout',
    meta : {requiresAuth: true}
  },
  { 
    path: '/finish',
    component: Success,
    name: 'Finish',
    meta : {requiresAuth: true}
  },
]

export default routes