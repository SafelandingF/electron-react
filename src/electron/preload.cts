

const electron = require('electron')

// 在window中暴露其他对象
electron.contextBridge.exposeInMainWorld("electron",{
  subscribeStatistics:(cb:(statistics:any)=>void) => {
    electron.ipcRenderer.on('statistics',(_,data)=>{
      cb(data)
    })
  },
  getStaticData: () => electron.ipcRenderer.invoke("getStaticData")
})