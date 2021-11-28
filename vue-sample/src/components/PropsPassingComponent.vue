<template>
  <div class="container">
    <h2>{{ componentTitle }}</h2>
    <div>
      <p v-if="showStatic">静态值传递 staticValue：{{ staticValue }}</p>
      <p v-if="showDynamical">
        动态绑定传递 dynamicallyValue：{{ dynamicallyValue }}
      </p>
      <p v-if="showExpression">
        动态绑定复杂表达式的值传递 dynamicallyExpression：{{
          dynamicallyExpression
        }}
      </p>
      <p v-if="showNumber">数字类型传递 numberValue：{{ numberValue }}</p>
      <p v-if="showBoolean">布尔值类型传递 booleanValue：{{ booleanValue }}</p>
      <p v-if="showArray">
        数组类型传递 arrayValue：{{ JSON.stringify(arrayValue) }}
      </p>
      <p v-if="showObject">
        对象类型传递 objectValue：{{ JSON.stringify(objectValue) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropsPassingComponent',
  /* 
     props 是组件的自定义属性，允许使用者通过自定义属性，为当前组件传递一些数据
     自定义属性的名字，是封装者自定义的（只要名称合法即可）
     props 中的数据，可以直接在模板结构中被使用

     注意：props 是只读的，不能直接修改 props 的值，否则终端会报错！
  */
  props: {
    // 组件标题
    title: String,

    staticValue: String,
    dynamicallyValue: { type: String },
    dynamicallyExpression: { type: String },
    numberValue: Number,
    booleanValue: Boolean,
    arrayValue: Array,
    objectValue: Object,
    // 用于显示组件
    showStatic: Boolean,
    showDynamical: Boolean,
    showExpression: Boolean,
    showNumber: Boolean,
    showBoolean: Boolean,
    showArray: Boolean,
    showObject: Boolean,
  },
  // 组件的私有属性
  data() {
    return {}
  },
  computed: {
    componentTitle() {
      return `${this.title}示例`
    },
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
  margin: 5px auto;
  border: 2px solid skyblue;
}
</style>