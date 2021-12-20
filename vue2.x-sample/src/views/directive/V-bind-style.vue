<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <div :style="{ color: active, fontSize: fsize + 'px', 'background-color': bgcolor }">
      绑定元素的 style 内联样式对象语法
    </div>
    <button @click="fsize += 1">字号 +1</button>
    <button @click="fsize -= 1">字号 -1</button>
  </div>
</template>

<script>
export default {
  name: 'v-bind-style',
  data() {
    return {
      // 高亮时的文本颜色
      active: 'red',
      // 文字的大小
      fsize: 30,
      // 背景颜色
      bgcolor: 'pink',
      code: `
      `,
    }
  },
  created() {},
}
</script>

<style lang="less" scoped>
// 字体变细
.thin {
  font-weight: 200;
  text-align: center;
}

// 倾斜字体
.italic {
  font-style: italic;
}
// 文字中划线效果
.delete {
  text-decoration: line-through;
}
</style>
