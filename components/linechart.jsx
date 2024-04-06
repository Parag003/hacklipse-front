'use client'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: '10:00', uv: 10, pv: 2400, amt: 2400 },
  { name: '11:00', uv: 8, pv: 2400, amt: 2400 },
  { name: '12:00', uv: 2, pv: 2400, amt: 2400 },
  { name: '1:00', uv: 20, pv: 2400, amt: 2400 },
  { name: '2:00', uv: 50, pv: 2400, amt: 2400 },
  { name: '3:00', uv: 20, pv: 2400, amt: 2400 },
  { name: '4:00', uv: 3, pv: 2400, amt: 2400 },
  // Add more data points as needed
];

export default function Linechart() {
  return (
    <div className='bg-white rounded-lg '>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  )
}
