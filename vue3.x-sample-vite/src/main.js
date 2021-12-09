/* 
  1. 单独导入vue相关需要的函数或类，如：createApp 函数
      createApp 函数的作用是：创建 vue 的“单页面应用程序实例”
*/
import { createApp } from 'vue'
import router from './router'
import axios from 'axios'
/* 完整引入，如果对打包后的文件大小不是很在乎，那么使用完整导入会更方便。 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 2. 导入待渲染的组件，如：App.vue
import App from './App.vue'

/* 
  3. 调用 createApp 函数，创建 SPA 应用的实例，函数返回值是“单页面应用程序的实例”
      可以用一个常量进行接收，以为后续可以给vue实例增加注册其他插件
*/
const vueApp = createApp(App)

// 确保 _use_ 路由实例使
// 整个应用支持路由。
vueApp.use(router)
/* 
  在注册Element Plus时，你可以通过一个带有size和zIndex的全局配置对象来设置表单组件的默认尺寸，
  以及弹出式组件的zIndex，zIndex的默认值是2000。
*/
vueApp.use(ElementPlus, { size: 'small', zIndex: 3000 })

// 为 axios 配置请求的根路径
// axios.defaults.baseURL = 'https://www.xxx.com'
console.log(axios)
/* 
  将 axios 挂载为 vue 的全局自定义属性
  每个组件可以通过 this 直接访问到全局挂载的自定义属性
*/
vueApp.config.globalProperties.$http = axios

// 4. 调用 mount() 把 App 组件的模板结构，渲染到指定的 el 区域中，即指定 vue 实际要控制的区域
vueApp.mount('#app')
