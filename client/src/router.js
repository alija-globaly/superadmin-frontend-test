import Vue from "vue";
import Router from "vue-router";
import Auth from "@/common/auth";
import Modules from "./modules";

Vue.use(Router);

const router = new Router({
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  base: process.env.BASE_URL,
  linkActiveClass: "opacity-100"
});

Modules.forEach(module => {
  router.addRoutes(module.getRoutes());
});

router.addRoutes([
  {
    path: "/access-denied",
    component: () => import("@/components/403.vue"),
    meta: { requiresAuth: true, layout: "Admin" }
  }
]);
router.addRoutes([
  {
    path: "*",
    component: () => import("@/layout/404.vue")
    // meta: { requiresAuth: true, layout: "Admin" },
  }
]);
router.beforeEach((to, from, next) => {
  const authenticated = Auth.check();
  const shouldbeAuthenticated = to.matched.some(
    record => record.meta.requiresAuth
  );
  if (shouldbeAuthenticated) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    window.scrollTo(0, 0);
    if (!authenticated) {
      next({
        path: "/",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
