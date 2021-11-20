@echo off
echo.
echo [信息] 安装 Vue 示例工程依赖，生成node_modules文件。
echo.

%~d0
cd %~dp0

cd ..
npm install --registry=https://registry.npm.taobao.org

pause