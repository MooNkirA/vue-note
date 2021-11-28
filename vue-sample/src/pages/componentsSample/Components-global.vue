<template>
  <div class="container">
    <h1>我是父组件</h1>
    <hr />

    <!-- 使用全局组件，直接使用即可，不需要在本组件 components 属性中注册 -->
    <MyGlobalComponent></MyGlobalComponent>
  </div>
</template>

<script>
export default {
  name: 'components-global',
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