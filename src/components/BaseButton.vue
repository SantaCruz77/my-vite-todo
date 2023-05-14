<script setup lang="ts">
const props = defineProps({ color: String });
const emit = defineEmits(["on-click"]);
const onClick = (str) => {
  emit("on-click", str);
};
</script>

<template>
  <button class="btn" :class="props.color" @click="onClick('あああ')">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 8px;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-size: 14px;
}

.blue {
  background-color: blue;
}
.green {
  background-color: green;
}

.pink {
  background-color: deeppink;
}
</style>
