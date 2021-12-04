/* 
  这个文件是 vue-cli 创建出来的项目的配置文件
  在 vue.config.js 这个配置文件中，可以对整个项目的打包、构建进行全局性的配置
  webpack 在进行打包的时候，底层用到了 node.js
  因此，在 vue.config.js 配置文件中，可以导入并使用 node.js 中的核心模块
*/
const path = require('path')
const themePath = path.join(__dirname, './src/assets/theme.less')

module.exports = {
  /* 
    默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
    这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
  */
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 方式1：直接覆盖变量(此方式因修改配置，所以每次修改都需要重启服务，不推荐)
          // 'nav-bar-background-color': 'red',
          // 方式2：可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${themePath}";`,
        },
      },
    },
  },
}
