<template>
  <!-- 在页面中声明 vue 挂载点的 DOM 区域 -->
  <div id="app">
    <el-container>
      <el-header>{{ headerTitle }}</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            text-color="#fff"
            @open="handleOpen"
            router
            unique-opened
          >
            <el-sub-menu v-for="(c, idx) in contentList" :key="idx" :index="`${idx}`">
              <template #title>
                <span>{{ c.title }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="(item, index) in c.sampleList"
                  :key="idx + '-' + index"
                  :index="item.path"
                  @click="clickMenu(idx, item)"
                  >{{ item.text }}
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <!-- 页面内容渲染区域 -->
        <el-main>
          <h1 v-if="path !== ''" style="color: violet">{{ title }}</h1>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      path: '',
      // 内容列表
      contentList: [
        {
          title: '组件',
          sampleList: [
            { text: '自定义事件基础', path: '/custom-event-basic' },
            { text: '自定义事件 v-model 双向传递数据', path: '/custom-event-v-model' },
            { text: 'Provide / Inject 传递数据', path: '/provide-inject' },
            { text: 'Provide / Inject 适应性传递数据', path: '/provide-inject-reactive' },
          ],
        },
      ],
    }
  },
  created() {
    this.list = this.contentList.reduce((pv, cv) => {
      const { title, sampleList } = cv
      sampleList.forEach(element => {
        element['title'] = title
      })
      return [...pv, ...sampleList]
    }, [])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    clickMenu(index, menu) {
      // 获取当前路径
      this.path = this.$router.currentRoute.path
      // 滚动在顶部
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
  },
  computed: {
    // 当前点击的菜单
    menu() {
      return this.list.find(i => this.path === i.path) || {}
    },
    headerTitle() {
      return this.menu.title
    },
    title() {
      return this.menu.text
    },
  },
}
</script>

<style></style>
