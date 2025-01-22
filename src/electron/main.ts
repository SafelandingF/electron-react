import {app , BrowserWindow } from 'electron'
import path from 'path'
import { isDev } from './utils/env.js'
import { pollResource } from './utils/resourceManager.js'
import { getPreloadPath } from './pathResolver.js'

app.on("ready", ()=>{
  const mainWindow = new BrowserWindow({
    webPreferences:{
      preload:getPreloadPath()
    }
  })
  if(isDev()){
    mainWindow.loadURL('http://localhost:1123')
  } else{
    // app.getAppPath() 获得当前应用的路径
    mainWindow.loadFile(path.join(app.getAppPath(),'dist-react','index.html'))
  }
  pollResource()
})