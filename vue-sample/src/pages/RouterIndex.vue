<template>
  <div class="container">
    <h1>Vue Router 示例主组件</h1>
    <hr />

    <!-- 
        声明式导航
        当安装和配置了 vue-router 后，就可以使用 router-link 来替代普通的 a 链接了
        `<router-link>` 组件支持用户在具有路由功能的应用中 (点击) 导航。
          to 属性：表示目标路由的链接。当被点击后，内部会立刻把 `to` 的值传到 `router.push()`，所以这个值可以是一个字符串或者是描述目标位置的对象。
    -->
    <!-- <a href="#/home">首页</a> -->
    <router-link to="/vue-router-index/home">首页</router-link>
    <router-link to="/vue-router-index/movie">电影</router-link>
    <router-link to="/vue-router-index/about">关于</router-link>

    <hr />

    <!-- 
        只要在项目中安装和配置了 vue-router，就可以使用 router-view 这个组件了
        `<router-view>` 组件是一个 functional 组件，渲染路径匹配到的视图组件。
        `<router-view>` 渲染的组件还可以内嵌自己的 `<router-view>`，根据嵌套路径，渲染嵌套组件。
        它的作用很单纯：占位符

        它也是个组件，所以可以配合 `<transition>` 和 `<keep-alive>` 使用。如果两个结合一起用，要确保在内层使用 `<keep-alive>`。
      -->
    <router-view></router-view>

    <hr />
    <div>
      <button @click="$router.push('/')">返回示例项目主页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-router-index',
  data() {
    return {}
  },
  created() {},
}
</script>

<style scoped>
.container {
  background-color: pink;
  border: 2px solid red;
}
.container > h1 {
  text-align: center;
}
.container > div:last-of-type {
  margin: 10px 0;
  text-align: center;
}
</style>
