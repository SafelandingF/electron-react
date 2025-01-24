

const electron = require('electron')

// 在window中暴露其他对象

// on提供了监听事件的功能
// invoke提供了发送事件的功能
electron.contextBridge.exposeInMainWorld("electron",{
  subscribeStatistics: (cb) => {
    return ipcOn('statistics',(stats) => cb(stats))
  },
  changeView: (cb) => {
    return ipcOn('changeView',(view:View) => cb(view))
  },
  getStaticData: () => ipcInvoke("getStaticData")
} satisfies Window["electron"])


const ipcInvoke = <Key extends keyof EventPayLoadMapping>(key :Key): Promise<EventPayLoadMapping[Key]>=>{
  return electron.ipcRenderer.invoke(key)
}
const ipcOn = <Key extends keyof EventPayLoadMapping>(key:Key,
  cb:(palyload:EventPayLoadMapping[Key]) => void
):UnsubsciribeFunction=>{
  const callback = (_:Electron.IpcRendererEvent,palyload:EventPayLoadMapping[Key]) => cb(palyload)
  electron.ipcRenderer.on(key,callback)
  return () => electron.ipcRenderer.off(key,callback)
}