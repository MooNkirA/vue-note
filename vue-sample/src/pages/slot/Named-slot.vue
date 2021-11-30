<template>
  <div class="container">
    <h1>具名插槽的基础使用示例</h1>
    <hr />

    <NamedSlotComponent>
      <!-- 
          在向具名插槽提供内容的时候，可以在一个 <template> 元素上使用 v-slot 指令，
          并以 v-slot 的参数的形式指定相应渲染的插槽名称

          值得注意的是： v-slot 只能添加在 <template> 上
       -->
      <template v-slot:title>
        <h3 style="text-align: center">我是一个标题</h3>
      </template>

      <!-- 
          <template> 元素中的所有内容都将会被传入相应的插槽。
          任何没有被包裹在带有 v-slot 的 <template> 中的内容都会被视为默认插槽的内容。
       -->
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <!-- 
          如果想将渲染到默认插槽的区域内容看上去更明确一些，可以在一个 <template> 中，指定 v-slot:default，用于包裹默认插槽的内容
          <template v-slot:default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
          </template>
       -->

      <!-- 
          2.6.0 版本新增具名插槽的缩写，把参数之前的所有内容 (v-slot:) 替换为字符 #
       -->
      <template #footer>
        <ButtonCounter></ButtonCounter>
      </template>
    </NamedSlotComponent>
  </div>
</template>

<script>
import NamedSlotComponent from '@/components/NamedSlotComponent'
import ButtonCounter from '@/components/ButtonCounter'

export default {
  name: 'named-slot',
  components: {
    NamedSlotComponent,
    ButtonCounter,
  },
  data() {
    return {}
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