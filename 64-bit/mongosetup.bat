if not exist "c:\mongodb\logs" mkdir c:\mongodb\logs
if not exist "c:\mongodb\data\db" mkdir c:\mongodb\data\db
C:
cd "C:\Program Files\MongoDB\Server\3.4\bin"
mongod.exe --remove
mongod.exe --logpath c:\mongodb\logs\mongo.log --dbpath c:\mongodb\data\db --directoryperdb --install
net start MongoDB
pause

