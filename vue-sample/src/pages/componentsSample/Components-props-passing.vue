<template>
  <div class="container">
    <h1 style="text-align: center">我是父组件</h1>
    <hr />

    <!-- 传递静态的值 -->
    <PropsPassingComponent
      title="传递静态值"
      static-value="MooNKirA"
      showStatic
    ></PropsPassingComponent>

    <div>
      <span>输入动态赋值 dynamicallyValue：</span>
      <input type="text" v-model="valueA" />
    </div>

    <!-- 动态赋予一个变量的值 -->
    <PropsPassingComponent
      title="v-bind 动态赋值"
      :dynamically-value="valueA"
      showDynamical
    ></PropsPassingComponent>

    <!-- 动态赋予一个复杂表达式的值 -->
    <PropsPassingComponent
      title="动态赋予一个复杂表达式的值"
      :dynamically-expression="'[复杂表达式合并] ' + valueA"
      showExpression
    ></PropsPassingComponent>

    <!-- 
        即便输入的数字是静态的，仍然需要 v-bind 进行绑定
        这是一个 JavaScript 表达式而不是一个字符串
    -->
    <PropsPassingComponent
      title="静态传入数字类型"
      :number-value="24"
      showNumber
    ></PropsPassingComponent>

    <div>
      <span>输入动态数字赋值 numberValue：</span>
      <input type="number" v-model.number="valueB" />
    </div>

    <!-- 用一个变量进行动态赋值 -->
    <PropsPassingComponent
      title="动态传入数字类型"
      :number-value="valueB"
      showNumber
    ></PropsPassingComponent>

    <!-- 包含该 prop 没有值的情况在内，都意味着 `true` -->
    <PropsPassingComponent
      title="传入布尔值没有值情况"
      boolean-value
      showBoolean
    ></PropsPassingComponent>

    <!-- 
        即便输入的 `false` 是静态的，仍然需要 v-bind 进行绑定
        这是一个 JavaScript 表达式而不是一个字符串
     -->
    <PropsPassingComponent
      title="传入布尔值静态值"
      :boolean-value="false"
      showBoolean
    ></PropsPassingComponent>

    <div>
      <span>选择动态布尔赋值 numberValue：</span>
      <input type="checkbox" v-model="valueC" />
    </div>

    <!-- 用一个变量进行动态赋值 -->
    <PropsPassingComponent
      title="动态传入布尔类型"
      :boolean-value="valueC"
      showBoolean
    ></PropsPassingComponent>

    <!-- 
        即便传入数组是静态的，仍然需要 v-bind 进行绑定
        这是一个 JavaScript 表达式而不是一个字符串
     -->
    <PropsPassingComponent
      title="传入数组静态值"
      :array-value="[234, 266, 273]"
      showArray
    ></PropsPassingComponent>

    <div>
      <span>选择动态数组赋值 arrayValue：</span>
      <input type="checkbox" id="c1" value="MooN" v-model="valueD" />
      <label for="c1">MooN</label>
      <input type="checkbox" id="c2" value="kirA" v-model="valueD" />
      <label for="c2">kirA</label>
      <input type="checkbox" id="c3" value="Zero" v-model="valueD" />
      <label for="c3">Zero</label>
    </div>

    <!-- 用一个变量进行动态赋值 -->
    <PropsPassingComponent
      title="动态传入布尔类型"
      :array-value="valueD"
      showArray
    ></PropsPassingComponent>

    <!-- 
        即便传入对象是静态的，仍然需要 v-bind 进行绑定
        这是一个 JavaScript 表达式而不是一个字符串
     -->
    <PropsPassingComponent
      title="传入对象静态值"
      :object-value="{
        name: 'Veronica',
        company: 'Veridian Dynamics',
      }"
      showObject
    ></PropsPassingComponent>

    <div>
      <p>
        <span>输入动态对象赋值 objectValue name 属性:</span>
        <input type="text" v-model="valueE.name" />
      </p>
      <p>
        <span>输入动态对象赋值 objectValue age 属性:</span>
        <input type="number" v-model.number="valueE.age" />
      </p>
      <p>
        <span>选择动态对象赋值 objectValue color 属性:</span>
        <input type="checkbox" id="c4" value="red" v-model="valueE.color" />
        <label for="c4">红色</label>
        <input type="checkbox" id="c5" value="black" v-model="valueE.color" />
        <label for="c5">黑色</label>
        <input type="checkbox" id="c6" value="green" v-model="valueE.color" />
        <label for="c6">绿色</label>
      </p>
    </div>

    <!-- 用一个变量进行动态赋值 -->
    <PropsPassingComponent
      title="动态传入对象类型"
      :array-value="valueE"
      showArray
    ></PropsPassingComponent>

    <!-- 传入一个对象的所有 property 
        如果想要将一个对象的所有 property 都作为 prop 传入，
        可以使用不带参数的 `v-bind` (取代 `v-bind:prop-name`)。
    -->
    <PropsPassingComponent v-bind="allProperty"></PropsPassingComponent>
  </div>
</template>

<script>
import PropsPassingComponent from '@/components/PropsPassingComponent'

export default {
  name: 'components-props-passing',
  components: {
    PropsPassingComponent,
  },
  data() {
    return {
      valueA: '',
      valueB: null,
      valueC: null,
      valueD: [],
      valueE: { color: [] },
      allProperty: {
        title: '传入一个对象绑定所有属性值',
        staticValue: '123',
        numberValue: 244,
        booleanValue: false,
        arrayValue: ['a', 'b', 'c', 'd'],
        objectValue: {
          name: '石原里美',
          age: 28,
        },
        showStatic: true,
        showNumber: true,
        showBoolean: true,
        showArray: true,
        showObject: true,
      },
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
.container > div {
  text-align: center;
}
</style>