"C:\VNC64bit\vc_redist.x64.exe"

IF NOT EXIST "C:\Program Files\nodejs\node.exe" (
	"C:\VNC64bit\node-v6.11.0-x64.msi"
)
IF NOT EXIST "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" (
	"C:\VNC64bit\mongodb-win32-x86_64-2008plus-ssl-3.4.10-signed.msi"
)
IF NOT EXIST "C:\Program Files (x86)\Yarn\bin\yarn.cmd" (
	"C:\VNC64bit\yarn-1.3.2.msi"
)

call C:\VNC64bit\runadministrator.bat
IF NOT EXIST "C:\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\start6969.vbs" ( copy "C:\VNC64bit\start6969.vbs" "C:\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\start6969.vbs")
IF NOT EXIST "C:\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\start3000.vbs" ( copy "C:\VNC64bit\start3000.vbs" "C:\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\start3000.vbs")


echo Cai dat thanh cong, vui long restart may!!
PAUSE


