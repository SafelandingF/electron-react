type Statistics = {
  cpuUsage: number,
  ramUsgae: number
}

type StaticData = {
  cupModel:string,
  totalMemoGb:number 
}

type View = "CPU" | "RAM" | "STORAGE"

type EventPayLoadMapping = {
  statistics: Statistics,
  getStaticData: StaticData,
  changeView: View,
  sendFrameAction: FrameWindowAction
}

type UnsubsciribeFunction = () => void


type FrameWindowAction  = "CLOSE" | "MINIMIZE" | "MAXIMIZE"
interface Window {
  electron:{
    subscribeStatistics: (cb:(statistics:Statistics) => void) => UnsubsciribeFunction,
    getStaticData: ()=> Promise<StaticData>,
    changeView: (cb:(view:View)=> void) => UnsubsciribeFunction,
    sendFrameAction: (action:FrameWindowAction) => void
  }
}
