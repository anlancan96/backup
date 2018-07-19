echo off
cd "C:\VNC32bit"
C:
:loop
portqry -n 127.0.0.1 -e 27017 >NUL && (
        echo : OK
        call C:\VNC32bit\app.exe
        pause
    ) || (
        echo : Error
        timeout /t 1 /nobreak
        goto loop
    )
pause
exit