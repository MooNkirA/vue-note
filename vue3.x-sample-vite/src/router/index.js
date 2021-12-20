/* 当前项目的路由模块 */
// 1. 如果使用模块化机制编程，导入VueRouter，用于调用 Vue.use(VueRouter)
import { createRouter, createWebHashHistory } from 'vue-router'

import CustomEventBasic from '../views/custom-event/CustomEventBasic.vue'
import CustomEventVmodel from '../views/custom-event/CustomEventVmodel.vue'
import ProvideInject from '../views/provide-inject/ProvideInject.vue'
import ProvideInjectReactive from '../views/provide-inject/ProvideInjectReactive.vue'

// 2. 创建路由的实例对象，在构造函数中传入 `routes` 配置或者其他配置参数。
const router = createRouter({
  history: createWebHashHistory(),
  /* 
    routes 选项数组，主要用于配置 “url（hash 地址）” 与 “组件” 的映射关系
    routes 接受类型：RouteRecordRaw[]
      RouteRecordRaw
        当用户通过 routes option 或者 router.addRoute() 来添加路由时，可以得到路由记录。 有三种不同的路由记录:
          单一视图记录：有一个 component 配置
          多视图记录 (命名视图) ：有一个 components 配置
          重定向记录：没有 component 或 components 配置，因为重定向记录永远不会到达。
        
        path
          类型：string
          详细内容：
            记录的路径。应该以 / 开头，除非该记录是另一条记录的子记录。可以定义参数：/users/:id 匹配 /users/1 以及 /users/posva。

        redirect
          类型：RouteLocationRaw | (to: RouteLocationNormalized) => RouteLocationRaw (可选)
          详细内容：
            如果路由是直接匹配的，那么重定向到哪里呢。重定向发生在所有导航守卫之前，并以新的目标位置触发一个新的导航。也可以是一个接收目标路由地址并返回我们应该重定向到的位置的函数。

        children
          类型：RouteRecordRaw 数组 (可选)
          详细内容：
            当前记录的嵌套路由。

        alias
          类型：string | string[] (可选)
          详细内容：
            路由的别名。允许定义类似记录副本的额外路由。这使得路由可以简写为像这种 /users/:id 和 /u/:id。 所有的 alias 和 path 值必须共享相同的参数。

        name
          类型：string | symbol (可选)
          详细内容：
            路由记录独一无二的名称。

        beforeEnter
          类型：NavigationGuard | NavigationGuard[] (可选)
          详细内容：
            在进入特定于此记录的守卫之前。注意如果记录有重定向属性，则 beforeEnter 无效。

        props
          类型：boolean | Record<string, any> | (to: RouteLocationNormalized) => Record<string, any> (可选)
          详细内容：
            允许将参数作为 props 传递给由 router-view 渲染的组件。当传递给一个多视图记录时，它应该是一个与组件具有相同键的对象，或者是一个应用于每个组件的布尔值。

        meta
          类型：RouteMeta (可选)
          详细内容：
            在记录上附加自定义数据。
  */
  routes: [
    {
      path: '/custom-event-basic',
      name: CustomEventBasic.name,
      component: CustomEventBasic,
    },
    {
      path: '/custom-event-v-model',
      name: CustomEventVmodel.name,
      component: CustomEventVmodel,
    },
    {
      path: '/provide-inject',
      name: ProvideInject.name,
      component: ProvideInject,
    },
    {
      path: '/provide-inject-reactive',
      name: ProvideInjectReactive.name,
      component: ProvideInjectReactive,
    },
  ],
})

// 4. 通过 export default 对外共享此路由实例对象。在main.js文件引入，挂载到vue根实例中。
export default router
