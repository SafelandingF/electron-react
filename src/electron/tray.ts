import { getAssetsPath } from "./pathResolver.js"
import { app, BrowserWindow, Menu, Tray } from "electron"
import path from "path"

export const createTray = (mainWindow: BrowserWindow)=>{
  const tray = new Tray(path.join(getAssetsPath(), 'trayIcon.png'))
  tray.setContextMenu(Menu.buildFromTemplate([{
    label: "Quit",
    click: ()=>{
      app.quit()
    }
  },
  {
    label: 'Show',
    click: () => mainWindow.show()
  }

]))
}