import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import( /* webpackChunkName: "about" */ './views/Signup.vue')
    },
    {
      path: '/login',
      name: 'login',
      props: true,
      component: () => import( /* webpackChunkName: "about" */ './views/Login.vue')
    },
  ]
})