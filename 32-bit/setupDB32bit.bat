"C:\VNC32bit\vc_redist.x86.exe"
IF NOT EXIST "C:\Program Files\nodejs\node.exe" (
	"C:\VNC32bit\node-v8.11.1-x86.msi"
)
IF NOT EXIST "C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" (
	"C:\VNC32bit\mongodb-win32-i386-v3.2-latest-signed.msi"
)
IF NOT EXIST "C:\Program Files\Yarn\bin\yarn.cmd" (
	"C:\VNC32bit\yarn-1.3.2.msi"
)

call C:\VNC32bit\runadministrator.bat

IF NOT EXIST "C:\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\setup300032bit.vbs" (copy "C:\VNC32bit\setup300032bit.vbs" "C:\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\setup300032bit.vbs")
IF NOT EXIST "C:\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\setup696932bit.vbs" (copy "C:\VNC32bit\setup696932bit.vbs" "C:\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\setup696932bit.vbs")

echo Cai dat thanh cong, vui long restart may!!
PAUSE


