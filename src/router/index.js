import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Homepage.vue'
import Product from '../pages/Product.vue'
import Basket from '../pages/Basket.vue'
import Order from '../pages/Order.vue'
import OrderSuccess from '../pages/OrderSuccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
    props: true
  },
  {
    path: '/basket',
    name: 'basket',
    component: Basket
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/success',
    name: 'success',
    component: OrderSuccess
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router