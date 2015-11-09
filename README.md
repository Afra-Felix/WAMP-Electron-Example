# WAMP-Electron-Example

#Electron

Electron is a cross platfrom application framework using web technology.
Using Electron its possible to run an HTML5 Javascript application natively.

The below example is an attempt to run Javascript WAMP clients using Electron.

Download electron from http://electron.atom.io/.
Prebuild binaries available are here https://github.com/atom/electron/releases

Extract the zip file and run the electron application.

# WAMP Router
a WAMP router (crossbar / bonefish) should run at port 8080 using the realm 'crossbardemo'

#Backend
Run the python backend code, which submits an event periodically
```
$cd WAMP-Electron-Example/PythonBackend
$python backend.py
```
#Demo
There are two folders namely AutobahnExample and WampyExample. 
Each folder has a subfolder named 'app' which contains an application prepared for Electron. 
In order to run the application, drag the app folder and drop it in Electron IDE

