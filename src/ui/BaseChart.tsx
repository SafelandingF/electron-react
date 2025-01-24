import { AreaChart, CartesianGrid, ResponsiveContainer, Area, XAxis, YAxis} from "recharts"

interface BaseChartProps{
  data: any[]
}




export const BaseChart = (props: BaseChartProps) => {
  return (
    
      <ResponsiveContainer width={'100%'} height={150}>
        <AreaChart data={props.data}>
          <CartesianGrid stroke="'#333" strokeDasharray="5 5" fill="#1C1C1C"/>
          <Area 
          fillOpacity={0.3}
          fill="#0A4D5C"
          stroke="#5DD4EE"
          strokeWidth={3}
          type="monotone"
          dataKey="value"
          isAnimationActive={false}
          ></Area>
          <XAxis stroke="transparet" height={0}></XAxis>
          <YAxis domain={[0,100]} stroke="transparet" width={0}></YAxis>
        </AreaChart>
      </ResponsiveContainer>
    
  )


}