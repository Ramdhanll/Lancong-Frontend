import Home from './views/Home'
import Detail from './views/Detail'
import Checkout from './views/Checkout'
import Success from './views/Success'

const routes = [
  { 
    path: '/',
    component: Home,
    name: 'home' 
  },
  { 
    path: '/detail',
    component: Detail,
    name: 'detail' 
  },
  { 
    path: '/checkout',
    component: Checkout,
    name: 'checkout' 
  },
  { 
    path: '/finish',
    component: Success,
    name: 'finish' 
  },
]

export default routes