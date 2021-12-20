<template>
  <div class="container">
    <h1>我是父组件</h1>
    <hr />

    <div>
      <span>propA：</span>
      <input type="text" v-model.number="propA" />
    </div>
    <div>
      <span>propB：</span>
      <input type="text" v-model="propB" />
    </div>
    <div>
      <span>propC：</span>
      <input type="text" v-model="propC" />
    </div>
    <div>
      <span>propD：</span>
      <input type="text" v-model.number="propD" />
    </div>
    <div>
      <span>propE：</span>
      <button @click="updateNum">点击更新次数</button>
    </div>
    <div>
      <span>propF：</span>
      <select v-model="propF">
        <option disabled value="">请选择</option>
        <option>success</option>
        <option>warning</option>
        <option>danger</option>
      </select>
    </div>

    <hr />
    <!-- 组件的基础 props 使用。
        因为组件实例创建之前进行验证，所以实例中 data 、computed 都不能使用。
        为了使 prop 首次校验通过，所以以下给了默认值
     -->
    <PropsCheckComponent
      :prop-a="propA || 0"
      :prop-b="propB || '0'"
      :prop-c="propC || '默认值'"
      :prop-d="propD"
      :prop-e="propE || {}"
      :prop-f="propF || 'success'"
    ></PropsCheckComponent>
  </div>
</template>

<script>
import PropsCheckComponent from '@/components/PropsCheckComponent'

export default {
  name: 'components-props-check',
  components: {
    PropsCheckComponent,
  },
  data() {
    return {
      count: 0,
      propA: null,
      propB: null,
      propC: '',
      propD: null,
      propE: {},
      propF: '',
    }
  },
  methods: {
    updateNum() {
      this.propE = { num: ++this.count }
    },
  },
}
</script>

<style>
.container {
  background-color: pink;
  border: 2px solid red;
}
</style>