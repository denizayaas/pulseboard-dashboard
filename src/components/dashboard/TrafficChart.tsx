import { trafficData } from '../../data/dashboardData'

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'



export function TrafficChart() {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
      <div className="mb-6">
        <p className="text-sm text-slate-400">Traffic Sources</p>
        <h3 className="mt-1 text-xl font-bold text-white">
          Acquisition Channels
        </h3>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={trafficData}
              dataKey="value"
              nameKey="name"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={4}
            >
              {trafficData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: '#020617',
                border: '1px solid #1e293b',
                borderRadius: '12px',
                color: '#e2e8f0',
              }}
              formatter={(value) => [`${value}%`, 'Traffic']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {trafficData.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-slate-400">{item.name}</span>
            </div>

            <span className="text-sm font-semibold text-white">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </article>
  )
}