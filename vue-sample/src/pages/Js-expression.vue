<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <!-- 使用 JavaScript 表达式。其限制就是，每个绑定都只能包含单个表达式 -->
    <div>1 + 2 的结果是：{{ 1 + 2 }}</div>
    <div>
      " {{ tips }} "反转的结果是：{{ tips.split('').reverse().join('') }}
    </div>
    <!-- 使用表达式后绑定title属性结果是 box3 -->
    <div :title="'box' + index">这是一个 div</div>

    <!-- 这是语句，不是表达式 -->
    <!-- <div>不会生效的 JavaScript 表达式：{{ var a = 1 }}</div> -->
    <!-- 流控制也不会生效，请使用三元表达式 -->
    <!-- <div>不会生效的 JavaScript 表达式：{{ if (ok) { return msg } }}</div> -->
  </div>
</template>

<script>
export default {
  name: 'js-expression',
  data() {
    return {
      tips: '这是一个提示',
      index: 3,
      code: `
        <!-- 使用 JavaScript 表达式。其限制就是，每个绑定都只能包含单个表达式 -->
        <div>1 + 2 的结果是：{{ 1 + 2 }}</div>
        <<div>
          " {{ tips }} "反转的结果是：{{ tips.split('').reverse().join('') }}
        </div>
        <!-- 使用表达式后绑定title属性结果是 box3 -->
        <div :title="'box' + index">这是一个 div</div>

        <!-- 这是语句，不是表达式 -->
        <!-- <div>不会生效的 JavaScript 表达式：{{ var a = 1 }}</div> -->
        <!-- 流控制也不会生效，请使用三元表达式 -->
        <!-- <div>不会生效的 JavaScript 表达式：{{ if (ok) { return msg } }}</div> -->
      `,
    }
  },
  created() {},
}
</script>

<style>
</style>