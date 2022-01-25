import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProductManagement from '@/Pages/ProductManagement'
import AddProduct from '@/Pages/AddProduct'
import OrderManagement from '@/Pages/OrderManagement'
import UpdateProduct from '@/Pages/UpdateProduct'
import Feedback from '@/Pages/Feedback'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductManagement',
      component: ProductManagement
    },
    {
      path: '/AddProduct',
      name: 'AddProduct',
      component: AddProduct
    },
    {
      path: '/OrderManagement',
      name: 'OrderManagement',
      component: OrderManagement
    },
    {
      path: '/UpdateProduct',
      name: 'UpdateProduct',
      component: UpdateProduct
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: Feedback
    }
  ]
})
