import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

  {
    path: '/login',
    name: '',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/main',
    name: '',
    component: () => import('../views/main/index.vue'),
    children:[
      {
        path: 'category',
        name: '',
        component: () => import('../views/category/category.vue')
      },

    ]
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
