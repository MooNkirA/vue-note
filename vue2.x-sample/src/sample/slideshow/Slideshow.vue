<template>
  <div id="mask">
    <div class="center">
      <h2 class="title"><img src="./images/logo.jpg" alt="" /> 动漫壁纸</h2>
      <img :src="imgList[index]" alt="" />
      <a href="javascript:void(0)" @click="prev" class="left" v-show="index > 0">
        <img src="./images/prev.png" alt="" />
      </a>
      <a href="javascript:void(0)" @click="next" class="right" v-show="index < imgList.length - 1">
        <img src="./images/next.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-slideshow',
  data() {
    return {
      imgList: [
        require('./images/01.jpg'),
        require('./images/02.jpg'),
        require('./images/03.jpg'),
        require('./images/04.jpg'),
        require('./images/05.jpg'),
        require('./images/06.png'),
        require('./images/07.jpg'),
        require('./images/08.png'),
        require('./images/09.jpg'),
        require('./images/10.jpg'),
        require('./images/11.jpg'),
        require('./images/12.png'),
        require('./images/13.jpg'),
        require('./images/14.jpg'),
        require('./images/15.jpg'),
      ],
      index: 0,
    }
  },
  created() {
    this.timer = setInterval(() => {
      let temp = this.index + 1

      if (temp > this.imgList.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
    }, 2000)
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer)
  },
  methods: {
    // 上一张
    prev() {
      this.index--
    },
    // 下一张
    next() {
      this.index++
    },
  },
}
</script>

<style scoped>
#mask {
  width: 100%;
  height: 80%;
}

#mask {
  background-color: #c9c9c9;
  position: relative;
}

#mask .center {
  position: absolute;
  background-color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
}
#mask .center .title {
  position: absolute;
  display: flex;
  align-items: center;
  height: 56px;
  top: -61px;
  left: 0;
  padding: 5px;
  padding-left: 10px;
  padding-bottom: 0;
  color: rgba(175, 47, 47, 0.8);
  font-size: 26px;
  font-weight: normal;
  background-color: white;
  padding-right: 50px;
  z-index: 2;
}
#mask .center .title img {
  height: 40px;
  margin-right: 10px;
}

#mask .center .title::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 65px solid;
  border-color: transparent transparent white;
  top: -65px;
  right: -65px;
  z-index: 1;
}

#mask .center > img {
  display: block;
  width: 700px;
  height: 458px;
}

#mask .center a {
  text-decoration: none;
  width: 45px;
  height: 100px;
  position: absolute;
  top: 179px;
  vertical-align: middle;
  opacity: 0.5;
}
#mask .center a :hover {
  opacity: 0.8;
}

#mask .center .left {
  left: 15px;
  text-align: left;
  padding-right: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

#mask .center .right {
  right: 15px;
  text-align: right;
  padding-left: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
</style>
