<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <p>v-for 循环渲染获取处理后的数组方式1：通过计算属性方式</p>
    <ul>
      <!-- evenNumbers 是计算属性 -->
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </ul>

    <p>v-for 循环渲染获取处理后的数组方式2：通过嵌套方法方式</p>
    <ul v-for="(set, index) in sets" :key="'a' + index">
      <!-- even 是一个自定义的过滤方法 -->
      <li v-for="n in even(set)" :key="'b' + n">{{ n }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'v-for-filter',
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
      code: `
        <p>v-for 循环渲染获取处理后的数组方式1：通过计算属性方式</p>
        <ul>
          <!-- evenNumbers 是计算属性 -->
          <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
        </ul>

        <p>v-for 循环渲染获取处理后的数组方式2：通过嵌套方法方式</p>
        <ul v-for="(set, index) in sets" :key="'a' + index">
          <!-- even 是一个自定义的过滤方法 -->
          <li v-for="n in even(set)" :key="'b' + n">{{ n }}</li>
        </ul>
      `,
    }
  },
  created() {},
  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0)
    },
  },
  methods: {
    even(numbers) {
      return numbers.filter((number) => number % 2 === 0)
    },
  },
}
</script>

<style scoped>
</style>