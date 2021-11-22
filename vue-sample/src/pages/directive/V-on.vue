<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <p>count 的值是：{{ count }}</p>
    <!-- 直接触发 JavaScript 代码 -->
    <button v-on:click="count += 1">
      绑定事件直接执行 JavaScript 代码（+1）
    </button>

    <!-- v-on: 指令可以被简写为 @ -->
    <button @click="count -= 1">指令简写（-1）</button>
  </div>
</template>

<script>
export default {
  name: 'v-on',
  data() {
    return {
      count: 0,
      code: `
        <p>count 的值是：{{ count }}</p>
        <!-- 直接触发 JavaScript 代码 -->
        <button v-on:click="count += 1">
          绑定事件直接执行 JavaScript 代码（+1）
        </button>

        <!-- v-on: 指令可以被简写为 @ -->
        <button @click="count -= 1">指令简写（-1）</button>
      `,
    }
  },
  created() {},
}
</script>

<style>
</style>