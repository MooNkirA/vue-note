import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

// 导入样式
import './assets/css/bootstrap.css'
import './index.css'

const app = createApp(App)

// 绑定 axios 到 vue 做为全局变量
axios.defaults.baseURL = 'https://www.escook.cn'
app.config.globalProperties.$http = axios

app.mount('#app')
