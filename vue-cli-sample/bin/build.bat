@echo off
echo.
echo [��Ϣ] ��� Vue ʾ�����̣�����dist�ļ���
echo.

%~d0
cd %~dp0

cd ..
npm run build

pause