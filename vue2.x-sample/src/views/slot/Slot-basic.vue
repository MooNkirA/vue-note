<template>
  <div class="container">
    <h1>插槽的基础使用</h1>
    <hr />

    <SoltComponent>
      <!-- 
          如果在封装组件时没有预留任何 `<slot>` 插槽，则用户提供的任何自定义内容都会被丢弃。
          默认情况下，在使用组件的时候，提供的内容都会被填充到名字为 default 的插槽之中。
       -->
      这是文章的内容 | {{ author }}
    </SoltComponent>

    <hr />
    <SoltComponent>
      <!-- 
          当组件渲染的时候，<slot></slot> 将会被替换组件标签体的内容，
          插槽内可以包含任何模板代码，包括 HTML，甚至其它的组件
       -->
      <h4 style="text-align: center">我是一个元素标签</h4>
      <ButtonCounter></ButtonCounter>
    </SoltComponent>

    <hr />
    <!-- 如果插槽有指定后备内容（默认值），如果使用时不提供任何插槽内容，则会渲染后备内容（默认值） -->
    <SoltComponent></SoltComponent>
  </div>
</template>

<script>
import SoltComponent from '@/components/SoltComponent'
import ButtonCounter from '@/components/ButtonCounter'

export default {
  name: 'slot-basic',
  components: {
    SoltComponent,
    ButtonCounter,
  },
  data() {
    return {
      author: 'MooN',
    }
  },
}
</script>

<style scoped>
.container {
  background-color: pink;
  border: 2px solid red;
}
.container > h1 {
  text-align: center;
}
</style>