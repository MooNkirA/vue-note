<template>
  <div>
    <textarea readonly rows="6" cols="60">
      <!-- 原代码 -->
      <!-- v-text 更新元素的标签内容 -->
      <p v-text="username"></p>
      <!-- 注意：v-text 更新的内容会将标签体内容全部覆盖 -->
      <p v-text="gender">性别：</p>
    </textarea>

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
  name: 'V-text',
  data() {
    return {
      username: 'MooNkirA',
      gender: '女',
    };
  },
  created() {},
};
</script>

<style>
</style>