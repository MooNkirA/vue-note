<template>
  <todo-input @add="onAddNewTask"></todo-input>
  <todo-list :list="tasklist" class="mt-2"></todo-list>
  <!-- 默认情况下，组件上的 v-model 使用 modelValue 作为 prop 和 update:modelValue 作为事件。 -->
  <todo-button v-model:active="activeBtnIndex"></todo-button>
</template>

<script>
// 导入 TodoList 组件
import TodoList from './components/todo-list/TodoList.vue'
// 导入 TodoInput 组件
import TodoInput from './components/todo-input/TodoInput.vue'
// 导入 TodoButton 组件
import TodoButton from './components/todo-button/TodoButton.vue'

export default {
  name: 'MyApp',
  components: { TodoList, TodoInput, TodoButton },
  data() {
    return {
      // 任务列表的数据
      todolist: [
        { id: 1, task: '周一早晨9点开会', done: false },
        { id: 2, task: '周一晚上8点聚餐', done: false },
        { id: 3, task: '准备周三上午的演讲稿', done: true },
      ],
      // 下一个可用的 Id
      nextId: 4,
      activeBtnIndex: 0,
      // 对应不同状态不同的筛选逻辑
      filterLogic: {
        0: x => true,
        1: x => x.done,
        2: x => !x.done,
      },
    }
  },
  computed: {
    tasklist() {
      return this.todolist.filter(this.filterLogic[this.activeBtnIndex])
    },
  },
  methods: {
    onAddNewTask(taskname) {
      this.todolist.push({
        id: this.nextId,
        task: taskname,
        done: false,
      })

      this.nextId++
    },
  },
}
</script>
