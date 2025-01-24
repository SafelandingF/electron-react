import { app, BrowserWindow, Menu } from "electron";
import { isDev } from "./utils/env.js";
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
          }
        ]
      },

    ]
  )
  )
}