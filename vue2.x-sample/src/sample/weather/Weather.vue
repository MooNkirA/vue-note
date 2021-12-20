<template>
  <div class="wrap" id="weather-app">
    <div class="search_form">
      <div class="logo"><img src="./images/logo.png" alt="logo" /></div>
      <div class="form_group">
        <input
          type="text"
          class="input_txt"
          placeholder="请输入查询的天气"
          v-model="city"
          @keyup.enter="queryWeather"
        />
        <button class="input_sub" @click="queryWeather">搜 索</button>
      </div>
      <div class="hotkey">
        <a
          href="javascript:;"
          v-for="(city, index) in hotCitys"
          @click="clickSearch(city)"
          :key="index"
        >
          {{ city }}
        </a>
      </div>
    </div>
    <ul class="weather_list">
      <li
        v-for="(item, index) in forecastList"
        :key="item.date"
        :style="{ transitionDelay: index * 100 + 'ms' }"
      >
        <div class="info_type">
          <span class="iconfont">{{ item.type }}</span>
        </div>
        <div class="info_temp">
          <b>{{ item.low }}</b>
          ~
          <b>{{ item.high }}</b>
        </div>
        <div class="info_date">
          <span>{{ item.date }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'demo-weather',
  data() {
    return {
      city: '广州',
      forecastList: [],
      hotCitys: ['北京', '上海', '广州', '深圳'],
    }
  },
  methods: {
    queryWeather() {
      /*
        请求地址:http://wthrcdn.etouch.cn/weather_mini
        请求方法:get
        请求参数:city(城市名)
        响应内容:天气信息

        1. 点击回车
        2. 查询数据
        3. 渲染数据
      */
      this.forecastList = []
      axios
        .get(`http://wthrcdn.etouch.cn/weather_mini?city=${this.city}`)
        .then(res => {
          console.log(res)
          this.forecastList = res.data.data.forecast
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          console.log('')
        })
    },
    clickSearch(city) {
      this.city = city
      this.queryWeather()
    },
  },
}
</script>

<style scoped>
@import './css/reset.css';
@import './css/weather.css';
</style>
