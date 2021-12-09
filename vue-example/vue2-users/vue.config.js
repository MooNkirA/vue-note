module.exports = {
  devServer: {
    port: 3000,
    open: false, // 设置本地开发不自动打开
    proxy: 'https://www.escook.cn',
  },
}
