<template>
  <div class="container">
    <h1>我是父组件</h1>
    <hr />

    <!-- 组件的基础使用步骤3: 以标签形式，使用已注册的组件 -->
    <ButtonCounter></ButtonCounter>
  </div>
</template>

<script>
// 组件的基础使用步骤1: 导入需要使用的 .vue 组件
import ButtonCounter from '@/components/ButtonCounter'

export default {
  name: 'components-basic',
  // 组件的基础使用步骤2: 在 components 属性中注册组件
  components: {
    ButtonCounter,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
/* style 节点的 scoped 属性，用来自动为每个组件分配唯一的“自定义属性”，
  并自动为当前组件的 DOM 标签和 style 样式应用这个自定义属性，防止组件的样式冲突问题 */
.container {
  background-color: pink;
  border: 2px solid red;
}
</style>