@echo off
echo.
echo [信息] 打包 Vue 示例工程，生成dist文件。
echo.

%~d0
cd %~dp0

cd ..
npm run build

pause