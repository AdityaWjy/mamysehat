import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgramDetail from '../views/ProgramDetail.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/program',
    name: 'program',
    component: () => import('../views/ProgramView.vue')
  },

  {
    path: '/program/:id',
    name: 'program-detail',
    component: ProgramDetail,
  },

  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },

  {
    path: '/404',
    name: '404',
    component: () => import('../views/404Page.vue')
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
