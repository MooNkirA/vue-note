<template>
  <div class="container">
    <h2>我是子组件</h2>
    <p>子组件中 count 的值是：{{ count }}</p>
    <el-button type="success" round @click="add">+1</el-button>
  </div>
  <div></div>
</template>

<script>
export default {
  name: 'CustomEventComponent',
  // 1. 通过 emits 选项在组件上声明自定义事件
  emits: ['countChange'],
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    add() {
      // 更新本组件中的值
      this.count++
      // 2. this.$emit() 触发自定义事件，向父组件传递数据
      this.$emit('countChange', this.count)
    },
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
.el-button {
  min-width: 100px;
}
</style>
