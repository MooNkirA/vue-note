<template>
  <div class="container">
    <h2>Scoped Slots Component</h2>
    <!-- 文章的标题 -->
    <div class="header-box">
      <slot name="title" :tip="tip"></slot>
    </div>

    <!-- 文章的内容 -->
    <div class="content-box">
      <!-- 在封装组件时，为预留的 <slot> 提供属性对应的值，这种用法，叫做 “作用域插槽” -->
      <slot :messsage="messsage" :user="user"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScopedSlotComponent',
  data() {
    return {
      messsage: '我是一个字符串的属性值',
      user: { name: 'MooNkirA', age: 16 },
      tip: '我是非默认插槽提供的数据',
    }
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

.header-box {
  background-color: greenyellow;
}
.content-box {
  background-color: lightblue;
}
.footer-box {
  background-color: silver;
}
</style>