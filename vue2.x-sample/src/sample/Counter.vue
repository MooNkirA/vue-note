<template>
  <div id="app">
    <!-- 计数器 -->
    <div class="input-num">
      <button @click="sub">-</button>
      <span>{{ num }}</span>
      <button @click="add">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-counter',
  data() {
    return {
      num: 1,
      min: 0,
      max: 10,
    }
  },
  methods: {
    sub() {
      if (this.num > this.min) {
        this.num--
      } else {
        this.$message({
          message: '别点啦,到底啦',
          type: 'warning',
        })
      }
    },
    add() {
      if (this.num < this.max) {
        this.num++
      } else {
        this.$message({
          message: '别点啦,到头啦',
          type: 'warning',
        })
      }
    },
  },
}
</script>

<style scoped>
body {
  background-color: #f5f5f5;
}
#app {
  width: 480px;
  height: 80px;
  margin: 200px auto;
}
.input-num {
  margin-top: 20px;
  height: 100%;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 4px 4px 4px #adadad;
  border: 1px solid #c7c7c7;
  background-color: #c7c7c7;
}
.input-num button {
  width: 150px;
  height: 100%;
  font-size: 40px;
  color: #ad2a27;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
}
.input-num span {
  height: 100%;
  font-size: 40px;
  flex: 1;
  text-align: center;
  line-height: 80px;
  font-family: auto;
  background-color: white;
}
img {
  float: right;
  margin-top: 50px;
}
</style>
