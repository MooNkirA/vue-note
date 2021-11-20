<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <div v-text="info"></div>
    <div>{{ info }}</div>
    <!-- v-html 将标签体内容直接作为 HTML —— 会忽略解析 property 值中的数据绑定。 -->
    <div v-html="info"></div>
  </div>
</template>

<script>
export default {
  name: 'v-html',
  data() {
    return {
      info: '<h4 style="color: red; font-weight: bold;">我是用样式的标签字符串</h4>',
      code: `
        <div v-text="info"></div>
        <div>{{ info }}</div>
        <!-- v-html 将标签体内容直接作为 HTML —— 会忽略解析 property 值中的数据绑定。 -->
        <div v-html="info"></div>

        info: '<h4 style="color: red; font-weight: bold;">我是用样式的标签字符串</h4>',
      `,
    }
  },
  created() {},
}
</script>

<style>
</style>