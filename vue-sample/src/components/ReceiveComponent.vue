<template>
  <div class="container">
    <h2>子组件</h2>
    <div>
      <p>接收父组件传递的基本类型：{{ message }}</p>
      <p>接收父组件传递的对象类型：{{ JSON.stringify(user) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReceiveComponent',
  // 组件自定义属性，用于接收调用方传递到本组件的数据
  props: {
    message: String,
    user: Object,
  },
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
  margin: 5px auto;
  border: 2px solid skyblue;
}
</style>