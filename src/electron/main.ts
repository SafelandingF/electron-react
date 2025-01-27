import {app , BrowserWindow ,Menu,Tray} from 'electron'

import { isDev } from './utils/env.js'
import { getStaticData, pollResource } from './utils/resourceManager.js'
import { getAssetsPath, getPreloadPath, getUIPath } from './pathResolver.js'
import { ipcMainHandle } from './utils/ipcHandle.js'
import { createTray } from './tray.js'
import path from 'path'
import { ipcMainOn } from './preload.cjs'


// Menu.setApplicationMenu(null)

app.on("ready", ()=>{
  const mainWindow = new BrowserWindow({
    webPreferences:{
      preload:getPreloadPath()
    },
    frame:false,
    icon:path.join(getAssetsPath(),'trayIcon.png') 
  })
  if(isDev()){
    mainWindow.loadURL('http://localhost:1123')
  } else{
    mainWindow.loadFile(getUIPath())
  }

  // ipcMainOn("sendFrameAction", (payload)=>{
  //   switch(payload){
  //     case "CLOSE": mainWindow.close();break;
  //     case "MINIMIZE": mainWindow.minimize();break;
  //     case "MAXIMIZE": mainWindow.maximize();break;
  //   }
  // })
  createTray(mainWindow)
  // createMenu(mainWindow)
  pollResource(mainWindow)
  ipcMainHandle('getStaticData',() => getStaticData())
  handleCloseEvents(mainWindow)
})


const handleCloseEvents =  (mainWindow:BrowserWindow)=>{
  let willClose = false
  mainWindow.on('close',(e)=>{
    if(willClose){
      return 
    }

    e.preventDefault()
    mainWindow.hide()
    if(app.dock){
      app.dock.hide()
    }
  })

  app.on('before-quit',()=>{
    willClose = true
  })

  mainWindow.on('show', ()=>{
    willClose = false
  })
}

 // handleGetStaticData(() => getStaticData())
// // 这里写的这一步是为了通过ts检测cb 的值
// const handleGetStaticData = (cb: ()=> StaticData) =>{
//   ipcMain.handle('getStaticData', cb)
// }