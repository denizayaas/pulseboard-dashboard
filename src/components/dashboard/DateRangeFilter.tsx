import { CalendarDays } from 'lucide-react'
import type { DateRange } from '../../types/dashboard'

type DateRangeFilterProps = {
  activeRange: DateRange
  onRangeChange: (range: DateRange) => void
}

const ranges: DateRange[] = ['Last 7 days', 'Last 30 days', 'Last 12 months']

export function DateRangeFilter({
    activeRange,
    onRangeChange,
}: DateRangeFilterProps) {
    return (
        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-xl md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                    <CalendarDays size={20} />
                </div>

                <div>
                    <p className="text-sm text-slate-400">Date range</p>
                    <h3 className="text-lg font-semibold text-white">
                        Performance summary
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                        Showing data for {activeRange.toLowerCase()}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {ranges.map((range) => {
                    const isActive = activeRange === range

                    return (
                        <button
                            key={range}
                            onClick={() => onRangeChange(range)}
                            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${isActive
                                    ? 'bg-cyan-500 text-slate-950'
                                    : 'border border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                                }`}
                        >
                            {range}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}