<script setup></script>

<template>
  <div class="box_input">
    <input type="text" class="todo_input" placeholder="+ TODOを入力" />
    <button class="btn">追加</button>
  </div>
</template>

<style scoped>
.box_input {
  margin-top: 20px;
}

.todo_input {
  width: 300px;
  margin-right: 8px;
  padding: 8px;
  font-size: 18px;
  border: 1px solid #aaa;
  border-radius: 6px;
}

.btn {
  padding: 8px;
  background-color: blue;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-size: 14px;
}
</style>
