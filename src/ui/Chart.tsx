import { useMemo } from "react"
import { BaseChart } from "./BaseChart"



export type ChartProps = {
  data : number[],
  maxDataPoints: number
}

export const Chart = (props:ChartProps) => {
  const preparedData = useMemo(()=>{
    const data = props.data.map(item =>({value:item * 100}))
    return [
      ...data,
      ...Array.from({length:props.maxDataPoints - data.length}).map(() => ({value:undefined}))
    ]
},[props.data,props.maxDataPoints])
  return <BaseChart data={preparedData}></BaseChart>
}