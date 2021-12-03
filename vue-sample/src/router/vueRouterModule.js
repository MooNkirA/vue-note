/* vue-router 示例页面路由 */
import RouterIndex from '@/pages/RouterIndex'
import Home from '@/components/vueRouter/Home'
import Movie from '@/components/vueRouter/Movie'
import About from '@/components/vueRouter/About'
import Tab1 from '@/components/vueRouter/tabs/Tab1'
import Tab2 from '@/components/vueRouter/tabs/Tab2'

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
      { path: 'movie', component: Movie },
      {
        path: 'about',
        component: About,
        // 再嵌套一层路由
        children: [
          {
            path: 'tab1',
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
