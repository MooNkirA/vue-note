<template>
  <div>
    <textarea readonly rows="7" cols="50">
      <!-- 原代码 -->
      <div v-text="info"></div>
      <div>{{ temp }}</div>
      <!-- v-html 将标签体内容直接作为 HTML
           会忽略解析 property 值中的数据绑定。 -->
      <div v-html="info"></div>
    </textarea>

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
  name: 'V-html',
  data() {
    return {
      info: '<h4 style="color: red; font-weight: bold;">我是用样式的标签字符串</h4>',
      temp: '{{ info }}',
    };
  },
  created() {},
};
</script>

<style>
</style>