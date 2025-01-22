type Statistics = {
  cupUsage: number,
  ramUsgae:number
}

type StaticData = {
  cupModel:string,
  totalMemoGb:number 
}

interface Window {
  electron:{
    subscribeStatistics: (cb:(statistics:Statistics) => void) => void,
    getStaticData: ()=> Promise<StaticData>
  }
}