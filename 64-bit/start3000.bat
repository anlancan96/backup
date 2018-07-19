@echo off
cd "C:\VNC64bit"
C:
:loop
portqry -n 127.0.0.1 -e 6969 >NUL && (
        echo : OK
        yarn start
        pause
    ) || (
        echo : Error
        timeout /t 1 /nobreak
        goto loop
    )
pause
exit