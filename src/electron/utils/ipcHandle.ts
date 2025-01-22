import { ipcMain } from "electron"
import { getUIPath } from "../pathResolver.js"

export const ipcMainHandle = <Key extends keyof EventPayLoadMapping>(
  key: Key,
  handler: () => EventPayLoadMapping[Key]
) => {
  ipcMain.handle(key,(event) => {
    event.senderFrame?.url == getUIPath()
    handler()
  })
}

export const ipcWebContentsSend=<Key extends keyof EventPayLoadMapping>(
  key: Key,
  webContents: Electron.WebContents,
  payload: EventPayLoadMapping[key]
)=>{
  webContents.send(key,payload)
}


