<template>
  <div class="container">
    <h1 style="text-align: center">动态组件示例</h1>
    <hr />

    <div>
      <span
        v-for="(item, index) in tabs"
        :key="index"
        :class="['tab-button', { active: currentCom === item.componentId }]"
        @click="changeTab(item.componentId)"
      >
        {{ item.name }}
      </span>
    </div>

    <div>
      <!-- 
          component 标签是 vue 内置的组件，作用是作为组件的占位符
          is 属性的值，表示要渲染的组件的名字
          注意：is 属性的值是组件定义的 name 属性值，如果组件无定义 name 值，则以注册的名称为准

          这种动态组件的缺点是，切换到不同的组件时，Vue 都创建了一个新的组件实例，所以本来一些组件的状态与数据都会被重置
       -->
      <component :is="currentCom"></component>
    </div>
  </div>
</template>

<script>
import ButtonCounterDiffName from '@/components/ButtonCounter'
import LeftComponent from '@/components/LeftComponent'
import RightComponent from '@/components/RightComponent'

export default {
  name: 'dynamic-components',
  components: {
    // 如果在“声明组件”的时候，该组件没有指定 name 名称，则组件的名称默认就是“注册时候的名称”
    ButtonCounterDiffName,
    LeftComponent,
    RightComponent,
  },
  data() {
    return {
      tabs: [
        {
          name: 'ButtonCounter',
          componentId: 'ButtonCounterDiffName',
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
      currentCom: 'ButtonCounterDiffName',
    }
  },
  methods: {
    changeTab(tab) {
      this.currentCom = tab
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