import { activities } from '../../data/dashboardData'

export function RecentActivity() {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
      <div className="mb-6">
        <p className="text-sm text-slate-400">Live Updates</p>
        <h3 className="mt-1 text-xl font-bold text-white">
          Recent Activity
        </h3>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon

          return (
            <div
              key={activity.title}
              className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
            >
              <div className="h-fit rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <Icon size={18} />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold text-white">
                    {activity.title}
                  </h4>

                  <span className="shrink-0 text-xs text-slate-500">
                    {activity.time}
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-400">
                  {activity.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}