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
  name: 'Components-basic',
  // 组件的基础使用步骤2: 在 components 属性中注册组件
  components: {
    ButtonCounter,
  },
  data() {
    return {}
  },
}
</script>

<style>
.container {
  background-color: pink;
  border: 2px solid red;
}
</style>