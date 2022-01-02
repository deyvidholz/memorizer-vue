import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WordList from "../views/WordList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/words",
    name: "WordList",
    component: WordList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
