import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/sessions",
    name: "Sessions",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sessions.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Checkout.vue"),
  },
  {
    path: "/purchase",
    name: "Purchase",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Purchase.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
