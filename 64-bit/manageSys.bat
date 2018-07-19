@echo off
cd "C:\VNC64bit"
C:
:loop
portqry -n 127.0.0.1 -e 27017 >NUL && (
        echo : OK
        call C:\VNC64bit\start6969.bat
        pause
    ) || (
        echo : Error
        timeout /t 1 /nobreak
        goto loop
    )
pause
exit