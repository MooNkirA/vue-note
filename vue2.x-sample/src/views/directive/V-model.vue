<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <p>文本框输入内容: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
    <hr />

    <span>多行文本框输入内容:</span>
    <p style="white-space: pre-line">{{ multilineMessage }}</p>
    <textarea
      v-model="multilineMessage"
      placeholder="add multiple lines"
    ></textarea>
    <hr />

    <span>单个复选框，绑定到布尔值：</span>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

    <p>多个复选框，绑定到同一个数组:</p>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <p>Checked names: {{ checkedNames }}</p>
    <hr />

    <p>单选按钮：</p>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <p>Picked: {{ picked }}</p>
    <hr />

    <p>单选选择框：</p>
    <select v-model="selected">
      <!-- 
          如果 v-model 表达式的初始值未能匹配任何选项，<select> 元素将被渲染为“未选中”状态。
          在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。
          因此，更推荐像上面这样提供一个值为空的禁用选项。
       -->
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <p>Selected: {{ selected }}</p>

    <p>多选时 (绑定到一个数组)：</p>
    <select v-model="multiSelected" multiple style="width: 50px">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <p>Selected: {{ multiSelected }}</p>
  </div>
</template>

<script>
export default {
  name: 'v-model',
  data() {
    return {
      message: '',
      multilineMessage: '',
      checked: false,
      checkedNames: [],
      picked: null,
      selected: '',
      multiSelected: [],
      code: `
        <p>文本框输入内容: {{ message }}</p>
        <input v-model="message" placeholder="edit me" />
        <hr />

        <span>多行文本框输入内容:</span>
        <p style="white-space: pre-line">{{ multilineMessage }}</p>
        <textarea
          v-model="multilineMessage"
          placeholder="add multiple lines"
        ></textarea>
        <hr />

        <span>单个复选框，绑定到布尔值：</span>
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>

        <p>多个复选框，绑定到同一个数组:</p>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="mike">Mike</label>
        <p>Checked names: {{ checkedNames }}</p>
        <hr />

        <p>单选按钮：</p>
        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>
        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>
        <p>Picked: {{ picked }}</p>
        <hr />

        <p>单选选择框：</p>
        <select v-model="selected">
          <!-- 
              如果 v-model 表达式的初始值未能匹配任何选项，<select> 元素将被渲染为“未选中”状态。
              在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。
              因此，更推荐像上面这样提供一个值为空的禁用选项。
          -->
          <option disabled value="">请选择</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <p>Selected: {{ selected }}</p>

        <p>多选时 (绑定到一个数组)：</p>
        <select v-model="multiSelected" multiple style="width: 50px">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <p>Selected: {{ multiSelected }}</p>
      `,
    }
  },
  created() {},
}
</script>

<style>
</style>