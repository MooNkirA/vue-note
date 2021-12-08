<template>
  <div class="container">
    <h1>我是父组件</h1>
    <p>父组件只在 provide 中定义的 num 的值（无法获取）是：{{ num }}</p>
    <p>父组件只在 data 中定义，再 provide 共享的 name 的值：{{ name }}</p>
    <div>
      <span>输入父组件适应性 provide （共享）的 text 值：</span>
      <input type="text" v-model="text" />
    </div>
    <hr />

    <LevelTwoComponent></LevelTwoComponent>
  </div>
</template>

<script>
// 组件的基础使用步骤1: 导入需要使用的 .vue 组件
import LevelTwoComponent from '../../components/LevelTwoComponent.vue'
import { computed } from 'vue'

export default {
  name: 'provide-inject-reactive',
  components: {
    LevelTwoComponent,
  },
  data() {
    return {
      name: 'MooNkirA',
      text: '',
    }
  },
  provide() {
    /* 
      在 provide 共享数据，只要是与本组件有关系的子级或更深层级别的组件都能获取到这些数据
      默认情况下，provide/inject 绑定并不是响应式的。
    */
    return {
      num: 1024,
      name: this.name,
      // 通过 computed 的函数返回一个响应式的值
      text: computed(() => this.text),
    }
  },
}
</script>

<style scoped>
.container {
  background-color: pink;
  border: 2px solid red;
}
</style>
