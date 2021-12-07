<template>
  <div class="body">
    <template v-for="(c, idx) in contentList" :key="'t' + idx">
      <h2>{{ c.title }}</h2>
      <div class="container">
        <div class="button-wrapper" v-for="(item, index) in c.sampleList" :key="'c' + index">
          <div class="button" @click="jumpTo(item.path)">
            <span class="text">{{ item.text }}</span>
          </div>
        </div>
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
