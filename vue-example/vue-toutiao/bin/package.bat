@echo off
echo.
echo [��Ϣ] ��װ Vue ʾ����������������node_modules�ļ���
echo.

%~d0
cd %~dp0

cd ..
npm install --registry=https://registry.npm.taobao.org

pause