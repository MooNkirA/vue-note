<template>
  <div class="container">
    <h2>我是子组件</h2>
    <p>子组件中 number 的值是：{{ number }}</p>
    <el-button type="success" round @click="add">+1</el-button>
  </div>
  <div></div>
</template>

<script>
export default {
  name: 'CustomEventVmodelComponent',
  // v-model 参数绑定的属性
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
  // v-model 参数绑定的 update:xxx 的事件来进行与父组件的同步：
  emits: ['update:number'],
  data() {
    return {}
  },
  methods: {
    add() {
      // this.$emit() 触发自定义事件，操作 props 数据，父组件更新
      this.$emit('update:number', this.number + 1)
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
