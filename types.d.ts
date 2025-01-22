type Statistics = {
  cupUsage: number,
  ramUsgae:number
}

type StaticData = {
  cupModel:string,
  totalMemoGb:number 
}

type EventPayLoadMapping = {
  statistics: Statistics,
  getStaticData: StaticData
}

interface Window {
  electron:{
    subscribeStatistics: (cb:(statistics:Statistics) => void) => void,
    getStaticData: ()=> Promise<StaticData>
  }
}