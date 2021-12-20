<template>
  <div class="container">
    <h2>我是 3 级子组件</h2>
    <p>父组件传递的数据（静态，非响应性的）num：{{ num }}</p>
    <p>父组件传递的数据（静态，非响应性的）name：{{ name }}</p>
    <p>父组件响应性传递的数据 text：{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'LevelThreeComponent',
  /* 
    通过 inject 属性注入传递的数据，与定义 props 一样
    子组件不需要知道 inject 的 property 来自哪里
  */
  inject: ['num', 'name', 'text'],
  data() {
    return {}
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
  margin: 0 auto 10px;
  padding-bottom: 10px;
  border: 2px solid skyblue;
}
</style>
