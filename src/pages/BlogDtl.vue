<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const dtl = ref({});
const fetchData = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts" + id
  );
  dtl.value = await response.json();
  console.log(dtl);
};
fetchData();
</script>

<template>
  <div>
    <h1 class="title">{{ dtl.title }}</h1>
    <div class="dtl">{{ dtl.body }}</div>
  </div>
</template>

<style scoped>
.title {
  margin: 12px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.dtl {
  line-height: 1.5;
}
</style>
