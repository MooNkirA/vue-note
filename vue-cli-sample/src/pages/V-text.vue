<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <!-- v-text 更新元素的标签内容 -->
    <p v-text="username"></p>
    <!-- 注意：v-text 更新的内容会将标签体内容全部覆盖 -->
    <p v-text="gender">性别：</p>
  </div>
</template>

<script>
export default {
  name: 'v-text',
  data() {
    return {
      username: 'MooNkirA',
      gender: '女',
      code: `
        <!-- v-text 更新元素的标签内容 -->
        <p v-text="username"></p>
        <!-- 注意：v-text 更新的内容会将标签体内容全部覆盖 -->
        <p v-text="gender">性别：</p>
      `,
    }
  },
  created() {},
}
</script>

<style>
</style>