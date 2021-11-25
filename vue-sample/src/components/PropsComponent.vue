<template>
  <div class="container">
    <h2>Props 示例组件</h2>
    <div>
      <input v-model="text" />
      <p>输入结果：{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropsComponent',
  // 组件的定义属性
  props: [],
  // 组件的私有属性
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
  margin: 0 auto;
  border: 2px solid skyblue;
}
</style>