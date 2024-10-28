import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProgramDetail from "../views/ProgramDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/program",
    name: "program",
    component: () => import("../views/ProgramView.vue"),
  },
  {
    path: "/program/:id",
    name: "program-detail",
    component: ProgramDetail,
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404Page.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../views/historyView.vue"),
    meta: { requiresAuth: true },
  },
  // Admin routes
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/HomeAdmin.vue"),
  },
  {
    path: "/admin/acara",
    name: "acara",
    component: () => import("../views/admin/AcaraAdmin.vue"),
  },
  {
    path: "/admin/pendaftar",
    name: "pendaftar",
    component: () => import("../views/admin/PendaftarAdmin.vue"),
  },
  {
    path: "/admin/materi",
    name: "materi",
    component: () => import("../views/admin/MateriAdmin.vue"),
  },
  {
    path: "/admin/pemateri",
    name: "pemateri",
    component: () => import("../views/admin/PemateriAdmin.vue"),
  },
  {
    path: "/admin/fasilitas",
    name: "fasilitas",
    component: () => import("../views/admin/FasilitasAdmin.vue"),
  },
  {
    path: "/admin/user",
    name: "user",
    component: () => import("../views/admin/UserAdmin.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("user_id");

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    alert("Anda harus login terlebih dahulu.");
    next("/login"); // Redirect to login if not authenticated
  } else {
    next(); // Allow navigation if authenticated or route doesn’t require authentication
  }
});

export default router;
