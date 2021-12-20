<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <h3 class="thin" :class="isItalic ? 'italic' : ''">三元表达式绑定单个 class</h3>
    <h3 class="thin" :class="[isItalic ? 'italic' : '', isDelete ? 'delete' : '']">
      v-bind:class 绑定数组，应用一个 class 列表
    </h3>

    <button @click="isItalic = !isItalic">Toggle Italic</button>
    <button @click="isDelete = !isDelete">Toggle Delete</button>

    <h3 class="thin" :class="classObj">class 属性都绑定的数据对象</h3>
    <button @click="classObj.italic = !classObj.italic">Toggle Italic</button>
    <button @click="classObj.delete = !classObj.delete">Toggle Delete</button>
  </div>
</template>

<script>
export default {
  name: 'v-bind-class',
  data() {
    return {
      // 字体是否倾斜
      isItalic: false,
      // 是否应用删除效果
      isDelete: false,
      // class 属性对象
      classObj: {
        italic: false,
        delete: false,
      },
      code: `
        <h3 class="thin" :class="isItalic ? 'italic' : ''">三元表达式绑定单个 class</h3>
        <h3 class="thin" :class="[isItalic ? 'italic' : '', isDelete ? 'delete' : '']">
          v-bind:class 绑定数组，应用一个 class 列表
        </h3>

        <button @click="isItalic = !isItalic">Toggle Italic</button>
        <button @click="isDelete = !isDelete">Toggle Delete</button>

        <h3 class="thin" :class="classObj">class 属性都绑定的数据对象</h3>
        <button @click="classObj.italic = !classObj.italic">Toggle Italic</button>
        <button @click="classObj.delete = !classObj.delete">Toggle Delete</button>

        data() {
          return {
            // 字体是否倾斜
            isItalic: false,
            // 是否应用删除效果
            isDelete: false,
            // class 属性对象
            classObj: {
              italic: false,
              delete: false,
            },
          }
        }
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
