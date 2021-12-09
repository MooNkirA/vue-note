<template>
  <div class="container">
    <h2>Props 示例组件</h2>
    <div>
      <p>propA 数值类型：{{ propA }}</p>
      <p>propB 字符串或者数值类型：{{ propB }}</p>
      <p>propC 必填的字符串：{{ propC }}</p>
      <p>propD 带有默认值（100）的数字：{{ propD }}</p>
      <p>propE 带有默认值的对象：{{ JSON.stringify(propE) }}</p>
      <p>
        propF 自定义验证函数，必须是['success', 'warning', 'danger']其中一项：{{
          propF
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropsCheckComponent',
  /* 
     props 是组件的自定义属性，允许使用者通过自定义属性，为当前组件传递一些数据
     自定义属性的名字，是封装者自定义的（只要名称合法即可）
     props 中的数据，可以直接在模板结构中被使用

     注意：props 是只读的，不能直接修改 props 的值，否则终端会报错！
  */
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String, // 指定类型
      required: true, // 定义该 prop 是否是必填项。
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100, // 为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值。
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 默认值是对象或数组默认值必须从一个工厂函数返回
      default: function () {
        return { message: 'hello' }
      },
    },
    // 自定义验证函数
    propF: {
      // 自定义验证函数会将该 prop 的值作为唯一的参数传入
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      },
    },
  },
  // 组件的私有属性
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
  border: 2px solid skyblue;
}
</style>