<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = ref(route.params.id);
console.log("watch外:", id);

watch(route, () => {
  id.value = route.params.id;
  console.log("watch内:", id.value);
});

const posts = ref([]);
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts.value = await response.json();
};
fetchData();
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.id }}:
      <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  margin-top: 12px;
}

li {
  margin-bottom: 8px;
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

li:hover {
  background-color: #eee;
}
</style>
