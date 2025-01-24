import { ipcMain, WebFrameMain } from "electron"
import { getUIPath } from "../pathResolver.js"
import { isDev } from "./env.js"
import { pathToFileURL } from "url"

export const ipcMainHandle = <Key extends keyof EventPayLoadMapping>(
  key: Key,
  handler: () => EventPayLoadMapping[Key]
) => {
  ipcMain.handle(key,(event) => {
    validateEventFrame(event.senderFrame!)
    return handler()
  })
}

export const ipcWebContentsSend=<Key extends keyof EventPayLoadMapping>(
  key: Key,
  webContents: Electron.WebContents,
  payload: EventPayLoadMapping[Key]
)=>{
  webContents.send(key,payload)
}

//这里是安全选项
export const validateEventFrame = (frame: WebFrameMain) =>{
  if(isDev() && new URL(frame.url).host === 'localhost:1123'){
    return
  }
  if(frame.url !== pathToFileURL(getUIPath()).toString()){
    throw new Error('invalid frame')
  }
}