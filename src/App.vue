<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goBlog = () => {
  router.push("/blog");
};
</script>

<template>
  <div class="wrap">
    <TheHeader />
    <nav>
      <router-link to="/">Home</router-link>
      | <router-link to="/about">About</router-link> |
      <span @click="goBlog">Blog</span>
    </nav>
    <main class="main"><router-view /></main>
    <TheFooter />
  </div>
</template>

<style>
@import "assets/css/destyle.css";
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  widows: 370px;
  margin: 0 auto;
  font-family: sans-serif;
}

.main {
  flex: 1;
  width: 100%;
}
</style>
