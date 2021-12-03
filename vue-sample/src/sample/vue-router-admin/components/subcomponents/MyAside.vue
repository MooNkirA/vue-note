<template>
  <div class="layout-aside-container">
    <!-- 左侧边栏列表 -->
    <ul class="user-select-none menu">
      <li v-for="(item, index) in menus" :key="index" class="menu-item">
        <router-link :to="item.to">{{ item.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyAside',
  data() {
    return {
      menus: [
        { to: '/vue-router-admin/home/users', label: '用户管理' },
        { to: '/vue-router-admin/home/rights', label: '权限管理' },
        { to: '/vue-router-admin/home/goods', label: '商品管理' },
        { to: '/vue-router-admin/home/orders', label: '订单管理' },
        { to: '/vue-router-admin/home/settings', label: '系统设置' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.layout-aside-container {
  width: 250px;
  height: 100%;
  border-right: 1px solid #eaeaea;
}

.menu {
  list-style-type: none;
  padding: 0;
  .menu-item {
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover {
      background-color: #efefef;
      cursor: pointer;
    }
    a {
      display: block;
      color: black;
      padding-left: 30px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

// 设置路由高亮效果
.router-link-active {
  background-color: #efefef;
  box-sizing: border-box;
  position: relative;
  // 伪元素实现路由高亮效果
  &::before {
    content: ' ';
    display: block;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #42b983;
  }
}
</style>
