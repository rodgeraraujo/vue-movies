import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import FeatureDetail from "../views/Detail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/series/:id",
    name: "Serie Detail",
    component: FeatureDetail
  },
  {
    path: "/movie/:id",
    name: "Movie Detail",
    component: FeatureDetail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
