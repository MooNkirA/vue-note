<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <div>事件修饰符 .prevent 示例</div>
    <!-- 事件修饰符 .prevent - 调用 event.preventDefault() -->
    <a
      href="https://moonzero.gitee.io/code-learning-note/#/"
      @click.prevent="show"
      >跳转</a
    >

    <hr />

    <div>事件修饰符 .stop 示例</div>
    <div
      style="
        height: 150px;
        background-color: orange;
        padding-left: 100px;
        line-height: 150px;
      "
      @click="divHandler"
    >
      <!-- 事件修饰符 .stop - 调用 event.stopPropagation()
          移除 .stop 后点击会同时触发两个元素的点击事件
       -->
      <button @click.stop="btnHandler">按钮</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-on-event-modifiers',
  data() {
    return {
      code: `
        <div>事件修饰符 .prevent 示例</div>
        <!-- 事件修饰符 .prevent - 调用 event.preventDefault() -->
        <a
          href="https://moonzero.gitee.io/code-learning-note/#/"
          @click.prevent="show"
          >跳转</a
        >

        <hr />

        <div>事件修饰符 .stop 示例</div>
        <div
          style="
            height: 150px;
            background-color: orange;
            padding-left: 100px;
            line-height: 150px;
          "
          @click="divHandler"
        >
          <!-- 事件修饰符 .stop - 调用 event.stopPropagation()
              移除 .stop 后点击会同时触发两个元素的点击事件
          -->
          <button @click.stop="btnHandler">按钮</button>
        </div>


        methods: {
          show() {
            console.log('点击了 a 链接')
          },
          btnHandler() {
            console.log('触发内层 button 点击事件')
          },
          divHandler() {
            console.log('触发外层 div 点击事件')
          },
        },
      `,
    }
  },
  created() {},
  // methods 属性的作用是定义事件的处理函数
  methods: {
    show() {
      console.log('点击了 a 链接')
    },
    btnHandler() {
      console.log('触发内层 button 点击事件')
    },
    divHandler() {
      console.log('触发外层 div 点击事件')
    },
  },
}
</script>

<style>
</style>