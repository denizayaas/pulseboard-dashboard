import { ArrowUpRight, Sparkles } from 'lucide-react'
import type { DateRange } from '../../types/dashboard'

type KpiInsightProps = {
  activeRange: DateRange
}

const insightContent: Record<
  DateRange,
  {
    title: string
    description: string
    highlight: string
  }
> = {
  'Last 7 days': {
    title: 'Weekly performance is trending upward',
    description:
      'Revenue and transactions increased steadily during the last seven days, with Sunday showing the strongest performance.',
    highlight: '+6.4%',
  },
  'Last 30 days': {
    title: 'Monthly growth remains healthy',
    description:
      'The dashboard shows consistent week-over-week revenue growth and stable conversion performance across the month.',
    highlight: '+9.8%',
  },
  'Last 12 months': {
    title: 'Annual performance exceeded expectations',
    description:
      'Long-term revenue, active users, and transaction volume show strong momentum across the selected period.',
    highlight: '+12.5%',
  },
}

export function KpiInsight({ activeRange }: KpiInsightProps) {
  const insight = insightContent[activeRange]

  return (
    <section className="mb-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5 shadow-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-4">
          <div className="h-fit rounded-xl bg-cyan-500/20 p-3 text-cyan-300">
            <Sparkles size={22} />
          </div>

          <div>
            <p className="text-sm text-cyan-300">AI Performance Insight</p>
            <h3 className="mt-1 text-xl font-bold text-white">
              {insight.title}
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              {insight.description}
            </p>
          </div>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-400">
          <ArrowUpRight size={18} />
          <span className="font-semibold">{insight.highlight}</span>
        </div>
      </div>
    </section>
  )
}