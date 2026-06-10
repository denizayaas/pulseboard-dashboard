import { useState } from 'react'
import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'
import { CampaignTable } from './components/dashboard/CampaignTable'
import { DateRangeFilter } from './components/dashboard/DateRangeFilter'
import { GoalsPanel } from './components/dashboard/GoalsPanel'
import { KpiInsight } from './components/dashboard/KpiInsight'
import { RecentActivity } from './components/dashboard/RecentActivity'
import { RevenueChart } from './components/dashboard/RevenueChart'
import { SettingsPanel } from './components/dashboard/SettingsPanel'
import { StatCard } from './components/dashboard/StatCard'
import { TopProducts } from './components/dashboard/TopProducts'
import { TrafficChart } from './components/dashboard/TrafficChart'
import { revenueDataByRange, statsByRange } from './data/dashboardData'
import type { DateRange } from './types/dashboard'

function App() {
  const [activeRange, setActiveRange] = useState<DateRange>('Last 30 days')

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex">
        <Sidebar />

        <main className="min-h-screen flex-1">
          <Header />

          <section className="p-6">
            <DateRangeFilter
              activeRange={activeRange}
              onRangeChange={setActiveRange}
            />

            <KpiInsight activeRange={activeRange} />

            <div
              id="overview"
              className="scroll-mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
            >
              {statsByRange[activeRange].map((stat) => (
                <StatCard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  icon={stat.icon}
                />
              ))}
            </div>

            <div
              id="analytics"
              className="mt-6 scroll-mt-6 grid gap-6 xl:grid-cols-3"
            >
              <div id="revenue" className="scroll-mt-6 xl:col-span-2">
                <RevenueChart data={revenueDataByRange[activeRange]} />
              </div>

              <TrafficChart />
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2">
                <CampaignTable />
              </div>

              <GoalsPanel />
            </div>

            <div
              id="reports"
              className="mt-6 scroll-mt-6 grid gap-6 xl:grid-cols-2"
            >
              <TopProducts />
              <RecentActivity />
            </div>

            <div className="mt-6">
              <SettingsPanel />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App