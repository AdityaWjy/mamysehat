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

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },

  // admin router
  {
    // admin
    path: '',
    name: 'admin',
    component: () => import('../views/admin/HomeAdmin.vue')
  },

  {
    // /admin/acara
    path: '',
    name: 'acara',
    component: () => import('../views/admin/AcaraAdmin.vue')
  },

  {
    // /admin/pendaftar
    path: '',
    name: 'pendaftar',
    component: () => import('../views/admin/PendaftarAdmin.vue')
  },

  
  {
    // /admin/materi
    path: '',
    name: 'materi',
    component: () => import('../views/admin/MateriAdmin.vue')
  },

  {
    // /admin/pemateri
    path: '',
    name: 'pemateri',
    component: () => import('../views/admin/PemateriAdmin.vue')
  },

  {
    // /admin/fasilitas
    path: '',
    name: 'fasilitas',
    component: () => import('../views/admin/FasilitasAdmin.vue')
  },

  {
    path: '/admin/user',
    name: 'user',
    component: () => import('../views/admin/UserAdmin.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
