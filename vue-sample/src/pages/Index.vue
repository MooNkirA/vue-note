<template>
  <div class="body">
    <template v-for="(c, idx) in contentList">
      <h2 :key="'t' + idx">{{ c.title }}</h2>
      <div :key="'c' + idx" class="container">
        <template v-for="(item, index) in c.sampleList">
          <div class="button-wrapper" :key="index">
            <div class="button" @click="jumpTo(item.path)">
              <span class="text">{{ item.text }}</span>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      // 内容列表
      contentList: [
        {
          title: '内容渲染指令',
          sampleList: [
            { text: 'v-text 示例', path: '/v-text' },
            { text: '文本插值表达式 {{ }} 示例', path: '/mustache' },
            { text: 'v-html 示例', path: '/v-html' },
          ],
        },
        {
          title: '属性绑定指令',
          sampleList: [
            { text: 'v-bind 示例', path: '/v-bind' },
            { text: 'Javascript 表达式示例', path: '/js-expression' },
          ],
        },
        {
          title: '事件绑定指令',
          sampleList: [
            { text: 'v-on 事件绑定示例', path: '/v-on' },
            { text: 'v-on 事件绑定函数示例', path: '/v-on-function' },
            { text: 'v-on 事件修饰符示例', path: '/v-on-event-modifiers' },
            { text: 'v-on 按键修饰符示例', path: '/v-on-key-modifiers' },
          ],
        },
        {
          title: '双向绑定指令',
          sampleList: [
            { text: 'v-model 数据双向绑定示例', path: '/v-model' },
            { text: 'v-model 修饰符示例', path: '/v-model-modifiers' },
          ],
        },
        {
          title: '条件渲染指令',
          sampleList: [
            { text: 'v-if 条件渲染示例', path: '/v-if' },
            { text: 'v-show 条件渲染示例', path: '/v-show' },
          ],
        },
        {
          title: '列表渲染指令',
          sampleList: [
            { text: 'v-for 列表渲染示例', path: '/v-for' },
            { text: 'v-for 高级使用示例-过滤与排序', path: '/v-for-filter' },
          ],
        },
        {
          title: 'vue 过滤器',
          sampleList: [
            { text: '自定义过滤器基础示例', path: '/vue-filters' },
            { text: '自定义全局过滤器示例', path: '/vue-global-filters' },
            { text: '过滤器串联调用示例', path: '/vue-chained-filters' },
            { text: '过滤器传递参数示例', path: '/vue-arguments-filters' },
          ],
        },
        {
          title: '计算属性与侦听器',
          sampleList: [
            { text: 'computed 计算属性基础示例', path: '/vue-computed' },
            { text: 'watch 侦听器示例', path: '/vue-watch' },
            { text: 'watch 侦听器不同方式定义示例', path: '/vue-watch-option' },
          ],
        },
        {
          title: '组件',
          sampleList: [
            { text: '局部组件示例', path: '/components-basic' },
            { text: '全局组件示例', path: '/components-global' },
            {
              text: '组件 props 类型检查示例',
              path: '/components-props-check',
            },
            {
              text: '组件 props 传递方式示例',
              path: '/components-props-passing',
            },
            { text: '组件的生命周期示例', path: '/components-lifecycle' },
            { text: '父组件传递子组件数据示例', path: '/parent-pass-child' },
            { text: '子组件传递父组件数据示例', path: '/child-pass-parent' },
            { text: '兄弟组件数据传递示例', path: '/component-pass-component' },
            { text: '动态组件示例', path: '/dynamic-components' },
            {
              text: '动态组件使用 keep-alive 示例',
              path: '/dynamic-components-keep-alive',
            },
          ],
        },
        {
          title: '插槽',
          sampleList: [
            { text: '插槽基础示例', path: '/slot-basic' },
            { text: '具名插槽示例', path: '/named-slot' },
            { text: '作用域插槽示例', path: '/scoped-slot' },
            { text: '动态插槽名示例', path: '/dynamic-slot-names' },
          ],
        },
        {
          title: '自定义指令',
          sampleList: [
            { text: '自定义指令基础示例', path: '/custom-directives-basic' },
            {
              text: '自定义指令函数简写示例',
              path: '/custom-directives-function-shorthand',
            },
            {
              text: '全局自定义指令使用示例',
              path: '/custom-directives-global',
            },
          ],
        },
        {
          title: 'ref 访问组件实例或元素',
          sampleList: [
            { text: 'ref 访问元素示例', path: '/ref-dom' },
            { text: 'ref 访问子组件示例', path: '/ref-component' },
          ],
        },
        {
          title: '实例方法 | 生命周期相关',
          sampleList: [
            {
              text: '更新 DOM 延迟回调操作 vm.$nextTick(callback) 示例',
              path: '/vue-nexttick',
            },
          ],
        },
        {
          title: '其他',
          sampleList: [
            { text: 'vue 快速入门示例', path: '/vue-quickstart' },
            { text: 'vue 实例创建示例', path: '/vue-instance' },
            { text: 'vue 相关文档', path: '/hello' },
          ],
        },
        {
          title: 'vue 应用案例',
          sampleList: [
            {
              text: 'vue 基础指令使用案例 - 品牌列表',
              path: '/vue-basic-command',
            },
            {
              text: 'vue 组件化综合案例 - 购物车',
              path: '/vue-components-cart',
            },
          ],
        },
      ],
    }
  },
  methods: {
    // 跳转
    jumpTo(path) {
      this.$router.push(path)
    },
  },
}
</script>

<style scoped lang="css">
h2 {
  color: yellow;
}

.container .button-wrapper:nth-child(5n + 1) div:before {
  border-color: #ff8b94;
}

.container .button-wrapper:nth-child(5n + 1) div {
  border-color: #ff8b94;
}

.container .button-wrapper:nth-child(5n + 2) div:before {
  border-color: #02a7e1;
}

.container .button-wrapper:nth-child(5n + 2) div {
  border-color: #02a7e1;
}

.container .button-wrapper:nth-child(5n + 3) div:before {
  border-color: #98cb4a;
}

.container .button-wrapper:nth-child(5n + 3) div {
  border-color: #98cb4a;
}

.container .button-wrapper:nth-child(5n + 4) div:before {
  border-color: #ae5a41;
}

.container .button-wrapper:nth-child(5n + 4) div {
  border-color: #ae5a41;
}

.container .button-wrapper:nth-child(5n + 5) div:before {
  border-color: #f7d842;
}

.container .button-wrapper:nth-child(5n + 5) div {
  border-color: #f7d842;
}

.body {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #555555;
}

.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0;
  flex-wrap: wrap;
}
.container .button-wrapper {
  overflow: hidden;
}
.container .button-wrapper .button {
  position: relative;
  /* text-transform: uppercase; */
  color: #fff;
  border: solid 2px #02a7e1;
  padding: 10px 30px;
  z-index: 1;
}
.container .button-wrapper .button::before {
  position: absolute;
  border-bottom: solid 3px;
  content: '';
  min-height: 10px;
  min-width: 100px;
  z-index: 200;
  left: 50%;
  transform: translateX(-50%);
  top: 60%;
  opacity: 1;
  transition-duration: 0.5s;
}
.container .button-wrapper .button::after {
  pointer-events: none;
  position: absolute;
  content: '';
  width: 600px;
  height: 160px;
  border-radius: 50%;
  background-color: #555555;
  top: -120%;
  left: -30%;
  z-index: -10;
  transition-duration: 2s;
}
.container .button-wrapper .button:hover:after {
  width: 0;
  height: 50px;
}
.container .button-wrapper .button:hover:before {
  opacity: 0;
}
</style>