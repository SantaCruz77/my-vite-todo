import { createRouter, createWebHistory } from "vue-router";
import MainTodo from "/src/pages/MainTodo.vue";
// import About from "/src/pages/About.vue";

const routes = [
  {
    path: "/",
    name: "MainTodo",
    component: MainTodo,
  },
  {
    path: "/maintodo",
    name: "MainTodo",
    component: MainTodo,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
