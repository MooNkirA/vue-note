<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <p>v-for 基于一个数组来渲染一个列表。循环的分隔符是 in 或者 of</p>
    <ul>
      <!-- 官方建议：只要用到了 v-for 指令，那么一定要绑定一个 key 属性
          而且尽量把 id 作为 key 的值
          官方对 key 的值类型，是有要求的：字符串或数字类型
          key 的值是千万不能重复的，否则会终端报错：Duplicate keys detected 
      -->
      <li v-for="(item, index) in items" :key="'A' + index">
        {{ item.message }} :: {{ index }}
      </li>
      <!-- 也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法： -->
      <li v-for="(item, index) of items" :key="'B' + index">
        {{ item.message }} :: {{ index }}
      </li>
    </ul>

    <p>v-for 遍历一个对象的 property，渲染列表</p>
    <!-- 
        第1个参数是对象的属性值；
        第2个的参数为 property 名称 (也就是键名)
        第3个的参数为索引
     -->
    <ul>
      <li v-for="(value, name, index) in obj" :key="name">
        属性值：{{ value }} | 属性名：{{ name }} | 索引值：{{ index }}
      </li>
    </ul>

    <p>在 v-for 可接受整数。在这种情况下，它会把模板重复对应次数：</p>
    <div>
      <span v-for="n in 10" :key="n">{{ n }} </span>
    </div>

    <p>在 template 标签上使用 v-for，用于循环渲染一段包含多个元素的内容</p>
    <ul>
      <template v-for="(item, index) in items">
        <li :key="'A' + index">{{ item.message }}</li>
        <li :key="'B' + index" style="color: red">{{ index }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'v-for',
  data() {
    return {
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      obj: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10',
      },
      code: `
        <p>v-for 基于一个数组来渲染一个列表。循环的分隔符是 in 或者 of</p>
        <ul>
          <!-- 官方建议：只要用到了 v-for 指令，那么一定要绑定一个 key 属性
              而且尽量把 id 作为 key 的值
              官方对 key 的值类型，是有要求的：字符串或数字类型
              key 的值是千万不能重复的，否则会终端报错：Duplicate keys detected 
          -->
          <li v-for="(item, index) in items" :key="'A' + index">
            {{ item.message }} :: {{ index }}
          </li>
          <!-- 也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法： -->
          <li v-for="(item, index) of items" :key="'B' + index">
            {{ item.message }} :: {{ index }}
          </li>
        </ul>

        <p>v-for 遍历一个对象的 property，渲染列表</p>
        <!-- 
            第1个参数是对象的属性值；
            第2个的参数为 property 名称 (也就是键名)
            第3个的参数为索引
        -->
        <ul>
          <li v-for="(value, name, index) in obj" :key="name">
            属性值：{{ value }} | 属性名：{{ name }} | 索引值：{{ index }}
          </li>
        </ul>

        <p>在 v-for 可接受整数。在这种情况下，它会把模板重复对应次数：</p>
        <div>
          <span v-for="n in 10" :key="n">{{ n }} </span>
        </div>

        <p>在 template 标签上使用 v-for，用于循环渲染一段包含多个元素的内容</p>
        <ul>
          <template v-for="(item, index) in items">
            <li :key="'A' + index">{{ item.message }}</li>
            <li :key="'B' + index" style="color: red">{{ index }}</li>
          </template>
        </ul>
      `,
    }
  },
  created() {},
}
</script>

<style scoped>
</style>