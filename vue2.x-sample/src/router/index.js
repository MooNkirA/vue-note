/* 当前项目的路由模块 */
// 1. 如果使用模块化机制编程，导入Vue和VueRouter，用于调用 Vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Index from '@/pages/Index'

/* 导入不同模块的路由配置 */
import VueSampleModule from './vueSampleModule'
import CompositiveModule from './compositiveModule'
import VueRouterModule from './vueRouterModule'

// 2. 调用 Vue.use() 函数，将 VueRouter 安装成 Vue 的插件
Vue.use(VueRouter)

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
const routes = [
  // {
  //   path: '/',
  //   name: 'index',
  //   component: Index,
  // },
  ...VueSampleModule,
  ...CompositiveModule,
  ...VueRouterModule,
]

// 3. 创建路由的实例对象，在构造函数中传入 `routes` 配置或者其他配置参数。
const router = new VueRouter({
  routes,
})

/* 
  为 router 实例对象，声明全局前置导航守卫
  每次发生了路由导航的跳转，必然会触发 beforeEach 指定的 function 回调函数
  每个守卫方法接收三个参数：
    to: Route实例，即将要进入的目标路由对象
    from: Route实例，当前导航正要离开的路由
    next: Function类型，一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
        next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
        next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
        next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
        next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
*/
router.beforeEach((to, from, next) => {
  /* 可以完成一些业务逻辑 */
  // 确保 `next` 函数在任何给定的导航守卫中都被严格调用一次。如果不执行 next 函数，则不会进行任何路由的跳转
  next()
})

// 4. 通过 export default 对外共享此路由实例对象。在main.js文件引入，挂载到vue根实例中。
export default router
