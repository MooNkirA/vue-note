<template>
  <div class="container">
    <h2>我是全局注册的组件</h2>
    <div>
      <input v-model="text" />
      <p>输入结果：{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalComponent',
  data() {
    return {
      text: '',
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  border: 2px solid skyblue;
}
</style>