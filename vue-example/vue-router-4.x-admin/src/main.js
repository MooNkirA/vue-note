import { createApp } from 'vue'
import App from './App.vue'

// 导入 bootstrap 样式表
import './assets/css/bootstrap.css'
// 导入全局自定义样式表
import './index.css'

// 导入路由
import router from './router'

// 创建 Vue 实例
const app = createApp(App)

app.use(router)

// 挂载到指定的待渲染区域
app.mount('#app')
