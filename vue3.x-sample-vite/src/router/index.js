/* 当前项目的路由模块 */
// 1. 如果使用模块化机制编程，导入VueRouter，用于调用 Vue.use(VueRouter)
import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '../views/Index.vue'

// 2. 创建路由的实例对象，在构造函数中传入 `routes` 配置或者其他配置参数。
const router = createRouter({
  history: createWebHashHistory(),
  /* 
    routes 选项数组，主要用于配置 “url（hash 地址）” 与 “组件” 的映射关系
    routes 接受类型：Array<RouteConfig>
    RouteConfig 的类型定义：
      interface RouteConfig = {
        path: string, // 路由url
        component?: Component, // 组件实例
        name?: string, // 命名路由
        components?: { [name: string]: Component }, // 命名视图组件
        redirect?: string | Location | Function,
        props?: boolean | Object | Function,
        alias?: string | Array<string>,
        children?: Array<RouteConfig>, // 嵌套路由
        beforeEnter?: (to: Route, from: Route, next: Function) => void,
        meta?: any,

        // 2.6.0+
        caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
        pathToRegexpOptions?: Object // 编译正则的选项
      }
  */
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
  ],
})

// 4. 通过 export default 对外共享此路由实例对象。在main.js文件引入，挂载到vue根实例中。
export default router
