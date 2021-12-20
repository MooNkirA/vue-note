<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <p>
      输入a:
      <input v-model.lazy="a" />
    </p>
    <p>
      输入b:
      <input v-model.lazy="b" />
    </p>
    <p>
      输入 c 的 text:
      <input v-model.lazy="c.text" />
      选择 c 的 selected:
      <select v-model.lazy="c.selected">
        <option disabled value="">请选择</option>
        <option>MooN</option>
        <option>Zero</option>
        <option>kirA</option>
      </select>
    </p>
    <p>
      输入d:
      <input v-model.lazy="d" />
    </p>
    <p>
      输入e.f.g:
      <input v-model.lazy="e.f.g" />
    </p>
    <p>
      输入h:
      <input v-model.lazy="h" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'vue-watch-option',
  data() {
    return {
      a: 1,
      b: 2,
      c: {},
      d: 4,
      e: {
        f: {
          g: 5,
        },
      },
      h: 6,
      code: `
        watch: {
          // 侦听器定义方式1：函数
          a(newVal, oldVal) {
            console.log('侦听器定义方式1：函数')
            console.log('新值 ==> ', newVal)
            console.log('旧值 ==> ', oldVal)
          },
          // 侦听器定义方式2：函数名称
          b: 'changeValue',
          c: {
            handler(newVal, oldVal) {
              console.log('侦听器定义方式3：选项的对象。设置 deep 项目控制')
              console.log('新值 ==> ', JSON.stringify(newVal))
              console.log('旧值 ==> ', JSON.stringify(oldVal))
            },
            // 如果 watch 侦听的是一个对象，如果对象中的属性值发生了变化，则无法被监听到。此时需要使用 deep 选项
            // deep 选项作用是：开启深度监听，只要对象中任何一个属性变化了，都会触发“对象的侦听器”。默认值是 false
            deep: true,
          },
          d: {
            handler: function (newVal, oldVal) {
              console.log(
                '侦听器定义方式3：选项的对象。设置 immediate 选项控制侦听器加载时自动触发一次！'
              )
              console.log('新值 ==> ', newVal)
              console.log('旧值 ==> ', oldVal)
            },
            // immediate 选项的作用是：控制侦听器是否自动触发一次！默认值是 false
            // 默认情况下，组件在初次加载完毕后不会调用 watch 侦听器。如果想让 watch 侦听器立即被调用，则需要使用 immediate 选项。
            immediate: true,
          },
          // 如果要侦听的是对象的子属性的变化，则必须包裹一层单引号
          'e.f': {
            handler(newVal, oldVal) {
              console.log(
                '侦听器定义方式4：如果要侦听的是对象的子属性的变化，则必须包裹一层单引号'
              )
              console.log('新值 ==> ', JSON.stringify(newVal))
              console.log('旧值 ==> ', JSON.stringify(oldVal))
            },
            deep: true,
          },
          // 回调数组，它们会被逐一调用
          h: [
            'changeValue',
            function (newVal, oldVal) {
              console.log('侦听器定义方式1：函数')
              console.log('新值 ==> ', newVal)
              console.log('旧值 ==> ', oldVal)
            },
            {
              handler(newVal, oldVal) {
                console.log('侦听器定义方式3：选项的对象')
                console.log('新值 ==> ', newVal)
                console.log('旧值 ==> ', oldVal)
              },
            },
          ],
        },
        methods: {
          changeValue(newVal, oldVal) {
            console.log('侦听器定义方式2：函数名称')
            console.log('新值 ==> ', newVal)
            console.log('旧值 ==> ', oldVal)
          },
        },
      `,
    }
  },
  created() {},
  watch: {
    // 侦听器定义方式1：函数
    a(newVal, oldVal) {
      console.log('侦听器定义方式1：函数')
      console.log('新值 ==> ', newVal)
      console.log('旧值 ==> ', oldVal)
    },
    // 侦听器定义方式2：函数名称
    b: 'changeValue',
    c: {
      handler(newVal, oldVal) {
        console.log('侦听器定义方式3：选项的对象。设置 deep 项目控制')
        console.log('新值 ==> ', JSON.stringify(newVal))
        console.log('旧值 ==> ', JSON.stringify(oldVal))
      },
      // 如果 watch 侦听的是一个对象，如果对象中的属性值发生了变化，则无法被监听到。此时需要使用 deep 选项
      // deep 选项作用是：开启深度监听，只要对象中任何一个属性变化了，都会触发“对象的侦听器”。默认值是 false
      deep: true,
    },
    d: {
      handler: function (newVal, oldVal) {
        console.log(
          '侦听器定义方式3：选项的对象。设置 immediate 选项控制侦听器加载时自动触发一次！'
        )
        console.log('新值 ==> ', newVal)
        console.log('旧值 ==> ', oldVal)
      },
      // immediate 选项的作用是：控制侦听器是否自动触发一次！默认值是 false
      // 默认情况下，组件在初次加载完毕后不会调用 watch 侦听器。如果想让 watch 侦听器立即被调用，则需要使用 immediate 选项。
      immediate: true,
    },
    // 如果要侦听的是对象的子属性的变化，则必须包裹一层单引号
    'e.f': {
      handler(newVal, oldVal) {
        console.log(
          '侦听器定义方式4：如果要侦听的是对象的子属性的变化，则必须包裹一层单引号'
        )
        console.log('新值 ==> ', JSON.stringify(newVal))
        console.log('旧值 ==> ', JSON.stringify(oldVal))
      },
      deep: true,
    },
    // 回调数组，它们会被逐一调用
    h: [
      'changeValue',
      function (newVal, oldVal) {
        console.log('侦听器定义方式1：函数')
        console.log('新值 ==> ', newVal)
        console.log('旧值 ==> ', oldVal)
      },
      {
        handler(newVal, oldVal) {
          console.log('侦听器定义方式3：选项的对象')
          console.log('新值 ==> ', newVal)
          console.log('旧值 ==> ', oldVal)
        },
      },
    ],
  },
  methods: {
    changeValue(newVal, oldVal) {
      console.log('侦听器定义方式2：函数名称')
      console.log('新值 ==> ', newVal)
      console.log('旧值 ==> ', oldVal)
    },
  },
}
</script>

<style>
</style>