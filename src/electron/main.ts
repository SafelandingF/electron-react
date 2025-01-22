import {app , BrowserWindow } from 'electron'
import path from 'path'


app.on("ready", ()=>{
  const mainWindow = new BrowserWindow({})

// app.getAppPath() 获得当前应用的路径

  mainWindow.loadFile(path.join(app.getAppPath(),'dist-react','index.html'))
})