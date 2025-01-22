import {app , BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import { isDev } from './utils/env.js'
import { getStaticData, pollResource } from './utils/resourceManager.js'
import { getPreloadPath, getUIPath } from './pathResolver.js'
import { ipcMainHandle } from './utils/ipcHandle.js'

app.on("ready", ()=>{
  const mainWindow = new BrowserWindow({
    webPreferences:{
      preload:getPreloadPath()
    }
  })
  if(isDev()){
    mainWindow.loadURL('http://localhost:1123')
  } else{
    mainWindow.loadFile(getUIPath())
  }
  pollResource(mainWindow)
  ipcMainHandle('getStaticData',() => getStaticData())
  // handleGetStaticData(() => getStaticData())
})

// // 这里写的这一步是为了通过ts检测cb 的值
// const handleGetStaticData = (cb: ()=> StaticData) =>{
//   ipcMain.handle('getStaticData', cb)
// }