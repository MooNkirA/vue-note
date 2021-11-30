<template>
  <div class="container">
    <h1>动态插槽名基础使用示例</h1>
    <hr />

    <div>
      <span
        v-for="(item, index) in tabs"
        :key="index"
        :class="['tab-button', { active: slotId === item.slotId }]"
        @click="changeTab(item.slotId)"
      >
        {{ item.name }}
      </span>
    </div>
    <hr />

    <NamedSlotComponent>
      <!-- 动态指令参数也可以用在 v-slot 上，来定义动态的插槽名 -->
      <template v-slot:[slotId]>
        <h3 style="text-align: center">
          v-slot 上使用动态指令参数来定义动态的插槽名，渲染到不同的槽位
        </h3>
      </template>
    </NamedSlotComponent>
  </div>
</template>

<script>
import NamedSlotComponent from '@/components/NamedSlotComponent'

export default {
  name: 'dynamic-slot-names',
  components: {
    NamedSlotComponent,
  },
  data() {
    return {
      tabs: [
        {
          name: '标题插槽',
          slotId: 'title',
        },
        {
          name: '默认插槽',
          slotId: 'default',
        },
        {
          name: '底部插槽',
          slotId: 'footer',
        },
      ],
      slotId: 'default',
    }
  },
  methods: {
    changeTab(tab) {
      this.slotId = tab
    },
  },
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