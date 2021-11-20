<template>
  <!-- 在页面中声明 vue 挂载点的 DOM 区域 -->
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
h2 {
  text-align: center;
}
/* 设置全局的代码块样式 */
.code {
  border: 2px solid pink;
  text-align: left;
  font-family: 'Courier New', Courier, monospace;
}
</style>
