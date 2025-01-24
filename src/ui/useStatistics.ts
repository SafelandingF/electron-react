import { useEffect, useState } from "react"

export const useStatistics = (datePointCount:number) :Statistics[] =>{
  const [value,setValue] = useState<Statistics[]>([])
  useEffect(()=>{
    const unsub = window.electron.subscribeStatistics((stats:Statistics) =>{
      setValue(pre => {
        const newData = [...pre,stats]
        if(newData.length > datePointCount) newData.shift()
        return newData
      })
    })
    return unsub
  },[])

  return value
} 