/* 
  1. 单独导入vue相关需要的函数或类，如：createApp 函数
      createApp 函数的作用是：创建 vue 的“单页面应用程序实例”
*/
import { createApp } from 'vue'
import router from './router'
import axios from 'axios'

// 2. 导入待渲染的组件，如：App.vue
import App from './App.vue'

// 导入一些全局的样式
// import './index.css'

/* 
  3. 调用 createApp 函数，创建 SPA 应用的实例，函数返回值是“单页面应用程序的实例”
      可以用一个常量进行接收，以为后续可以给vue实例增加注册其他插件
*/
const vueApp = createApp(App)

// 确保 _use_ 路由实例使
// 整个应用支持路由。
vueApp.use(router)

// 为 axios 配置请求的根路径
axios.defaults.baseURL = 'https://www.xxx.com'
/* 
  将 axios 挂载为 vue 的全局自定义属性
  每个组件可以通过 this 直接访问到全局挂载的自定义属性
*/
vueApp.config.globalProperties.$http = axios

// 4. 调用 mount() 把 App 组件的模板结构，渲染到指定的 el 区域中，即指定 vue 实际要控制的区域
vueApp.mount('#app')
