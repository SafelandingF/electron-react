type Statistics = {
  cpuUsage: number,
  ramUsgae: number
}

type StaticData = {
  cupModel:string,
  totalMemoGb:number 
}

type EventPayLoadMapping = {
  statistics: Statistics,
  getStaticData: StaticData
}

type UnsubsciribeFunction = () => void

interface Window {
  electron:{
    subscribeStatistics: (cb:(statistics:Statistics) => void) => UnsubsciribeFunction,
    getStaticData: ()=> Promise<StaticData>
  }
}
