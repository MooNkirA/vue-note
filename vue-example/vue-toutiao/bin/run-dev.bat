@echo off
echo.
echo [信息] 运行 Vue 版高仿头条示例工程。
echo.

%~d0
cd %~dp0

cd ..
npm run serve

pause