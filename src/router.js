import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home.vue'
import Index from './pages/index.vue'
// import Product from './pages/product.vue'
// import Detail from './pages/detail.vue'
// import Cart from './pages/cart.vue'
// import Order from './pages/order.vue'
// import OrderList from './pages/orderList.vue'
// import OrdeConfirm from './pages/orderConfirm.vue'
// import OrderPay from './pages/orderPay.vue'
// import AliPay from './pages/alipay.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // path用路径，name用名称
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index,
          // component: () => import('./pages/index.vue')
        },
        {
          path: 'product/:id',
          name: 'product',
          // component: Product,
          // component: resolve => require(['./pages/product.vue'], resolve),
          component: () => import('./pages/product.vue'),
        },
        {
          path: 'detail/:id',
          name: 'detail',
          // component: Detail,
          // component: resolve => require(['./pages/detail.vue'], resolve),
          component: () => import('./pages/detail.vue'),
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // component: () => import('./pages/login.vue')
      // component: resolve => require(['./pages/login.vue'], resolve),
      component: () => import('./pages/login.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      // component: Cart,
      component: () => import('./pages/cart.vue'),
    },
    {
      path: '/order',
      name: 'order',
      // component: Order,
      component: () => import('./pages/order.vue'),
      children: [
        {
          path: 'list',
          name: 'order-list',
          // component: OrderList,
          component: () => import('./pages/orderList.vue'),
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          // component: OrdeConfirm,
          component: () => import('./pages/orderConfirm.vue'),
        },
        {
          path: 'pay',
          name: 'order-pay',
          // component: OrderPay,
          component: () => import('./pages/orderPay.vue'),
        },
        {
          path: 'alipay',
          name: 'alipay',
          // component: AliPay,
          component: () => import('./pages/alipay.vue'),
        }
      ]
    }
  ]
})


// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './pages/home'
// import Index from './pages/index'
// Vue.use(Router);

// export default new Router({
//   routes:[
//     {
//       path:'/',
//       name:'home',
//       component:Home,
//       redirect:'/index',
//       children:[
//         {
//           path: '/index',
//           name: 'index',
//           component: Index,
//         }, {
//           path: '/product/:id',
//           name: 'product',
//           component: () => import('./pages/product.vue')
//         }, {
//           path: '/detail/:id',
//           name: 'detail',
//           component: () => import('./pages/detail.vue')
//         }
//       ]
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: () => import('./pages/login.vue')
//     },
//     {
//       path: '/cart',
//       name: 'cart',
//       component: () => import('./pages/cart.vue')
//     },
//     {
//       path: '/order',
//       name: 'order',
//       component: () => import('./pages/order.vue'),
//       children:[
//         {
//           path: 'list',
//           name: 'order-list',
//           component: () => import('./pages/orderList.vue')
//         },
//         {
//           path: 'confirm',
//           name: 'order-confirm',
//           component: () => import('./pages/orderConfirm.vue')
//         },
//         {
//           path: 'pay',
//           name: 'order-pay',
//           component: () => import('./pages/orderPay.vue')
//         },
//         {
//           path: 'alipay',
//           name: 'alipay',
//           component: () => import('./pages/alipay.vue')
//         }
//       ]
//     }
//   ]
// });