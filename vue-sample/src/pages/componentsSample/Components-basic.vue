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
  /* 
    组件定义 name 属性之后，组件的名称即是 name 属性的值
    组件的 “注册名称” 的主要应用场景是：以标签的形式，把注册好的组件，渲染和使用到页面结构之中
    组件声明时候的 “name” 名称的主要应用场景：结合 <keep-alive> 标签实现组件缓存功能；以及在调试工具中看到组件的 name 名称
  */
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