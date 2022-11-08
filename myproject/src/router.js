
import { createRouter, createWebHashHistory } from 'vue-router'


import Home from '@/pages/Home/index.vue'
import Products from '@/pages/Products/index.vue'
import About from '@/pages/About/index.vue'
import SignIn from '@/pages/SignIn/index.vue'
import SignUp from '@/pages/SignUp/index.vue'
import CartView from '@/pages/MyCart/index.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  { path: '/products-list/:id?', component: Products, name: 'products' },
  { path: '/about', component: About, name: 'about' },
  { path: '/sign-in', component: SignIn, name: 'sign-in' },
  { path: '/sign-up', component: SignUp, name: 'sign-up' },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  }
]


const router = createRouter({
  
  history: createWebHashHistory(),
  routes,
})
export default router