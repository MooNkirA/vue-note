<template>
  <div class="container">
    <h1>作用域插槽的基础使用示例</h1>
    <hr />

    <ScopedSlotComponent>
      <!-- 
          在其他非默认插槽，都需要使用完整的基于 `<template>` 的语法
          “v-solt:插槽名称” 来获取作用域数据。
       -->
      <template v-slot:title="scope">
        <h3 style="text-align: center">标题插槽传递的数据：{{ scope.tip }}</h3>
      </template>

      <!-- 
          <template> 元素中的所有内容都将会被传入相应的插槽。
          任何没有被包裹在带有 v-slot 的 <template> 中的内容都会被视为默认插槽的内容。
          "v-solt:" 可以使用“#” 缩写代替

          当被提供的内容只有默认插槽时，可以采用缩写语法 v-slot="xxxx"

          `v-slot` 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。
          即可以使用解构表达式，并对属性进行重命名，给属性指定默认值等 ES6 语法
       -->
      <template
        #default="{ messsage: msg, user: { name, age, noThis = '没有此属性' } }"
      >
        <p>默认插槽的作用域传递 messsage：{{ msg }}</p>
        <p>默认插槽的作用域传递 user.name：{{ name }}</p>
        <p>默认插槽的作用域传递 user.age：{{ age }}</p>
        <p>
          默认插槽的作用域没有传递的属性，解构赋默认值 user.noThis：{{ noThis }}
        </p>
      </template>
    </ScopedSlotComponent>
  </div>
</template>

<script>
import ScopedSlotComponent from '@/components/ScopedSlotComponent'

export default {
  name: 'named-slot',
  components: {
    ScopedSlotComponent,
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