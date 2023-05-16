import { createRouter, createWebHistory } from "vue-router";
import MainTodo from "/src/pages/MainTodo.vue";
import NotFound from "/src/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Top",
    component: MainTodo,
  },
  {
    path: "/mainTodo",
    name: "MainTodo",
    component: MainTodo,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("/src/pages/About.vue"),
  },
  {
    path: "/:pathMatch(.*)*", // 存在しないアドレスにマッチするような指定をする
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/blog/:id",
    name: "BlogDtl",
    component: () => import("/src/pages/BlogDtl.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("/src/pages/Blog.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
