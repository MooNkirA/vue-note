<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <!-- v-if 的表达式返回 true 的时候被渲染。 -->
    <p v-if="type === 'A'">我是v-if, type是A</p>
    <!-- v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。 -->
    <p v-else-if="type === 'B'">我是v-else-if, type是B</p>
    <p v-else-if="type === 'C'">我是v-else-if, type是C</p>
    <!-- v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。 -->
    <p v-else>我是v-else</p>

    <button @click="type = 'A'">Type A</button>
    <button @click="type = 'B'">Type B</button>
    <button @click="type = 'C'">Type C</button>
    <button @click="type = 'X'">Other Type</button>
  </div>
</template>

<script>
export default {
  name: 'v-if',
  data() {
    return {
      type: '',
      code: `
        <!-- v-if 的表达式返回 true 的时候被渲染。 -->
        <p v-if="type === 'A'">我是v-if, type是A</p>
        <!-- v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。 -->
        <p v-else-if="type === 'B'">我是v-else-if, type是B</p>
        <p v-else-if="type === 'C'">我是v-else-if, type是C</p>
        <!-- v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。 -->
        <p v-else>我是v-else</p>

        <button @click="type = 'A'">Type A</button>
        <button @click="type = 'B'">Type B</button>
        <button @click="type = 'C'">Type C</button>
        <button @click="type = 'X'">Other Type</button>
      `,
    }
  },
  created() {},
}
</script>

<style>
</style>