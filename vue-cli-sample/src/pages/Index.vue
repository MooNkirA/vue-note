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
          sampleList: [{ text: 'v-model 数据双向绑定示例', path: '/v-model' }],
        },
        {
          title: '其他',
          sampleList: [
            { text: 'vue 快速入门示例', path: '/vue-quickstart' },
            { text: 'vue 实例创建示例', path: '/vue-instance' },
            { text: 'hello world', path: '/hello' },
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
  height: 100vh;
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
  text-transform: uppercase;
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