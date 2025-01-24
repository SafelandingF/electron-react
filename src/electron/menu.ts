import { app, BrowserWindow, Menu } from "electron";
import { isDev } from "./utils/env.js";
import { ipcWebContentsSend } from "./utils/ipcHandle.js";
export const createMenu = (mainWindow:BrowserWindow) =>{
  Menu.setApplicationMenu(
    Menu.buildFromTemplate([
      {
        label:' App',
        type:'submenu',
        submenu:[
          {
            label: 'Quit',
            click: () => app.quit()
          },
          {
            label:'DevTools',
            click: () => mainWindow.webContents.openDevTools(),
            visible: isDev()
          },
          {
            label: 'CPU',
            click: () => {
              //! 这里的通信到底怎么实现的？？？ useEffect到底做了些什么？？？
              ipcWebContentsSend("changeView",mainWindow.webContents,'CPU')
            }
          },
          {
            label: "RAM",
            click: () => ipcWebContentsSend("changeView",mainWindow.webContents,'RAM')
          }
        ]
      },

    ]
  )
  )
}