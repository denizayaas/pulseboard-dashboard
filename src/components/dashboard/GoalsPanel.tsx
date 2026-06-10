import { Target } from 'lucide-react'
import { goalsData } from '../../data/dashboardData'

export function GoalsPanel() {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Business Goals</p>
          <h3 className="mt-1 text-xl font-bold text-white">
            Target Progress
          </h3>
        </div>

        <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
          <Target size={20} />
        </div>
      </div>

      <div className="space-y-5">
        {goalsData.map((goal) => (
          <div key={goal.title}>
            <div className="mb-2 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-white">{goal.title}</h4>
                <p className="mt-1 text-sm text-slate-400">
                  {goal.description}
                </p>
              </div>

              <span className="shrink-0 text-sm font-semibold text-white">
                {goal.value}
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-500"
                style={{ width: `${goal.progress}%` }}
              />
            </div>

            <p className="mt-2 text-right text-sm text-slate-400">
              {goal.progress}% completed
            </p>
          </div>
        ))}
      </div>
    </article>
  )
}