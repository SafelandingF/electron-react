import osUtils from 'os-utils'
import os from 'os'

const POLLING_INTERVAL = 500;
export const pollResource = ()=>{
  setInterval(async()=>{
    const cupUsage = await getCpuUsage()
    const ramUsgae = getRamUsage()
    console.log({cupUsage, ramUsgae})
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


const getCpuUsage = ()=>{
  return new Promise((resolve) => {
    osUtils.cpuUsage(resolve)
  })
}
const getRamUsage = () =>{
  return 1 - osUtils.freememPercentage()
}

