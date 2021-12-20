<template>
  <div class="container">
    <h1 style="text-align: center">使用 ref 操作组件内 DOM 元素</h1>
    <hr />

    <div>
      <!-- 在标签元素定义 ref 属性，vue 将此属性值做为key，注册到组件实例中的 $refs 属性对象中 -->
      <input type="text" ref="ipt" />
    </div>
    <div><button @click="focus">点击获取文本输入框焦点</button></div>
  </div>
</template>

<script>
export default {
  name: 'ref-dom',
  data() {
    return {}
  },
  created() {},
  methods: {
    focus() {
      // 通过 $refs 获取文本框 dom 元素，调用 focus 方法获取焦点
      this.$refs.ipt.focus()
    },
  },
}
</script>

<style scoped>
.container {
  background-color: pink;
  border: 2px solid red;
}
.container > div {
  margin-bottom: 10px;
  text-align: center;
}
</style>