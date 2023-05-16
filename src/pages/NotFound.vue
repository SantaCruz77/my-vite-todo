<template>
  <div class="error">
    <div class="code">
      <p>404</p>
    </div>
    <div class="msg_en">
      <p>Page</p>
      <p>Not</p>
      <p>Found</p>
    </div>
  </div>
  <div class="msg_ja">お探しのページは見つかりませんでした。</div>
</template>

<style scoped>
.error {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.code {
  font-size: 64px;
  font-weight: bold;
  color: #888;
}

.msg_en {
  margin-top: 8px;
}

.msg_ja {
  font-size: 18px;
  text-align: center;
}
</style>
