<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <!-- v-show 的表达式返回 true 的时候被渲染。
        带有 v-show 的元素始终会被渲染并保留在 DOM 中。
        v-show 只是简单地切换元素的 CSS property display。
     -->
    <p v-show="type === 'A'">我是v-show, type是A</p>
    <!-- v-show 不支持 <template> 元素，也不支持 v-else-if 与 v-else。 -->
    <!-- <p v-else-if="type === 'B'">我是v-else-if, type是B</p> -->
    <!-- <p v-else>我是v-else</p> -->

    <button @click="type = 'A'">Type A</button>
    <button @click="type = 'B'">Type B</button>
  </div>
</template>

<script>
export default {
  name: 'v-show',
  data() {
    return {
      type: '',
      code: `
        <!-- v-show 的表达式返回 true 的时候被渲染。
            带有 v-show 的元素始终会被渲染并保留在 DOM 中。
            v-show 只是简单地切换元素的 CSS property display。
        -->
        <p v-show="type === 'A'">我是v-show, type是A</p>
        <!-- v-show 不支持 <template> 元素，也不支持 v-else-if 与 v-else。 -->
        <!-- <p v-else-if="type === 'B'">我是v-else-if, type是B</p> -->
        <!-- <p v-else>我是v-else</p> -->

        <button @click="type = 'A'">Type A</button>
        <button @click="type = 'B'">Type B</button>
      `,
    }
  },
  created() {},
}
</script>

<style>
</style>