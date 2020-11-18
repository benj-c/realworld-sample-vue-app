import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import { isAuthenticated } from "../service/Auth";

/* eslint-disable */
export const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/login/LoginView.vue"),
    meta: {
      activeNav: false,
      protected: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/LoginView.vue"),
    meta: {
      activeNav: false,
      protected: false,
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/dashboard/DashboardView.vue"),
    meta: {
      icon: "pi-chart-bar",
      activeNav: true,
      protected: true,
      title: "Dashboard"
    }
  },
  {
    path: "/page-one",
    name: "Page One",
    component: () => import("../views/page-1/Page1View.vue"),
    meta: {
      icon: "pi-map-marker",
      activeNav: true,
      protected: true,
      title: "Page One"
    }
  },
  {
    path: "/page-two",
    name: "Page Two",
    component: () => import("../views/page-2/Page2View.vue"),
    meta: {
      icon: "pi-map-marker",
      activeNav: true,
      protected: true,
      title: "Page Two"
    }
  },
  {
    path: "/users",
    name: "User",
    component: () => import("../views/user/UserView.vue"),
    meta: {
      icon: "pi-users",
      activeNav: true,
      protected: true,
      title: "User management"
    }
  },
  {
    path: "/me",
    name: "My account",
    component: () => import("../views/user/MyAccountView.vue"),
    meta: {
      icon: "pi-user",
      activeNav: true,
      protected: true,
      title: "My Account"
    }
  },
  {
    path: '*',
    name: '404',
    title: '404',
    component: () => import('../views/404.vue'),
    meta: {
      activeNav: false,
      protected: false,
    }
  },
];

const router = new VueRouter({
  routes,
  mode: 'history' //removes # from url /#/
});

router.beforeEach((to, from, next) => {
  window.document.title = `${to.name} | Sample Management System`;
  if (to.meta.protected) {
    if (isAuthenticated()) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    if (isAuthenticated()) {
      next({ name: "Dashboard" });
    } else {
      next();
    }
  }
})

export default router;
