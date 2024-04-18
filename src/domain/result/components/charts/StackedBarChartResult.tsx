import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Card} from "antd";

export default function StackedBarChartResult() {
  const data = [
    {
      name: 'Page A',
      wrong: 4000,
      correct: 2400,
      // amt: 2400,
    },
    {
      name: 'Page B',
      wrong: 3000,
      correct: 1398,
      // amt: 2210,
    },
    {
      name: 'Page C',
      wrong: 2000,
      correct: 9800,
      // amt: 2290,
    },
    {
      name: 'Page D',
      wrong: 2780,
      correct: 3908,
      // amt: 2000,
    },
    {
      name: 'Page E',
      wrong: 1890,
      correct: 4800,
      // amt: 2181,
    },
    {
      name: 'Page F',
      wrong: 2390,
      correct: 3800,
      // amt: 2500,
    },
    {
      name: 'Page G',
      wrong: 3490,
      correct: 4300,
      // amt: 2100,
    },
  ];
  return (
      <Card>
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey="correct" stackId="a" fill="#2EAC20"/>
          <Bar dataKey="wrong" stackId="a" fill="#AC181A"/>
        </BarChart>
      </Card>
  )
}
