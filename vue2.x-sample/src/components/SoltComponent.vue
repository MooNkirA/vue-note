<template>
  <div class="container">
    <h2>Solt Component</h2>

    <!-- 文章的内容 -->
    <div class="content-box">
      <!-- 
          `<slot>` 是vue的内置组件，`<slot>` 元素作为组件模板之中的内容分发插槽。
          `<slot>` 元素自身将会在组件被调用时被替换成调用者指定的内容。
       -->
      <slot>
        <p style="text-align: center; color: red">我是插槽的后备内容(默认值)</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoltComponent',
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
  margin: 0 auto;
  padding-bottom: 10px;
  border: 2px solid skyblue;
}

.container > div {
  width: 80%;
  min-height: 150px;
}

.content-box {
  background-color: lightblue;
}
</style>