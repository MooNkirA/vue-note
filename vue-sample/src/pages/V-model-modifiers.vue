<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <p>.lazy 修饰符</p>
    <!-- .lazy 修饰符。在“change”事件之后进行绑定，而非“input”更新绑定 -->
    <input v-model.lazy="msg" />
    <p>.lazy 修饰符输入框： {{ msg }}</p>

    <p>.number 修饰符</p>
    <!-- .number 修饰符。自动将用户的输入值转为数值类型 -->
    <input v-model.number="a" type="number" /> +
    <input v-model.number="b" type="number" /> =
    {{ a + b }}

    <p>.trim 修饰符</p>
    <!-- .trim 修饰符。自动过滤用户输入的首尾空白字符 -->
    <input v-model.trim="trimMsg" />
    <p>.trim 修饰符过滤首尾空白字符: {{ trimMsg }}</p>
  </div>
</template>

<script>
export default {
  name: 'v-model-modifiers',
  data() {
    return {
      msg: '',
      a: null,
      b: null,
      trimMsg: '',
      code: `
        <p>.lazy 修饰符</p>
        <!-- .lazy 修饰符。在“change”事件之后进行绑定，而非“input”更新绑定 -->
        <input v-model.lazy="msg" />
        <p>.lazy 修饰符输入框： {{ msg }}</p>

        <p>.number 修饰符</p>
        <!-- .number 修饰符。自动将用户的输入值转为数值类型 -->
        <input v-model.number="a" type="number" /> +
        <input v-model.number="b" type="number" /> =
        {{ a + b }}

        <p>.trim 修饰符</p>
        <!-- .trim 修饰符。自动过滤用户输入的首尾空白字符 -->
        <input v-model.trim="trimMsg" />
        <p>.trim 修饰符过滤首尾空白字符: {{ trimMsg }}</p>
      `,
    }
  },
  created() {},
}
</script>

<style>
</style>