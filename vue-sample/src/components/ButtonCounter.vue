<template>
  <div class="container">
    <h2>我是子组件</h2>
    <div>
      <button @click="count++">You clicked me {{ count }} times.</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonCounter',
  data() {
    return {
      count: 0,
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