import osUtils from 'os-utils'
import os from 'os'
import { BrowserWindow } from 'electron';
import { ipcWebContentsSend } from './ipcHandle.js';

const POLLING_INTERVAL = 500;
export const pollResource = (mainWindow:BrowserWindow)=>{
  setInterval(async()=>{
    const cpuUsage = await getCpuUsage()
    const ramUsgae = getRamUsage()
    ipcWebContentsSend('statistics',mainWindow.webContents,{cpuUsage,ramUsgae})
  },POLLING_INTERVAL)
}

export const getStaticData= ( )=>{
  const cupModel = os.cpus()[0].model
  const totalMemoGb = Math.floor(osUtils.totalmem()/ 1024)
  return {
    cupModel,
    totalMemoGb, 
  }
}


const getCpuUsage = ():Promise<number> =>{
  return new Promise((resolve) => {
    osUtils.cpuUsage(resolve)
  })
}
const getRamUsage = () =>{
  return 1 - osUtils.freememPercentage()
}

