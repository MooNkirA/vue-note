<template>
  <div class="container">
    <h2>Named Slot Component</h2>
    <!-- 文章的标题 -->
    <div class="header-box">
      <!-- <slot> 元素一个特殊的属性 name，该属性用于定义额外的插槽 -->
      <slot name="title"></slot>
    </div>

    <!-- 文章的内容 -->
    <div class="content-box">
      <!-- 一个不带 name 的 <slot> 插槽会带有隐含的 name 值为“default” -->
      <slot></slot>
    </div>

    <!-- 文章的作者 -->
    <div class="footer-box">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NamedSlotComponent',
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