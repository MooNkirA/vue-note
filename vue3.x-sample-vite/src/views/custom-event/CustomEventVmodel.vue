<template>
  <div class="container">
    <h1>我是父组件</h1>
    <p>父组件中 count 的值是：{{ count }}</p>
    <hr />

    <!-- 在组件上监听自定义事件
        默认情况下，组件上的 `v-model` 使用 `modelValue` 作为 `prop` 和 `update:modelValue` 作为事件
     -->
    <custom-event-vmodel-component v-model:number="count"></custom-event-vmodel-component>
  </div>
</template>

<script>
// 组件的基础使用步骤1: 导入需要使用的 .vue 组件
import CustomEventVmodelComponent from '../../components/CustomEventVmodelComponent.vue'

export default {
  name: 'custom-event-v-model',
  // 组件的基础使用步骤2: 在 components 属性中注册组件
  components: {
    CustomEventVmodelComponent,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {},
}
</script>

<style scoped>
.container {
  background-color: pink;
  border: 2px solid red;
}
</style>
