import Home from './views/Home'
import Detail from './views/Detail'

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
]

export default routes