/* vue-router 示例页面路由 */
import RouterIndex from '@/views/RouterIndex'
import Home from '@/views/vue-router/Home'
import Movie from '@/views/vue-router/Movie'
import About from '@/views/vue-router/About'
import Tab1 from '@/views/vue-router/tabs/Tab1'
import Tab2 from '@/views/vue-router/tabs/Tab2'

export default [
  {
    path: '/vue-router-index',
    name: 'vue-router-index',
    component: RouterIndex,
    // 嵌套路由
    children: [
      /*
        每一个对象都是路由规则，声明路由的匹配规则
        path: 表示要匹配的 hash 地址
        component: 表示要渲染的路由组件
      */
      // redirect 路由重定向， 将 /vue-router-index 重定向跳转 /vue-router-index/home
      { path: '', redirect: 'home' },
      { path: 'home', component: Home },
      /*
        动态路由匹配
        1. 一个“路径参数”使用冒号 `:` 标记。当匹配到一个路由时，参数值会被设置到 `this.$route.params`，可以在每个组件内使用。
        也可以在一个路由中设置多段“路径参数”，对应的值都会设置到 `$route.params` 中

        2. 通过 props 属性，为路由规则开启 props 传参，直接将路径参数绑定到组件的 props 中
      */
      { path: 'movie/:id', component: Movie, props: true },
      {
        path: 'about',
        name: 'named-about',
        component: About,
        /*
          `children` 配置就是像 `routes` 配置一样的路由配置数组，所以可以嵌套多层路由
          再嵌套一层路由，子路由规则。
          默认子路由：如果 children 数组中，某个路由规则的 path 值为空字符串，则这条路由规则，叫做“默认子路由”
        */
        children: [
          {
            path: '',
            component: Tab1,
          },
          {
            path: 'tab2',
            component: Tab2,
          },
        ],
      },
    ],
  },
]
