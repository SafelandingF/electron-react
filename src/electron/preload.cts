

const electron = require('electron')

// 在window中暴露其他对象
electron.contextBridge.exposeInMainWorld("electron",{
  subscribeStatistics:(cb:(statistics:any)=>void) => cb({}),
  getStaticData: () => console.log("getStaticData")
})