<template>
  <div class="container">
    <h1 style="text-align: center">
      更新 DOM 延迟回调操作 vm.$nextTick(callback) 示例
    </h1>
    <hr />

    <div v-if="inputVisible">
      <!-- 在标签元素定义 ref 属性，vue 将此属性值做为key，注册到组件实例中的 $refs 属性对象中 -->
      <input type="text" ref="ipt" @blur="inputBlur" />
    </div>
    <div v-else>
      <button @click="focus">点击显示文本输入框并取得焦点</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-nexttick',
  data() {
    return {
      inputVisible: false,
    }
  },
  created() {},
  methods: {
    focus() {
      // 1. 显示文本框元素
      this.inputVisible = true

      /* 
        2. 如果直接通过 $refs 获取文本框 dom 元素，调用 focus 方法获取焦点会报以下错误：
        Cannot read properties of undefined (reading 'focus')
        原因是 vue 更新 DOM 时是异步执行的，在获取元素时，此时页面还没有重新获取
      */
      console.log(this.$refs.ipt) // undefined
      // 需要通过 vm.$nextTick(callback) 来将回调延迟到下次 DOM 更新循环之后执行。
      // 即在修改数据之后立即使用它，然后等待 DOM 更新。
      this.$nextTick(() => this.$refs.ipt.focus())
    },
    inputBlur(e) {
      console.log(e)
      // 失去焦点后设置隐藏文本框
      this.inputVisible = false
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