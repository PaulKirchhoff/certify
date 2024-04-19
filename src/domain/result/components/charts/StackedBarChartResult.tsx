import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import {Card} from "antd";
import {StackedBarChartData} from "../../types/StackedBarChartData";

interface StackedBarChartResultProps {
  data: StackedBarChartData[]
}

export default function StackedBarChartResult({data}: StackedBarChartResultProps) {

  return (
      <Card style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
        <BarChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="category"/>
          <YAxis interval={0} tickCount={4}/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey="correct" stackId="a" fill="#2EAC20"/>
          <Bar dataKey="wrong" stackId="a" fill="#AC181A"/>
        </BarChart>
      </Card>
  )
}
