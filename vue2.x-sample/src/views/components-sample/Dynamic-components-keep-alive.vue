<template>
  <div class="container">
    <h1 style="text-align: center">动态组件使用 keep-alive 示例</h1>
    <hr />

    <div>
      <span
        v-for="(item, index) in tabs"
        :key="index"
        :class="['tab-button', { active: componentId === item.componentId }]"
        @click="changeTab(item.componentId)"
      >
        {{ item.name }}
      </span>
    </div>

    <div>
      <!--
          <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
          <keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。
          当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。

          标签参数props：
            include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
            exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
            max - 数字。最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。
          注意：尽量不要同时使用 include 和 exclude 这两个属性。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示。
          匹配值首先检查组件自身的 `name` 选项，如果 `name` 选项不可用，则匹配它的局部注册名称 (父组件 `components` 选项的键值)。匿名组件不能被匹配。
      -->
      <!-- <keep-alive
        include="RightComponent,LeftComponent"
        exclude="lifecycleComponent"
        max="2"
      > -->
      <keep-alive>
        <!--
            component 标签是 vue 内置的组件，作用是作为组件的占位符
            is 属性的值，表示要渲染的组件的名字
            注意：is 属性的值是组件定义的 name 属性值，如果组件无定义 name 值，则以注册的名称为准
        -->
        <component :is="componentId"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import LifecycleComponent from '@/components/LifecycleComponent'
import LeftComponent from '@/components/LeftComponent'
import RightComponent from '@/components/RightComponent'

export default {
  name: 'dynamic-components-keep-alive',
  components: {
    // 如果在“声明组件”的时候，该组件没有指定 name 名称，则组件的名称默认就是“注册时候的名称”
    LifecycleComponent,
    LeftComponent,
    RightComponent,
  },
  data() {
    return {
      tabs: [
        {
          name: 'LifecycleComponent',
          componentId: 'lifecycleComponent',
        },
        {
          name: 'LeftComponent',
          componentId: 'LeftComponent',
        },
        {
          name: 'RightComponent',
          componentId: 'RightComponent',
        },
      ],
      componentId: 'lifecycleComponent',
    }
  },
  methods: {
    changeTab(tab) {
      this.componentId = tab
    },
  },
}
</script>

<style scoped>
.container {
  background-color: pink;
  border: 2px solid red;
}
.container > div > span {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: #e0e0e0;
}

.container > div:last-child {
  width: 70%;
  margin: 10px auto;
}
</style>