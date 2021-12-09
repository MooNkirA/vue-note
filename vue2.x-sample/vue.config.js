/* 
  这个文件是 vue-cli 创建出来的项目的配置文件
  在 vue.config.js 这个配置文件中，可以对整个项目的打包、构建进行全局性的配置
  webpack 在进行打包的时候，底层用到了 node.js
  因此，在 vue.config.js 配置文件中，可以导入并使用 node.js 中的核心模块
*/
module.exports = {
  /* 
    关闭eslint
      取值类型: boolean | 'warning' | 'default' | 'error'
      默认值: 'default'

      设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
      如果希望让 lint 错误在开发时直接显示在浏览器中，可以使用 lintOnSave: 'default'。这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
      设置为 error 将会使得 eslint-loader 把 lint 警告也输出为编译错误，这意味着 lint 警告将会导致编译失败。
  */
  lintOnSave: false,
}
