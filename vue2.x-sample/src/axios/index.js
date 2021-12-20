import Vue from 'vue'
import axios from 'axios'

// 全局配置 axios 的请求根路径
axios.defaults.baseURL = 'http://localhost:38080'

/* 
  配置请求拦截器
  注意：失败的回调函数可以被省略！  
*/
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

/* 
  配置响应拦截器
  注意：失败的回调函数可以被省略！
*/
axios.interceptors.response.use(
  response => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  error => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 将 axios 挂载到 Vue.prototype 上，可以使每个 .vue 组件的实例通过 this.$http 来发起请求
Vue.prototype.$http = axios
// 不过通常不使用此种方式，一般都会封装一个专门发送http的js文件，然后在一些api文件中定义多种请求方法，
// 组件使用时引用不同的请求方法，从而达到 API 接口的复用
